class Calculation{
 

  areaWithCallback(rectangle,callBack) {
    if(!!rectangle){
      callBack(null,rectangle.width * rectangle.height);
    }else{
      callBack(new Error("Object is undefined"));
    }
  
  }
  area(rectangle){
    return rectangle.width * rectangle.height;
  }

  circumference(rectangle) {
    try{
          if(!!rectangle){
              return  2*(rectangle.width +  rectangle.height);
          }else{
            return 0;
          }
    }catch(err){
      console.log(err);
      return 0;
    }
   
  }
}
module.exports = Calculation;