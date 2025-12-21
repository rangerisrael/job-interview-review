function createCounter(counter) {
  function increament(count = 1) {
    return counter + count;
  }

  function decrement(count = 1) {
    return counter > 0 ? counter - count : counter;
  }

  return {
    increament,
    decrement,
  };
}

const calculate = createCounter(5);
console.log(calculate.increament(2)); 
console.log(calculate.decrement(1)); 
const calculate2 = createCounter(0);
console.log(calculate2.decrement());
