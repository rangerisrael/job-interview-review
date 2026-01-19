//ReturnType
const onCalculateRandomNumber = (): number => {
  return Math.floor(Math.random()) as number;
};

type onCalculate = ReturnType<typeof onCalculateRandomNumber>;

function getUser() {
  return { id: 1, name: "Dev" };
}

type IUser = ReturnType<typeof getUser>;
