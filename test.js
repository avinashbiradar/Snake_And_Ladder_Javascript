let  expect = require('chai').expect;

describe('Math', function() {
    describe('testing random', function() {
        it('should return positive value 1', function() {
            expect(Math.floor((Math.random()*6)+1)).equal();
        });
        it('should return positive value 2', function() {
            expect(Math.floor((Math.random()*6)+1)).equal(2);
        });
        it('should return positive value 3', function() {
            expect(Math.floor((Math.random()*6)+1)).equal(3);
        });
        it('should return positive value 4', function() {
            expect(Math.floor((Math.random()*6)+1)).equal(4);
        });
        it('should return positive value 5', function() {
            expect(Math.floor((Math.random()*6)+1)).equal(5);
        });
        it('should return positive value 6', function() {
            expect(Math.floor((Math.random()*6)+1)).equal(6);
        });
    });
});