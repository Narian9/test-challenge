const { boolean } = require("yargs")

/*Write a function that takes in a number and returns one of the following:
    - If the number is divisible by 3, return 'Fizz'.
    - If the number is divisible by 5, return 'Buzz'.
    - If the number is divisible by 3 and 5, return 'FizzBuzz'
    - Else, return the number passed as an argument
 */
const fizzBuzz = num => !(num % 3) && !(num % 5) ? 'FizzBuzz': !(num % 5)? 'Buzz': !(num % 3)? 'Fizz':num;

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4));
