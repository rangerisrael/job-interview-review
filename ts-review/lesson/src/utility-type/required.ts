const quote = {
  id: 1,
  quote: "Life isn't about getting and having, it's about giving and being.",
  author: "Kevin Kruse",
};

type IQuote = ReturnType<() => typeof quote>;

//@ts-ignore
//default required
const getQuote: IQuote = {
  id: 0,
  quote: "",
};
//Property 'author' is missing in type '{ id: number; quote: string; }' but required in type 'Required<{ id: number; quote: string; author: string; }>'.ts(2741)

console.log(getQuote);
