const comments = [
  {
    id: 1,
    body: "This is some awesome thinking!",
    postId: 242,
    likes: 3,
    user: {
      id: 105,
      username: "emmac",
      fullName: "Emma Wilson",
    },
  },
  {
    id: 2,
    body: "What terrific math skills you're showing!",
    postId: 46,
    likes: 4,
    user: {
      id: 183,
      username: "cameronp",
      fullName: "Cameron Perez",
    },
  },
];

//array
type IComments = ReturnType<() => typeof comments>;
//object
type IComment = ReturnType<() => (typeof comments)[0]>;

type IDataType = string | boolean | object | number;

const getRecords: Record<keyof IComment, IDataType>[] = [
  {
    id: 2,
    body: "What terrific math skills you're showing!",
    postId: 46,
    likes: 4,
    user: {
      id: 183,
      username: "cameronp",
      fullName: "Cameron Perez",
    },
  },
];

const getRecord: Record<keyof IComment, IDataType> = {
  id: 2,
  body: "What terrific math skills you're showing!",
  postId: 46,
  likes: 4,
  user: {
    id: 183,
    username: "cameronp",
    fullName: "Cameron Perez",
  },
};

console.log(getRecords);
console.log(getRecord);
