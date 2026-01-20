// string
const greet: string = "hello world";

console.log(typeof greet);

// boolean

const isValid: boolean = false;

console.log(typeof isValid);

const contactNumber: number = 234;

console.log(typeof contactNumber);

// array

const users: string[] = ["Hello", "World"];

console.log(typeof users);

const randomNumbers: number[] = [1, 2, 3, 4, 5];

console.log(randomNumbers);
// object
function add(num1: number, num2: number) {
  return num1 + num2;
}

add(1, 2);

interface IUser {
  name: string;
  age: number;
  address: string[];
}

enum IRole {
  isAdmin = "admin",
  isStaff = "staff",
  isClient = "client",
}

type IAuth = {
  username: string;
  password: string;
  getDecryptToken: () => void;
  getEncryptToken: (toke: string) => string;
} & IUser;

interface IProfile extends IUser {
  me: string;
}

const userRole: IRole = IRole.isAdmin;

const getMe: IProfile = {
  me: "",
  name: "",
  age: 0,
  address: [],
};

type IGetWinner = {
  [key: string]: string;
} & {
  rewards?: string;
};

const getWinner: IGetWinner = {
  player1: "Bob",
  player2: "Alice",
  player3: "John",
};

type IDataType =
  | string
  | boolean
  | number
  | any
  | never
  | undefined
  | null
  | undefined;

const randomName: IDataType = "Alice go" as string;

const userInfo: IUser[] = [
  {
    name: "Alice",
    age: 25,
    address: ["New York"],
  },
];

type IResponse<T extends object | any | unknown> = {
  data: T;
};

export type { IUser, IResponse };

// Partial
// Exclude
// Omit
// Pick
