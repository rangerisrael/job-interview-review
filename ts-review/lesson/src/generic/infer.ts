// infer

import axios from "axios";
import { AxiosResponse } from "axios";

import { S } from "ts-toolbelt";

const userInfo = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
};

const userList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];

// get the type
type IUserInfoDetails = ReturnType<() => typeof userInfo>;

type IUserInfoDetailsList = ReturnType<() => typeof userList>;

//convert to array the key
type IUserList = (keyof IUserInfoDetails)[];

// string
type Roles = "admin,staff,client";

//cv to array
type ToString = S.Split<Roles, ",">;

//infer

//func
const userFunction = {
  getFullName: () => "Matt Pocock",
};

const getAgeDetails = () => "30";

//object
type IUserObject<T> = T extends {
  getFullName: () => infer FullName;
}
  ? FullName
  : never;

const getNameInput: IUserObject<typeof userFunction> =
  userFunction.getFullName();
console.log(getNameInput);

type IUserAge<K> = K extends () => infer P ? P : never;

const getAgeInput: IUserAge<typeof getAgeDetails> = getAgeDetails();

console.log(getAgeInput);

type IUserDetailsInfer<P> = P extends {
  getFullName: () => infer Result;
}
  ? Result
  : P extends () => infer Result
    ? Result
    : never;

const getFullName: IUserDetailsInfer<typeof userFunction> =
  userFunction.getFullName();
const getAge: IUserDetailsInfer<typeof getAgeDetails> = getAgeDetails();

// promises

const apiUser = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const req = await fetch(apiUser);
  const response: IUserInfoDetails[] = await req.json();

  return response;
};

type IPromiseInference<T> = T extends () => Promise<(infer Attr)[]>
  ? Attr
  : never;

type IFetchRequest = IPromiseInference<typeof fetchUsers>;

const fetchUsersInput: IFetchRequest[] = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
  },
];

const fetchUsersInputNumber: IFetchRequest = {
  id: 0,
  name: "",
  username: "",
  email: "",
};

console.log(fetchUsersInput);
console.log(fetchUsersInputNumber);

//await

type IAwaitPromise = Awaited<ReturnType<typeof fetchUsers>>[number];

const getAwaitedUsers: IAwaitPromise = {
  id: 0,
  name: "",
  username: "",
  email: "",
};

const getAwaitedUser: IAwaitPromise[] = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
  },
];

console.log(getAwaitedUser);
console.log(getAwaitedUsers);

// axios fetching

const fetchUsersByAxios = async (): Promise<
  AxiosResponse<IUserInfoDetails[]>
> => {
  const req = await axios.get(apiUser);
  const response: AxiosResponse<IUserInfoDetails[]> = await req.data;

  return response;
};

type IAxiosAwaitedPromises = Awaited<
  ReturnType<typeof fetchUsersByAxios>
>[number];

const getAwaitedUserAxios2: IAxiosAwaitedPromises[] = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
  },
];

console.log(getAwaitedUserAxios2);

type AxiosInferFetch<T> =
  T extends AxiosResponse<Promise<(infer Obj)[]>> ? Obj : never;

type IAxiosRequest = AxiosInferFetch<typeof fetchUsersByAxios>;

const getAwaitedUserAxios: IAxiosRequest[] = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
  },
];

console.log(getAwaitedUserAxios);
