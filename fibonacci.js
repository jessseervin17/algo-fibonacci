function fibonacci(num) {
  //**Create empty fibonacci object
  let fibonacciObject={};
  // Keys are nth number in fibonacci sequence
  // Values are value of nth number
  // Add values and keys as you go */
  //**For loop
  for (let i =0; i <= num; i++) { //i values will be our keys
    console.log(fibonacciObject);
    fibonacciObject[i] = i+(i-1);
    console.log(`new key is ${i}, value is ${(i-1)+(i-2)}`);
    console.log(fibonacciObject);
    if (i === 0){
      fibonacciObject[i]=0;
      console.log("ACTUALLY! Value is 0");
    };
  };
  // generate fibonacci object
  // end when have reached nth number key
  // return value of nth key */
  console.log(`Done, returning ${fibonacciObject[num]}`);
  return fibonacciObject[num];
}

module.exports = fibonacci;

