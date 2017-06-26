class Calculation{
 
  constructor() {

  }

  area(rectangle) {
    return rectangle.width * rectangle.height;
  }

  circumference(rectangle) {
    return 2*(rectangle.width +  rectangle.height);
  }

}
module.exports = Calculation;