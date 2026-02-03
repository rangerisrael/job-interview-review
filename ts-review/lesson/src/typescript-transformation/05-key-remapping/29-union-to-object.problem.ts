import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [R in Route]: R;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >,
];

const objectLink = {
  url: "test",
} as const;

type IObject = (typeof objectLink)[keyof typeof objectLink];

type IUnionLink = {
  [R in S.Replace<Route, '""', "">]: IObject;
};

const route: IUnionLink = {
  "/": "test",
  "/about": "test",
  "/admin": "test",
  "/admin/users": "test",
};
