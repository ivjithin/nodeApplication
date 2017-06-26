let Calculation = require('./calculation.js');
let Rectangle = require('./rectangle.js');

	let calc = new Calculation();
	let rectangle = new Rectangle(10,5);
	let area = calc.area(rectangle);
	console.log("Area of Rectangle is",area);
	let circum = calc.circumference(rectangle);
	console.log("Circumference  of Rectangle is",circum);


