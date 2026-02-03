import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = {
  [K in keyof Attributes]: () => Attributes[K];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];

const objectRe = {
  firstName: "ej",
  lastName: 1,
};
type IMapProp = keyof typeof objectRe;

type ObjectRec = {
  [Prop in IMapProp]: (typeof objectRe)[Prop];
};

const profileName: ObjectRec = {
  firstName: "",
  lastName: 0,
};
