'use strict'

function FizzBuzz(number) {
    if(number % 3 === 0){
        return 'Fizz';
    } 
    if(number % 5 === 0) {
        return 'Buzz';
    }
    return number.toString();
}

module.exports = FizzBuzz;