// Import chai.
let chai = require('chai'),
  path = require('path');

// Tell chai that we'll be using the "should" style assertions.
let assert = chai.assert;
// Import the Rectangle class.
let Calculation = require(path.join(__dirname, '..', 'calculation'));
 
describe('Calculation', () => {
     let calc;
     let rectangle ;
    
     beforeEach(() => {
      	calc = new Calculation();
        rectangle = {"width" :10,"height":20};	
    });
describe('Area', () => {
  
   	it('(10,20) should return area 200 ', () => {
		assert.equal(calc.area(rectangle), 100);
  });
  
});
describe('Circumference', () => {

	it('(10,20) should return circumference 60', () => {
		assert.equal(calc.circumference(rectangle), 60);
		
	});
});
  });