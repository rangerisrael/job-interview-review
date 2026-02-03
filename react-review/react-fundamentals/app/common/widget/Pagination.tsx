import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type IPaginationProps = {
  onCurrentPage: (currentPage: number, itemPerPage: number) => void;
  currentPage: number;
  itemPerPage: number;
  totalPerPage: number;
  totalLength: number;
};

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  itemPerPage,
  totalPerPage,
  totalLength,
  onCurrentPage,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const onPageHandler = (currentPage: number) => {
    onCurrentPage(currentPage, itemPerPage);
  };

  const onPageItemPerHandler = (itemPerPage: number) => {
    onCurrentPage(1, itemPerPage);
  };

  const handleScroll = () => {
    if (!listRef.current) return;
    console.log("scrollLeft:", listRef.current.scrollLeft);
  };

  useEffect(() => {
    const el = document.getElementById(`page-${currentPage}`);
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentPage]);

  return (
    <div className="w-full flex justify-evenly items-center gap-10">
      {/* select row */}
      <select
        defaultValue={itemPerPage}
        name="itemPerPage"
        onChange={({ target }) => onPageItemPerHandler(Number(target.value))}
      >
        {Array.from([5, 10, 15, 20, 25, 30, 35, 40]).map((value, i) => (
          <React.Fragment key={i}>
            <option key={i} value={value}>
              {value}
            </option>
          </React.Fragment>
        ))}
      </select>
      {/* list of pagination */}

      <ul
        className="flex gap-3 items-end w-100 overflow-x-auto no-scrollbar touch-pan-x"
        ref={listRef}
        onScroll={handleScroll}
      >
        {Array.from(
          { length: Math.ceil((totalLength + 1) / itemPerPage) },
          (_, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <li
                  id={`page-${i}`}
                  className={clsx(
                    "text-indigo-500 hover:underline cursor-pointer font-boldr",
                    {
                      underline: i === currentPage,
                    },
                  )}
                  key={i}
                  value={i}
                  onClick={() => onPageHandler(i)}
                >
                  {i}
                </li>
              )}
            </React.Fragment>
          ),
        )}
      </ul>

      {/* arrow <> */}

      <section className="flex gap-5 item-center text-indigo-500">
        <span
          className="cursor-pointer"
          onClick={() => currentPage > 1 && onPageHandler(currentPage - 1)}
        >
          {"<"}
        </span>
        <span
          className="cursor-pointer"
          onClick={() =>
            currentPage < totalPerPage && onPageHandler(currentPage + 1)
          }
        >
          {">"}
        </span>
      </section>
    </div>
  );
};

React.memo(Pagination);

export default Pagination;
