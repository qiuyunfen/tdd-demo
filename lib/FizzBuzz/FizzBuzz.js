'use strict'

function FizzBuzz(number) {
    let str = '';
    if(number % 3 === 0){
        str += 'Fizz';
    } 
    if(number % 5 === 0) {
        str += 'Buzz';
    }
    if(number % 3 !== 0 && number % 5 !== 0) {
        str += number.toString();
    }
    return str;
}

module.exports = FizzBuzz;