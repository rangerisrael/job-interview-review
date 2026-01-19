const quotes = [
  {
    id: 1,
    quote: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  },
  {
    id: 2,
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    id: 3,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
];

function getQuotes(quote: string, ...arg: string[]) {
  return { quotes, ...arg, quote };
}

type IQuotes = Parameters<typeof getQuotes>;

const newQuote: IQuotes = ["Some joke are half meant", "args"];

console.log(newQuote);

function greetings(this: { name: string }, age: number, msg: string) {
  console.log(`${msg}, ${this.name} is ${age}`);
}

type P = Parameters<typeof greetings>;
//not ignore this
