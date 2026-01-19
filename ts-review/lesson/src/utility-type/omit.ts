const post = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  tags: ["history", "american", "crime"],
  reactions: {
    likes: 192,
    dislikes: 25,
  },
  views: 305,
  userId: 121,
};

type IPost = ReturnType<() => typeof post>;

const removeIdTitleReaction: Omit<IPost, "id" | "title" | "reactions"> = {
  body: "",
  tags: [],
  views: 0,
  userId: 0,
};

console.log(removeIdTitleReaction);
