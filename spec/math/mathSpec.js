describe('math', function() {
    var math = require('../../lib/math/math');
    it('should return the sum of two oprands', function(){
        var sum = math.add(1,2);
        expect(sum).toEqual(3);      
    })

    it('should return the substraction of two oprands', function() {
        var substraction = math.minus(3,2);
        expect(substraction).toEqual(1);
    })
});