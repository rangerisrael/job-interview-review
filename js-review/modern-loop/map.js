//bad practicess

const postList = [
  {
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
  },
  {
    id: 2,
    title: "He was an expert but not in a discipline",
    body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    tags: ["french", "fiction", "english"],
    reactions: {
      likes: 859,
      dislikes: 32,
    },
    views: 4884,
    userId: 91,
  },
  {
    id: 3,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  },
];

// CLONE
//impure function
function addBadNewPost() {
  const newPost = {
    id: 4,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  };

  postList.push(newPost);
}

// console.log(addBadNewPost);

//modern way
// pure function

const addNewPost = (state) => {
  const newPost = {
    id: 4,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  };

  state.push(newPost);
};

const newData = addNewPost(postList);

// console.log(newData);

// old practices
const updateOldPost = () => {
  const getId = postList.findIndex((item) => item.id == 4);

  if (getId !== -1) {
  }
  return state;
};

//modern
const updatePostFindIndex = (state) => {
  const index = state.findIndex((item) => item.id == 4);

  //   if (index !== -1) {
  //     // state[index].title = "Dave";
  //     Object.assign(state[index], {
  //       title: "Hello world",
  //     });
  //   }
  //   index !== -1 && (state[index].title = "Hello world");

  index !== -1 && Object.assign(state[index], { title: "Hello world" });

  return state;
};

const updatePost = updatePostFindIndex(postList);

// console.log(postList);

const updatePostFind = (state) => {
  const post = state.find((item) => item.id == 4);

  //   post && (post.body = "Lorem Ipsum");
  post &&
    Object.assign(post, {
      body: "Followed you",
    });

  return state;
};

const updateViaFind = updatePostFind(postList);

// console.log(updateViaFind);

const updatePostMap = (state) => {
  //   return state.map((post) =>
  //     post.id === 4 ? { ...post, body: "New world order" } : post,
  //   );

  return state.map((post) =>
    post.id === 4 ? Object.assign({}, post, { body: "Wow nice" }) : post,
  );
};

const updateViaMap = updatePostMap(postList);

// console.log(updateViaMap);

const addNewPost2 = (state) => {
  const newPost = {
    id: 5,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  };

  return [...state, newPost];
};

const newPost = addNewPost2(postList);

// console.log(newPost);

const postNewMap = (state) => {
  const map = new Map();

  state.forEach((element) => map.set(element.id, element));

  const newPost = {
    id: 6,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ["magical", "history", "french"],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  };

  map.set(6, newPost);

  const toArray = Array.from(map.values());

  return toArray;
};

const getUpdateNewMap = postNewMap(postList);
console.log(getUpdateNewMap);
