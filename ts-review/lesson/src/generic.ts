type IDataRequest<T extends unknown> = {
  data: T;
};

const user: IDataRequest<unknown> = {
  data: "rest" as string,
};
