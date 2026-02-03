import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

abstract class Attr {
  abstract firstName: string;
  abstract lastName: string;
  abstract age: number;
}

type AttributeGetters = {
  [K in keyof Attr]: () => Attr[K];
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
