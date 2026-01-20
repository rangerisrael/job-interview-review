type IDataRequest<T extends unknown> = {
  data: T;
};

const user: IDataRequest<unknown> = {
  data: "rest" as string,
};

type IResponse<T extends object | any | unknown> = {
  data: T;
};

function apiResponse<T, P>(request: T): P {
  return {
    username: request,
  } as P;
}

apiResponse<Partial<ApiResponse>, Pick<ApiResponse, "username">>({
  username: "",
});
