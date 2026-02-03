"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center h-screen">
      <div className="w-2xl h-60 bg-slate-100 rounded-md p-10 py-5">
        <p className="text-center text-black font-semibold text-2xl">Counter</p>
        <p className="text-center my-5 text-xl" data-testid="count">
          Count: {count}
        </p>
        <section className="flex gap-2 justify-center pt-10">
          <button
            className="bg-red-400 text-white px-10 py-2 rounded-md font-medium"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <button
            className="bg-indigo-400 text-white px-10 py-2 rounded-md font-medium"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </section>
      </div>
    </div>
  );
}
