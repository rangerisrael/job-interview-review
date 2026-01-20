type ApiResponse = {
  username: string;
  email: string;
  age: number;
  id: number;
};

type FormState = {
  [K in keyof ApiResponse]: ApiResponse[K];
};

type FormStateProperty = {
  [Property in keyof ApiResponse]: ApiResponse[Property];
};

type FormGenericState<Response> = {
  [Request in keyof Response]: Response[Request];
};

//utility type
type FormGenericStatewithOmit = {
  [Request in keyof Omit<ApiResponse, "id">]: ApiResponse[Request];
};

const request: FormGenericState<ApiResponse> = {
  username: "",
  email: "",
  age: 0,
  id: 0,
};

// Math.ceil whole value 14.45  + 15
// negative -14.64 remove decimal

//Math.floor = whole remove decimal
// negative  -4 + 1 = -5

//truncate
// + / - remove decimal
