// template literals

// routes

type IRoute = `/${string}`;

type IGetRouteId = `/${string}/${number}`;

type IGetParams = `/${string}?${string}=${number}`;

const routes: IRoute = "/url";
const getIdList: IGetRouteId = `/service/${2}`;
const filterTerm: IGetParams = `/service?id=${2}`;

type IKey = "id" | "username" | "email";
type IValue = string | number | boolean;

type IGetParamInput = `/${string}?${IKey}=${IValue}&keyword=${string}`;

type Routes = "/users" | `/users/${string}` | "/posts" | `/posts/${string}`;

type DynamicRoutes = Extract<Routes, `${string}/${string}`>;

const filterTermKeyword: IGetParamInput = `/service?id=${2}&username=${"test"}&email=${"test@gmail.com"}&keyword=${"hello"}`;

type IGetParamInputString =
  | `/service?id=${number}&keyword=${string}`
  | `/service?username=${string}&keyword=${string}`
  | `/service?email=${string}&keyword=${string}`
  | `/service?id=${number}&username=${string}&keyword=${string}`
  | `/service?id=${number}&email=${string}&keyword=${string}`
  | `/service?username=${string}&email=${string}&keyword=${string}`
  | `/service?id=${number}&username=${string}&email=${string}&keyword=${string}`;

const getParamsString: IGetParamInputString = "/service?id=1&keyword=test";

// key=value generic templete literals
type IPrimitive = string | number | boolean;

//id=1
type IKeyValue<T extends string, K extends IPrimitive> = T extends "?"
  ? `?${T}=${K}`
  : `${T}=${K}`;

//if their duplicate key exclude it
type ICombination<T extends string> = T extends IPrimitive
  ? T
  : `${T}${ICombination<Exclude<T, T>>}`;

type IQueryString = `${ICombination<IKeyValue<IKey, IValue>>}`;

type IServiceQueryString = `/services/${IQueryString}`;

const getFilterApiEnpoint: IServiceQueryString = "/services/id=2&keyword=hello";
