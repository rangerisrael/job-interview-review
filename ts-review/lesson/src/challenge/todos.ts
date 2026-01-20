import { isNull, isUndefined } from "lodash";

interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface IMeta {
  total: number;
  skip: number;
  limit: number;
}

interface IPage {
  currentPage: number;
  itemPerPage: number;
}

interface IFilterResponseTerm extends IPage {
  todos: ITodo[];
  totalPage: number;
}
// request

type IGetOneRequest = {
  [key: string]: string | number | boolean;
};

// response

type ITodosResponse = {
  todos: ITodo[] | [];
  meta: IMeta[] | [];
};

type ICreateResponse = {
  status: number;
  todo: ITodo;
};

type IBasicType = string | boolean | number;

const apiTodo = "https://dummyjson.com/todos";

const todoApi = "http://localhost:3000/todos";
const metaApi = "http://localhost:3000/meta";

const getTodos = async (
  log: boolean = false,
): Promise<ITodosResponse | undefined> => {
  try {
    const request = await Promise.all([
      await fetch(todoApi).then((res) => res.json()),
      await fetch(metaApi).then((res) => res.json()),
      ,
    ]);

    if (!request) {
      throw new Error("Request error");
    }

    const [todo, meta] = request;

    // convert to array
    // const todosArray = Object.assign([], todo[0]);
    // const metaArray = Object.assign([], meta[0]);

    if (log) {
      console.log({
        todos: todo ?? [],
        meta: meta ?? [],
        totalData: todo.length,
      });
    }

    return {
      todos: todo ?? [],
      meta: meta ?? [],
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Failed to fetch todos");
      return undefined;
    }
  }
};

const getOneTodo = async (
  getTodo: IGetOneRequest,
): Promise<ITodosResponse | string> => {
  const keys = Object.keys(getTodo)
    .map(
      (key) =>
        `${key}=${typeof getTodo[key] == "string" ? `"${getTodo[key]}"` : getTodo[key]}`,
    )
    .join("&");

  const value = Object.values(getTodo).join("").concat(String(getTodo.id));

  // filter all possible query
  const req = await fetch(apiTodo);
  const response: ITodosResponse = await req.json();

  // filter all possible query or property pass in params
  const map = new Map();

  if (!getTodo.id) {
    console.log("Id is required");

    return "Id is required to get specificData";
  }

  const hasId = (id: number) => {
    return getTodo.id
      ? Object.values(getTodo).join("").concat(String(id))
      : Object.values(getTodo).join("");
  };

  response.todos.forEach((lookup, idx) => map.set(hasId(lookup.id), lookup));

  // console.log(map);
  // console.log(value);
  console.table(map.get(value));

  return response;
};

const getTodoByTerm = async (
  getTodo: Partial<ITodo>,
): Promise<ITodo[] | undefined> => {
  const fetchTodos = await getTodos(false);

  const filterRequest = fetchTodos?.todos.filter((lookup: ITodo) => {
    return Object.entries(getTodo).every(([key, value]) => {
      const lookupTodo = lookup[key as keyof ITodo];

      return typeof value == "string"
        ? String(lookupTodo)
            .toLowerCase()
            .includes(value.toString().toLowerCase())
        : lookupTodo == value;
    });
  });

  console.table(filterRequest);
  return filterRequest;
};

const insertOne = async (
  newTodo: ITodo,
): Promise<ICreateResponse | undefined> => {
  try {
    const req = await fetch(todoApi, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...newTodo }),
    });

    console.table(newTodo);
    return {
      status: req.status,
      todo: newTodo,
    };
  } catch (error) {
    return undefined;
  }
};

const insertMany = async () => {
  //   get todos from api
  const request = await fetch(apiTodo);

  const response: ITodosResponse & IMeta = await request.json();
  //  insert todo to db
  const createTodo = response.todos.map(async (todo) => {
    return await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  });

  const createMeta = await fetch(metaApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      skip: response.skip,
      total: response.total,
      limit: response.limit,
    } as IMeta),
  });

  const req = await Promise.all([createTodo, createMeta]);

  if (!req) {
    console.log("Failed to create", req);
  } else {
    console.table(response);
  }

  return response;
};

const updateTodoviaAPI = async (
  id: number,
  todo: Partial<Omit<ITodo, "id">>,
): Promise<Partial<ITodo> | Error | string> => {
  try {
    const response = await fetch(`${todoApi}/${id}`);
    // const getTodo: ITodo = await response.json();

    if (response.status == 200) {
      const getTodo: ITodo = await response.json();
      const existingTodo: ITodo = getTodo;

      const updatedTodo = Object.assign(existingTodo, todo);

      const updateRequest = await fetch(`${todoApi}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      if (updateRequest.status == 200) {
        const updated: ITodo | Record<string, string | number | boolean> =
          await updateRequest.json();

        console.table(updated);

        return updated;
      } else {
        console.log("Failed to update");
        console.log(updatedTodo, "data", `${todoApi}/${id}`);
        return "Failed to update";
      }
    } else {
      console.log("Not found", response);
      return "Not found";
    }
  } catch (error) {
    console.log("err", error);
    return error as Error;
  }
};

const deleteOne = async ({
  id,
}: Pick<ITodo, "id">): Promise<string | Error | undefined> => {
  try {
    const deleteRequest = await fetch(`${todoApi}/${id}`, {
      method: "DELETE",
    });

    if (deleteRequest.ok) {
      console.log(`${id} was deleted`);

      return `${id} was deleted`;
    } else {
      console.log(`${deleteRequest} was deleted`);
      return undefined;
    }
  } catch (error) {
    return error as Error;
  }
};

const getTodoByTermbyPage = async (
  filteKey?: Partial<ITodo>,
  page?: IPage,
): Promise<string | IFilterResponseTerm | ITodo[]> => {
  const fetchTodos = await getTodos(false);
  const getFetchTodos = fetchTodos?.todos;

  if (!isUndefined(getFetchTodos) && !isUndefined(filteKey)) {
    // filter by key and value
    const filterTodo = getFetchTodos.filter((todo: ITodo) => {
      return Object.entries(filteKey).every(([key, value]) => {
        const todoValue = todo[key as keyof ITodo];
        return typeof value == "string" && typeof key == "string"
          ? todoValue
              .toString()
              .toLowerCase()
              .includes(value.toString().toLowerCase())
          : todoValue == value;
      });
    });

    if (
      !isUndefined(page) &&
      !isUndefined(page.currentPage) &&
      !isUndefined(page.itemPerPage)
    ) {
      const { currentPage, itemPerPage } = page;

      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;
      const totalPage = Math.ceil(filterTodo.length ?? 0 / itemPerPage);

      const filterTodosPerPage = filterTodo.slice(startIndex, endIndex);

      return {
        todos: filterTodosPerPage,
        totalPage,
        currentPage,
        itemPerPage,
      };
    } else {
      return filterTodo;
    }
  }
  if (
    !isUndefined(getFetchTodos) &&
    isUndefined(filteKey) &&
    page?.currentPage &&
    page.itemPerPage
  ) {
    const { currentPage, itemPerPage } = page;

    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const totalPage = Math.ceil(getFetchTodos.length / itemPerPage);

    const filterTodoData = getFetchTodos.slice(start, end);

    return {
      todos: filterTodoData,
      totalPage,
      currentPage,
      itemPerPage,
    };
  } else {
    return "Not found";
  }
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TODO !!!!!!!!!!!!!!!!!!!!!!!!

// insertMany();
// getTodos(true);

// insertOne({
//   id: 31,
//   todo: "Knowledge is not just a power its profit",
//   completed: false,
//   userId: 90,
// });
//curl http://localhost:3000/todos
// http://localhost:3000/todos?id=1&completed=false
// getOneTodo({
//   id: 3,
// });

// getTodoByTerm({
//   userId: 162,
// });

getTodoByTermbyPage(undefined, {
  currentPage: 2,
  itemPerPage: 3,
}).then((res) => {
  if (typeof res == "object" && !isNull(res) && "todos" in res) {
    console.log(res.todos);
  }
});

// updateTodoviaAPI(16, {
//   todo: "Analysis Paralysis",
// });

// deleteOne({ id: 16 });
