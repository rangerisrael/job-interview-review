import React, { useState } from "react";
import { ChangeHandler, ObjectRecord } from "./type";
import RenderIf from "../function/RenderIf";
import { isEmpty } from "lodash";
import {
  filterExcludeInputEl,
  filterSearch,
} from "@/app/utils/helper/filter-object";

type IDropdownProps<T extends ObjectRecord> = {
  data: T[];
  filterKey: string;
  id: string;
  index: number;
  isOpen: boolean;
  setOpen: (value: boolean, index: number) => void;
  setFilterKeywork: (obj: ObjectRecord) => void;
};

// function Input() {}

// function SearchInput() {}

// function Menu() {}

const DropdownSearch = <T extends ObjectRecord>({
  data,
  filterKey,
  id,
  isOpen: open,
  index,
  setOpen,
  setFilterKeywork,
}: IDropdownProps<T>) => {
  const [getData, setData] = useState<T[]>(() => data);
  const [inputEl, setInputEl] = useState<string>("");

  //   const onSearch = (e: ChangeHandler) => {
  //     const queryTerm = filterSearch(data, {
  //       [filterKey]: e.target.value,
  //     });

  //     setData(queryTerm);
  //   };

  const onSearch = (e: ChangeHandler) => {
    const value = e.target.value;
    setInputEl(value); // always update input
    setOpen(true, index); // keep dropdown

    const queryTerm = filterSearch(data, {
      [filterKey]: e.target.value,
    });

    if (!value.trim()) {
      setData(queryTerm); // reset filtered data
      return;
    }

    setData(queryTerm);
  };

  const onHandleInputChange = (value: string) => {
    if (!isEmpty(value)) {
      setInputEl(value);

      const excludeFilterValue = filterExcludeInputEl(data, filterKey, value);

      setData(excludeFilterValue);
      setOpen(false, index);
      setFilterKeywork({ [filterKey]: value });
    }
  };

  return (
    <RenderIf value={!isEmpty(data)}>
      <section className="relative  w-80  bg-slate-100 border border-b border-gray-100 rounded-md my-10">
        <div>
          {/* input */}

          {/* search */}
          <input
            id={id}
            value={inputEl}
            type="search"
            name="searchEl"
            placeholder="Search"
            onBlur={() => {
              setTimeout(() => setOpen(false, index), 100);
            }}
            onChange={onSearch}
            onFocus={() => {
              setOpen(true, index);
              setData(data); // ← Reset to original data when focusing
            }}
            className="outline-none  border border-b border-teal-100 rounded-md w-full"
          />
        </div>

        <RenderIf value={open}>
          <ul className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-50 mt-1">
            {!isEmpty(getData) &&
              getData.map((list: T, idx) => {
                const item = list[filterKey as keyof T];
                const itemString = String(item ?? "");

                return (
                  <li
                    key={idx}
                    onMouseDown={() => onHandleInputChange(itemString)}
                    className="cursor-pointer hover:bg-gray-300 hover:text-zinc-700 px-3 py-2"
                  >
                    {itemString}
                  </li>
                );
              })}
          </ul>
        </RenderIf>
      </section>
    </RenderIf>
  );
};

export default React.memo(DropdownSearch);
