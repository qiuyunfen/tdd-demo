describe('FizzBuzz', function() {
    var FizzBuzz = require('../../lib/FizzBuzz/FizzBuzz'); 
    it('should return string number when number is not 3 mul nor 5 mul', function() {
        var str = FizzBuzz(1);
        expect(str === '1').toEqual(true);
    })

    it('should return Fizz when number is 3 mul', function() {
        var fizzStr = FizzBuzz(3);
        expect(fizzStr).toEqual('Fizz');
    })

    it('should return Buzz when number is 5 mul', function() {
        var buzzStr = FizzBuzz(5);
        expect(buzzStr).toEqual('Buzz');
    })

    it('should return FizzBuzz when number is 15 mul', function() {
        var fizzBuzzStr = FizzBuzz(15);
        expect(fizzBuzzStr).toEqual('FizzBuzz');
    })

});