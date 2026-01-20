interface IUserInfoDto {
  name: string;
  age: number;
  address: string[];
}

type IAuth = {
  username: string;
  password: string;
  getDecryptToken: () => void;
  getEncryptToken: (toke: string) => string;
} & IUserInfoDto;

type IGetWinner = {
  [key: string]: string;
} & {
  rewards?: string;
};

const getWinners: IGetWinner = {
  player1: "Bob",
  player2: "Alice",
  player3: "John",
};
