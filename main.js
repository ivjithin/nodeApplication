let Calculation = require('./calculation.js');
let Rectangle = require('./rectangle.js');

//exports.handler = (event, context, callback) => {
//	process.on('uncaughtException', function (err) {
  //  console.log( "UNCAUGHT EXCEPTION " );
   
	//});
	console.log("Start...");
	let calc = new Calculation();
	let rectangle = new Rectangle(10,5);
	let area = 0;
	calc.areaWithCallback(rectangle,function(err,data){
		if(err){
			console.log("error");
			area = 0;
		}else{
			area = data;
		}
	});
	console.log("Area of Rectangle is",area);
	let circum = calc.circumference(rectangle);
	console.log("Circumference  of Rectangle is",circum);

//};
