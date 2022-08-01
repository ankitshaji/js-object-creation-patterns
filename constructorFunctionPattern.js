//constructor function pattern = building an object
//single copy of methods set on the protoype object
//dont use arrow functions since this keyword will be creation scope and not execution scope

//new keyword
//new keyword makes constructor function implicity create instance object
//new keyword creates a constructor method inside the functionObject.prototype ie prototypeObject
//all objects have a prototype property that stores its prototypeObject through reference  - (functionObject.prototype)
//all function Objects have a property called prototype which references its prototypeObject - (functionObject.prototype)
//when constructor function is called with new keyword - it passes this prototypeObject(functionObject.prototype)
//into the instance objects prototype/__proto__ property , this property that references the functionObject.prototype 
//includes the  method called constructor which contains the Color function expression
//this keyword execution scope shifts from functionObject (ie left of dot is windowObect.Color()) to the new instance object
//new keyword makes constructor function implicity return instance object

//new obejct() makes us new object instance - using a constructor function pattern
//eg, new Array(),new String()

//constructor function expression - implicite instance object creation/return - done though new keyword else just normal function expression
//constructor functions have Capital letter name
function Color(r, g, b) {
  //console.log(this); //without new keyword - global scope/execution context - left of dot is windowObject
  this.r = r;
  this.g = g;
  this.b = b;
  console.dir(this);
  //gives the instance object a prototype/__proto__ property that reference the parent prototypeObject
  //the prototypeObject has this constructor function as a method
}

//we can add methods to the parent protypeObejct and not the child instance obejct
//adding methods to prototype object- we define it outside-  grouping issue exisits still 
//now all instance objects created from new constructor function Color() ,can use these prototypeObject methods
//functionObject.property =prototypeObject.rgb
Color.prototype.rgb = function () {
  //no parameters needed for function - can extract from object instance - this keyword execution scope left of dot
  //keys/variables = object with the keys/properties
  const { r, g, b } = this; //object destructuring //execution context - left of dot - instance object, without new keyword it is windowObject
  return `rgb(${r},${g},${b})`;
};
Color.prototype.hex = function () {
  //no parameters needed for function - can extract from object instance - this keyword execution scope left of dot
  //keys/variables = object with the keys/properties
  const { r, g, b } = this; //object destructuring //execution context - left of dot - instance object
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.rgba = function (a = 1.0) {
  //takes default value for 1 parameter
  const { r, g, b } = this; //object destructure //execution context - left of dot - instance object
  return `rgba(${r},${g},${b},${a})`;
};

// console.dir(Color.prototype); //parent prototypeObject
//conosle.dir(color1.__proto__) //child instance Object property that references to parent prototypeObject
// console.dir(Color()); //constructor function expresssion //if executed - without new keyword,this keyword is windowObject

//this keyword is on instance object
//creates a prototype/__proto__ propety for instance object and passes in the protoypeObject ie Color.prototype
const color1 = new Color(12, 100, 43);
console.dir(color1);
console.dir(color1.__proto__) // color1.prototype does not work on instance object  use property __proto__ instead
console.dir(color1.rgb(23, 132, 43)); //we can call parent prototypeObject(Color.prototype) methods on instance object
//because it has prototype/__proto__ property that referece to protypeObject(Color.prototype) which has the rgb() method on it

//another Color.prototype object method call example -
document.body.style.backgroundColor = color1.rgba(0.3);

//issue with constructor function pattern is
//- long files and lack of grouping- which is fixed by class pattern - object creation
