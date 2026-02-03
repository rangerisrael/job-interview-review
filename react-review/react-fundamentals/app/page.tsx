"use client";

import React, { Suspense, useEffect, useState } from "react";
import { build, sequence, perBuild } from "@jackfranklin/test-data-bot";
import { faker } from "@faker-js/faker";
import MainLayout from "./common/layout";
import PopupModal from "./common/widget/Modal";
import { usePopModal } from "./utils/global-state/useModal";
import Pagination from "./common/widget/Pagination";
import DropdownSearch from "./common/widget/DropdownSearch";
import { filterSearch } from "./utils/helper/filter-object";
import ReusableTable from "./common/widget/Table";

const userBuilder = build({
  fields: {
    id: sequence(),
    name: perBuild(() => faker.person.fullName()), // updated from faker.name.fullName()
    age: perBuild(() => faker.number.int({ min: 18, max: 80 })), // updated from faker.datatype.number
    address: perBuild(
      () =>
        `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state({ abbreviated: true })} ${faker.location.zipCode()}`,
    ),
  },
});

const users = userBuilder.many(20);

export type IUser = (typeof users)[number];

const Page = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [open, setOpen] = usePopModal();

  const [{ currentPage, itemPerPage }, setPage] = useState<{
    currentPage: number;
    itemPerPage: number;
  }>({
    currentPage: 1,
    itemPerPage: 5,
  });

  useEffect(() => {
    const userBuilder = build<IUser>({
      fields: {
        id: sequence(),
        name: perBuild(() => faker.person.fullName()),
        age: perBuild(() => faker.number.int({ min: 18, max: 80 })),
        address: perBuild(
          () =>
            `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state({ abbreviated: true })} ${faker.location.zipCode()}`,
        ),
      },
    });

    setUsers(userBuilder.many(1000)); // generate on client only
  }, []);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const total = Math.ceil(users.length / itemPerPage);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const [filterKeyword, setFilterKeywork] = useState<Partial<IUser>>({});

  return (
    <>
      <MainLayout title="homepage">
        {/* <Counter /> */}
        {/* <h1>Content</h1> */}

        <div className="w-full flex justify-center my-2">
          <button
            className="bg-indigo-500 text-white rounded-md px-10 py-2"
            onClick={() => setOpen(!open)}
          >
            Open modal
          </button>
        </div>

        <div className="max-w-300 max-h-160 mx-auto">
          <div className="grid grid-cols-3">
            {Array.isArray(users) &&
              Object.keys(users[0] || []).map((value, i) => (
                <section className="flex gap-1" key={i}>
                  <label
                    htmlFor="searchInput"
                    className="font-semibold text-zinc-500"
                  >
                    {String(value).toUpperCase()}
                  </label>

                  <DropdownSearch
                    filterKey={value}
                    data={users}
                    index={i}
                    id={`searchInput-${value}${i}`}
                    isOpen={openDropdown === i}
                    setOpen={(shouldOpen, index) => {
                      // Only update if it's THIS dropdown (index matches)
                      if (index === i) {
                        setOpenDropdown(shouldOpen ? i : null);
                      }
                    }}
                    setFilterKeywork={(listObject) =>
                      setFilterKeywork(listObject)
                    }
                  />
                </section>
              ))}
            <div className="ml-19 mt-5">
              <button
                className="bg-indigo-500 text-white rounded-md px-10 py-2 cursor-pointer"
                onClick={() => {
                  const queryTerm = filterSearch(users, filterKeyword);

                  setUsers(queryTerm);
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-300 max-h-160 mx-auto overflow-y-auto my-10">
          {/* filter */}

          {/* end filter  */}
          <ReusableTable<any>
            caption={"Personal Details"}
            head={["id", "name", "age", "address"]}
            body={users.slice(startIndex, endIndex)}
            footer={
              <Pagination
                onCurrentPage={(currentPage, itemPerPage) => {
                  setPage({ currentPage, itemPerPage: itemPerPage });
                }}
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                totalPerPage={total}
                totalLength={users.length}
              />
            }
          />
        </div>
      </MainLayout>

      {open && (
        <PopupModal
          position="items-center"
          classes="w-300"
          onClose={() => setOpen(false)}
        >
          <h1>Modal Text</h1>
        </PopupModal>
      )}
    </>
  );
};

export default Page;
