export interface IUserInfo {
  name: string;
  age: number;
  address: string[];
}

interface IProfile extends IUserInfo {
  me: string;
}

const getMe: IProfile = {
  me: "",
  name: "",
  age: 0,
  address: [],
};
