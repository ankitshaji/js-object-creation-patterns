//classObject pattern - object bulding (syntax upgrade from constructor functions pattern)
//methods are on prototypeObject not instance object

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
    //immediatly calling a prototypeObject method inside own class
    //constructor method auto call when instance object created with new keyword
    //this keyword is therefore the instance object
    this.calcHSL(); //method adds more properties to instance object
    console.log(this.r, this.g, this.b, this.colorName);
  }
  //console.dir(this) //- dont have access to instaneObject outside method or constructor

  //creating methods in Color.prototype ie prototypeObject
  greet() {
    return `Hello from , ${this.name}`; //instanceObject.greet()
  }

  parentRGB() {
    //creating variables from properties/keys - object destructuring
    const { r, g, b } = this;
    return `${r},${g},${b}`; // now its easier to use in other methods
  }

  rgb() {
    //executing own method in another method - this - instance object
    return `rgb(${this.parentRGB()})`;
  }

  //default parameter argument value 1.0 if no argument passed in for a
  rgba(a = 1.0) {
    //executing own method in another method -  this - instance object
    return `rgba(${this.parentRGB()},${a})`; //return string
  }

  //short form of - //method/key : function(){}
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h},${s}%,${l}%)`;
  }

  //short form of - //method/key : function(){}
  fullySaturated() {
    const { h, l } = this;
    const newS = 100;
    return `hsl(${h},${newS}%,${l}%)`;
  }

  //short form of - //method/key : function(){}
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360; //modulo loops if max value crossed
    return `hsl(${newHue},${s}%,${l}%)`;
  }

  //method on prototypeObejct
  //hue-360degree saturation-% lightness-%
  //each hue degree is diffrent color -poloar opposite +180
  //we make method auto execute during object instantiation in constructor method
  calcHSL() {
    //using let since it updates r,g,b variables
    let { r, g, b } = this; //instance object
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      //global variables - bad if we had `use strict`
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    //adding properties to object instance
    //when method is executed
    this.h = h;
    this.s = s;
    this.l = l;
    return [h, s, l]; //arrayObject
  }
}

//Color(1,2,3) - cannot execute class without new keyword
//classObject takes in arguments like a functionObject - class is like a function - it just sends arguemnts to constructor method
//whether i execute class()/function() or  not ie(class/function),it retruns an instance object
const c1 = new Color(100, 32, 50, "setName1");
console.dir(c1);
console.dir(c1.hsl());
document.body.style.backgroundColor = c1.fullySaturated();
