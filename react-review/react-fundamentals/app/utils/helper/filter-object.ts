import { ObjectRecord } from "@/app/common/widget/type";

export const filterSearch = <T extends ObjectRecord>(
  state: T[],
  keyword: ObjectRecord,
) => {
  return state.filter((item: T) =>
    Object.entries(keyword).every(([key, value]) =>
      typeof value === "string"
        ? (item as unknown as T)[key]
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : item[key] === value,
    ),
  );
};

export const filterExcludeInputEl = <T extends ObjectRecord>(
  state: T[],
  filterKey: keyof T,
  value: string,
) => {
  if (!value.trim()) return state;

  const search = value.toLowerCase();

  return state.filter((list) => {
    const item = list[filterKey];
    return !String(item).toLowerCase().includes(search);
  });
};
