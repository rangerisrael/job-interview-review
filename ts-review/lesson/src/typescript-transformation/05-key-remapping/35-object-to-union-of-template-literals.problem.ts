import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >,
];

type Status = {
  success: "succes";
  error: "error";
  info: "info";
  warn: "warning";
};

type IPipeStatus = {
  [Property in keyof Status]: Status[Property];
}[keyof Status];

type IPipeExtractStatus = Extract<
  Status,
  {
    success: "succes";
  }
>;
