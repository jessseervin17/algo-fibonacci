function fibonacci(num) {
  //**Create empty fibonacci object
  let fibonacciObject={};
  // Keys are nth number in fibonacci sequence
  // Values are value of nth number
  // Add values and keys as you go */
  //**For loop
  for (let i = 1; i <= num; i++) { //i values will be our keys
    if (num === 0){
      console.log("returning 0")
      return 0;
    } else if (num === 1){
      console.log("returning 1")
      return 1;
    }
    console.log(`Giving the ${num}th fibonacci!`)
    console.log(fibonacciObject);
    let change = (i-1)+(i-2);
    fibonacciObject[i] = change;
    console.log(`new key is ${i}, value is ${change}`);
    console.log(fibonacciObject);
  };
  // generate fibonacci object
  // end when have reached nth number key
  // return value of nth key */
  console.log(`Done, returning ${fibonacciObject[num]}`);
  return fibonacciObject[num];
}

fibonacci(0)
fibonacci(2)
fibonacci(5)

module.exports = fibonacci;

