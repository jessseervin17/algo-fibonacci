function fibonacci(num) {
  //**Create empty fibonacci object
  let fibonacciObject={};
  // Keys are nth number in fibonacci sequence
  // Values are value of nth number
  // Add values and keys as you go */
  //**For loop
  for (let i =0; i <= num; i++) { //i values will be our keys
    fibonacciObject[i] = i+(i-1);
  }
  // generate fibonacci object
  // end when have reached nth number key
  // return value of nth key */
  return fibonacciObject[num];
}
module.exports = fibonacci;

