// exclude example
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "triangle"; width: number; height: number };

const getCircle: Exclude<Shape, { kind: "circle" }> = {
  kind: "triangle",
  width: 0,
  height: 0,
};
