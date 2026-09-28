function fibonacci(num) {
  let fibonacciObject={};
  for (let i = 0; i <= num; i++) {
    if (i === 0){
      fibonacciObject[i]=0;
      continue;
    } else if (i === 1){
      fibonacciObject[i]=1;
      continue;
    };
    let change = fibonacciObject[i-1]+fibonacciObject[i-2];
    fibonacciObject[i] = change;
  };
  return fibonacciObject[num];
}

fibonacci(0)
fibonacci(2)
fibonacci(5)

module.exports = fibonacci;

