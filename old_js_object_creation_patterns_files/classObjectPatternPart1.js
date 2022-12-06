//classObject pattern - object bulding (syntax upgrade from constructor functions pattern)
//methods are on prototypeObject not instance object

//keyword - class
//class name first letter Capilaized
//classObject.prototype = prototypeObject of classObject
//with the new keyword -
//classObjects constructor method implicity creates and returns an instance object
//ColorObject class with costructor method is set in classObject.prototype as method called constructor
//instance object gets the classObject.prototype object through reference in its __proto__ property
//therfore includes the method called constructor which contains the ColorObject class ie auto call constructor method

//new classObject() makes us new object instance by calling its constrcutor method - using a classObject pattern
//eg, new Array(),new String() if they were classObject and not functionObjects

//ColorObject
class Color {
  //constructor method to execute when new instance created of ColorObject class
  //short form of - //method/key : function(){}
  constructor(r, g, b, name) {
    //adding properties to object instance
    this.r = r; //this keyword(execution scope-left of dot) - instance object - mandatory new keyword
    this.g = g;
    this.b = b;
    this.colorName = name;
    console.log(this.r, this.g, this.b, this.colorName);
  }
  //console.dir(this) //- dont have access to instaneObject outside method or constructor

  //creating methods in Color.prototype ie prototypeObject
  //but unlike constructor function pattern with grouping issue, we can define method inside classObject
  //short form of - //method/key : function(){}
  greet() {
    //methods dont need parameters/arguments - accessible though this keyword - instance object
    return `Hello from , ${this.name}`; //instanceObject.greet()
  }

  //short form of - //method/key : function(){}
  parentRGB() {
    //methods dont need parameters/arguments - accessible though this keyword - instance object
    //creating variables from properties/keys - object destructuring
    const { r, g, b } = this; //this keyword - object instance - execution scope/left of dot
    return `${r},${g},${b}`; // now its easier to use in other methods
  } //return string

  //short form of - //method/key : function(){}
  rgb() {
    //executing own method in another method - accessible though this keyword - instance object
    //this - refers to instance object - execution scope/left of dot
    return `rgb(${this.parentRGB()})`; //return string
  }

  //short form of - //method/key : function(){}
  //default parameter argument value 1.0 if no argument passed in for a
  rgba(a = 1.0) {
    //executing own method in another method
    //this - refers to instance object - execution scope/left of dot
    return `rgba(${this.parentRGB()},${a})`; //return string
  }
}

// Color(1,2,3) - cannot execute class without new keyword
//classObject takes in arguments like a functionObject - class is like a function - it just sends arguemnts to constructor method
const c1 = new Color(2, 3, 5, "setName1"); //whether i execute class()/function() or  not ie(class/function),it retruns an instance object
const c2 = new Color(216, 44, 17, "setName2"); //second instance object with same prototypeObject
console.dir(Color); //classObject
console.dir(c1);
console.dir(c1.rgb()); //instance object calling the prototypeObject method due to reference in its __proto__ property
console.dir(c1.rgb === c2.rgb); //true same referece oject
console.dir(c1.age === c2.age);
console.dir(c2.rgba(0.1));

document.body.style.backgroundColor = c2.rgba(0.3);
