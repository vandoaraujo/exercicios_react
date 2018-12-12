import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1></h1>, document.getElementById('app'))


const numbers = [1, 2, 3];
const square = x => (x * x)/x;
console.log(numbers.map(square)); 

var numbers2 = [1, 4, 7, 10];

const isBiggerThanFour = value => value > 4;

var numbersBiggerThanFour = numbers2.filter(isBiggerThanFour); // [7, 10]
console.log(numbersBiggerThanFour)