import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type IFakeData = typeof fakeDataDefaults;

type IFakeDataMap = {
  [K in keyof IFakeData]: IFakeData[K];
};

export type StringType = IFakeDataMap["String"];
export type IntType = IFakeDataMap["Int"];
export type FloatType = IFakeDataMap["Float"];
export type BooleanType = IFakeDataMap["Boolean"];
export type IDType = IFakeDataMap["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
