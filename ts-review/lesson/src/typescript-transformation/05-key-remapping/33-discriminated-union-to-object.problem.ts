import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// type RoutesObject = {
//   [Props in Route["route"]]: Extract<Route, { route: Props }>["search"];
// };

type RoutesObject = {
  [Key in Route as Key["route"]]: Key["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >,
];

const objRes = {
  route: "/",
  search: {
    page: 1,
    perPage: 10,
  },
};

type IObject = (typeof objRes)[keyof typeof objRes]["routes"];

type IObjectRes = {
  [PropsKey in IObject]: PropsKey["search"];
};
