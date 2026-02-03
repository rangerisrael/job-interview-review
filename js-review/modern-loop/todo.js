const todos = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
    userId: 152,
  },
  {
    id: 2,
    todo: "Memorize a poem",
    completed: true,
    userId: 13,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: true,
    userId: 68,
  },
  {
    id: 4,
    todo: "Watch a documentary",
    completed: false,
    userId: 84,
  },
];

//check specific key
const checkTodoExist = (state, getTodo) => {
  const getIndex = state.findIndex(
    (item) => item.id == getTodo.id || item.todo === getTodo.todo,
  );

  return getIndex !== -1 ? getIndex : -1;
};

const addTodo = (state, newTodo) => {
  const index = checkTodoExist(state, { todo: newTodo.todo });

  return index !== -1 ? "Todo already inserted" : state.push(newTodo);
};

const updateTodo = (state, id, updateTodo) => {
  const index = checkTodoExist(state, { id });

  console.log(
    index !== -1
      ? Object.assign(state[index], updateTodo)
      : "Todo Id not found",
  );

  return index !== -1
    ? Object.assign(state[index], updateTodo)
    : "Todo Id not found";
};

const updateTodoFind = (state, id, updateTodo) => {
  const findValue = state.find((todo) => todo.id === id);

  return findValue ? Object.assign(findValue, updateTodo) : "Id not found";
};

const deleteTodo = (state, id) => {
  const index = checkTodoExist(state, { id });

  return index !== -1 ? state.splice(index, 1) : "Id not found";
};

addTodo(todos, {
  id: 5,
  todo: "Analysis Paralysis",
  completed: true,
  userId: 23,
});

updateTodo(todos, 4, {
  completed: true,
  todo: "Knowledge is powered by johnson",
});

deleteTodo(todos, 1);

console.log(todos);
