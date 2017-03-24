describe('math', function() {
    it('add two prands', function(){
        var add = require('../../lib/math/math');
        var sum = add(1,2);
        expect(sum).toEqual(3);      
    })
});