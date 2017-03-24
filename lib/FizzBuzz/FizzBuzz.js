'use strict'

function FizzBuzz(number) {
    if(number % 3 === 0){
        return 'Fizz';
    } 
    return number.toString();
}

module.exports = FizzBuzz;