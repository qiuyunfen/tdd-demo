describe('FizzBuzz', function() {
    var FizzBuzz = require('../../lib/FizzBuzz/FizzBuzz'); 
    it('should return string number when number is not 3 mul nor 5 mul', function() {
        var str = FizzBuzz(1);
        //expect(str).toEqual('1');
        expect(str === '1').toEqual(true);
    })


});