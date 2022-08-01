//extend - super keyword -  classObject inheritance
//subclassing - sharing functionality between parent and child classObjects
//A class can extend only a single other class
//A class can extend multiple interfaces

//parent classObject
//classObject.prototype = prototypeObject of classObject
class Animal {
    //auto executes constructor method - new keyword
    //constrcutor method creates instance object
    constructor(name, age) {
      //adding properties to instance object
      this.name = name; //this keyword referes to instance object
      this.age = age;
    }
    //adding a method on classObjects prototypeObject ie.classObject.prototype
    eat() {
      return `${this.name} is eating`;
    }
  }
  
  //child classObject
  //classObject.prototype = prototypeObject of classObject
  //extends - keyword sets __proto__ property of instance object to parent classObject
  //instance object can now call methods in the parents classObjects prototypeObject
  class Cat extends Animal {
    //adding its own constructor method - auto executes constructor method - new keyword
    //creates instance object
    //useufull when addition arguments need to be passed in
    constructor(name, age, livesLeft = 9) {
      super(name, age); //super() function execute the constructor method in parent classObjects prototypeObject
      this.livesLeft = livesLeft; //adding property to instance object
    }
    //adding a new method on classObjects prototypeObject ie.classObject.prototype
    meow() {
      return `meow`;
    }
  }
  
  //child clasObject
  //classObject.prototype = prototypeObject of classObject
  //extends - keyword sets __proto__ property of instance object to parent classObject
  //instance object can now call methods in the parents classObjects prototypeObject
  class Dog extends Animal {
    //no constrcutor method provided
    //auto calls parent classObjects constructor method
  
    //adding a new method on classObjects prototypeObject ie.classObject.prototype
    bark() {
      return `woof`;
    }
  
    //adding a new method on classObjects prototypeObject ie.classObject.prototype
    //its parent classObjects prototypeObject also has eat method - but
    //this classObjects prototypeObject method with same name gets priority
    eat() {
      return `${this.name} wont eat`;
    }
  }
  
  const a1 = new Animal("animall", 43);
  const c1 = new Cat("catt", 23);
  const d1 = new Dog("dogg", 24);
  // console.dir(Animal.prototype);
  // console.dir(Cat.prototype);
  // console.dir(Dog.prototype);
  console.dir(a1);
  console.dir(c1);
  console.dir(d1);
  console.dir(c1.eat());
  console.dir(d1.eat()); //overridden prototypeObject method
  