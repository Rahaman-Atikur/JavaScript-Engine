let numberOne = 10;
let numberTwo = 20;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

let totalNumber = numberOne + numberTwo;

console.log(totalNumber);
