

const factorial = num => num > 1 ? num * factorial(num-1):1;

console.log(factorial(6));