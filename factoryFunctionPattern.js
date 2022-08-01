//organising code - grouping
//creating instances of a general object thoughh factory function
//one way of making objects based off same pattern
//with each instance having diffrent values

//factory function pattern - buidling an object
//function expressions returns object
function makeColor(r, g, b) {
  const color = {};
  //adding properties to color object
  color.r = r;
  color.g = g;
  color.b = b;
  //adding method to color object
  color.rgb = function () {
    console.dir(this)
    //keys/variables = object with the keys
    const { r, g, b } = this; //object destructure //this-left of dot,execution scope
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    //no parameters needed can extract from object
    const { r, g, b } = this; //object destructure //this-left of dot,execution scope
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  //factory function return object
  return color;
}
//2 object instances //each object has unique methods created
const firstColor = makeColor(32, 123, 12);
const secondColor = makeColor(43, 233, 54);

console.dir(firstColor)
//object.method() - this refers to this object instance -left of dot - execution scope
//issue firstColor.hex() === secondColor.hex() is false
console.dir(firstColor.rgb());
console.dir(firstColor.hex());

//changing the property value of the object instance
firstColor.r = 232;

//issue with factory functions
//factory function that returns objects has unique copies of the methods
//create new unique methods each time instance object its created
//methods are defined in each object instance
//cheacking if same reference for the methods created 
//issue objectInstance1.hex() === objectInstance2.hex() is false
//"hi".slice=== "bye".slice is true , this is true because protoype object template methods
//hese unique methods are unnecessary therfore we use constructor function pattern - object creation