//imporant note - Refer to js documentation on mdn - all 4 pages from Object basics to Classes in JavaScript

//***************
//jsObject basics
//***************
//A jsObject (literal jsObject or instance jsObject) contains key value pairs,
//it is the same as a hashmap/associative array/dictionary/hashtable
//The unique object members/keys are called object properties and object methods
//we shoudl use the long or short object method syntax to add a object method on the jsObject(literal jsObject/instance jsObject)
//this is so that when we use the this keyword inside it uses execution context, meaning the this keyword points to the jsObject(literal jsObject/instance jsObject)
//,and we shoudl never use long object method syntax using an arrow syntax to add a object method beacuse it usese creation scope,meaning the this keyword inside will be
//windowObject/globalObject.
//we can create(initialize)/update the unique object memebers/keys(object properties/object methods) on a jsObject(instance jsObject or literal jsObject) after its creation as well
//Note - important
//All jsObjects(instance jsObject or literal jsObject) contains a object property called __proto__, that is a reference to its prototypeObject.
//example -
const literalJsObject = {
  name: "ankit",
  age: 25,
  //short object method syntax
  greet() {
    console.log(`Hi i am ${this.name}, i am ${this.age}`);
  },
  //long object method syntax using non-arrow syntax
  greet2: function () {
    console.log("prefered not to be used");
  },
  //long object method syntax using arrow syntax
  greet3: () => {
    console.log("never use");
  },
};

//***************************************************
//prototypal OOP/prototype oriented programming(POP)
//***************************************************
//Diffrent jsObject creation patterns/blueprints/templates - it is similar to a class template/blueprint in classical/classbased OOP
//***********************************************************************************************************************************
//we have 2 instance jsObject creation patterns and 1 literal jsObject creation pattern.
//we prefer to use a creation pattern beacause it helps us create multiple jsObject(literal jsObject or instance jsObject) without us havine to manually create multple literal jsObjects with similar code rewritten each time.
//We have 2 creation patterns to to creates an instance jsObject and 1 creation pattern to create a literal jsObject, each of these 3 creation patterns define the
//shape of the jsObject(instance jsObject/literal jsObject),it is a blueprint/template that sets unique object memebers/keys(ie object properties/object methods)
//the created jsObject(instance jsObject/literal jsObject) will have,as well as sets up the unique object memebers/keys(ie object properties/objecet methods) its prototypeObject will have.
//Both of the 2 instance jsObject creation patterns sets up a prototypeObject ie template object which gets set as the __proto__ object property on its created instance jsObject
//The 3 creation patterns are - 1.create a literal jsObject using a factory functionExpressionDefenition and add unqiue copies
//of features ie(object memebers/keys(object methods/object properties)) to the created literal jsObject ,2.create an instance jsObject using a constructor functionExpressionDefentiion
//with the new keyword and add unique copies of features ie(object memebers/object properites) to the created jsObject(instance jsObject/literal jsObject)
//,as well as add unique copies of features ie(object memeber/keys(object methods/object properties)) to the constructor functionObjects protoype property ie protoytypeObject
//which will already contains the constructorFunctionDefenitionExpression itself
//as a long syntax object method and auto/implcitly set the prototypeObject as reference in the __proto__ object property of the created instance jsObject,all this so that
//we have have reusable/common copies of prototypeObject object members/keys(prototypeObject object method/prototypeObject object properties) on all created instance jsObject through this 1 common protoyObject
//reference through its __proto__ object property,
//3.create an instance jsObject using the class syntax sugar version of creation pattern 2

//*****************************************************************************************************
//Understanding prototypal inheritance/deligation in prototypal OOP/prototype oriented programming(POP)
//*****************************************************************************************************
//All jsObjects(instance jsObject or literal jsObject) contains a property called __proto__, that is a refernece to its prototypeObject
//The protoypeObject is a object property on the constructor functionObject/constructor Class method ie ConstructorFunctionObject.prototype/ConstructorClassMethod.prototype
//All functionObjects including the ConstructorFunctionObject/ConstructorClassMethod will allways have a object property called prototype that stores a prototypeObject, and by default
//it contains a long syntax object method that stores the functionExpressionDefenition/ConstructorClassMethod itself.
//When we create the instance jsObjects using the constructor functionObject/Class with the new keyword,
//the created instance jsObjects __proto__ object property's value is a reference to that constructor functionObjects's/ConstructorClassMethod's prototype object properties value ie prototypeObject
//This allows all the created instance jsObject to inherit prototypeObject object members/keys(prototypeObject object properties/prototypeObject object methods) from this prototypeObject
//It is really just deligating the instance jsObject to be another jsObject(ie prototypeObject) when it cannot find the object memeber/keys(object properties/object methods) it needs on itself
//Thus prototypes are a mechanism by which jsObjects(instance jsObject/literal jsObject) inherit features(prototypeObject object members/keys(prototypeObject object properties/prototypeObject object methods)) from another jsObject(prototypeObject)
//This allows us to write reusabled/common features(prototypeObject object members/keys(prototypeObject object properties/prototypeObject object methods)) required for all created instance jsObject/literal jsObject inside its 1 common prototypeObject
//instead of having its own copy of the features(object members/keys(object properties/object methods) on the instance jsObject itself.
//If it did have its own copy of the features(object memebers/keys(object properties/objecet methods)) with the same names,
//it is seen as overriding the reusable/common features(prototypeObject object members/keys(prototypeObject object properties/prototypeObject object methods)) we got from the prototypeObject in __proto__ object properite of the instance jsObject
//beacuse when we call a method on the instance jsObject we first try to find it on its unique copy of features(object memebers/keys(object properties/objecet methods))first
//before moving to the common/reusualbe features(prototypeObject object members/keys(prototypeObject object properties/prototypeObject object methods))
//of its __proto__ object properties referenced prototyeObject.
//The prototypeObject is called a temaplte object, it is the creation pattern/blueprint/tempatle, it is also the class template/blueprint syntax sugar
//Since the protypeObject is itself a jsObject(literal jsObject), it also contains a object property called __proto__ ,
//that is a reference to its prototypeObject which would be like its extended parent class blueprint/template syntax sugar ie(another creation pattern/blueprint/temaplte), This is known as the prototype chain.
//The prototypeObject on instanceJsObject's __proto__ obejct property is the child class blueprint/temaplte syntax sugar and that prototypeObjects __proto__ object properties prototypeObject
//is the parent class blueprint/templat syntax sugar that child class blueprint/temaplte syntax sugard inherited from using the extends keyword.

//ts code/syntax
//instanceJsObject/instanceArrayObject = new ConstructorFunctionObject()
const arr = new Array();
//Above is the same as const arr = [] , but it is called an literal array like a literal jsObjct.
//Note - All primitive types have their repsective wrapper class/constrcutorFunctionObject
//Sidenote -  "myString" <- this is a instanceStringObject which can also be created with new String()->ConstructorFunctionObject
//instanceJsObject.property = prototypeObject
console.log(arr.__proto__);
//ConstructorFunctionObject.property = prototypeObject
console.log(Array.prototype);
//when we call instanceJsObject.prototypeObjectObjectMemeber/objectMemeber/key(prototypeObject object method/object method,prototypeObject object property/object property),
//we first search for the object member/key(object method/object property)
//on the instance jsObject, In this case the push method does not exist on the instance jsObject
//it exists on the prototypeObject reference inside the instance jsObjects __proto__ object property.
//ie Array.prototype = protoypeObject, has a push method on it ie Array.prototype.push
//Therefore because we did not find it in the instance jsObject, the instance jsObject inherits from/deligates itself to
//the prototypeObject referenced in the __proto__ object property, we then search for the object method in this prototypeObject and we do find it, then we call it.
//If we did not find the object method on this prototypeObject, we will go to its referenced prototypeObject in its __proto__ object propertie and search for the obejct method in that
//prototypeObject.
arr.push;

//******************************************************************************************
//First jsObject creation pattern/blueprint/template -  it is similar to a class template/blueprint
//******************************************************************************************
//literal jsObject creation pattern - explicitly create a literal jsObject using a factory namedfunctionExpressionDefenition
//and add unique copies of object memebers/keys(obejct properties/object methods) to the created literal jsObject
//****************************************************************************************************************
//This creation pattern helps prevent us from creating individual functionExpressionDefeintions
//and passing in arguments each time, Instead we pass in the arguments once in
//the factory functionObject and it can be reused/auto passed into all created/initialized literal jsObjects long syntax object methods but we can also do
//this using the this keyword, since the this keyword uses execution scope and therfore it refer to the explicitly created/returned literal jsObject
//This also means that if we update/reinitialize the returned literal jsOjects existing obejct propertie value, the this keyword in a created/returned literal jsObjects existing method
//will have an updated/reinitialzied object propertie value therefore it can potentially altering the output of obejct methods of that returned literal jsObjects if it uses the this keyword
//to retrive its own obejct properties.

//namedfunctionExpressionDefenition - 3 paramters
function makeColorFunctionObject(r, g, b) {
  //explicitly creating a literal jsObject and referencing it in a variable
  const literalColorObject = {};
  //creating/initializing unique copies of object members/keys(object properties/object methods) on the literal jsObject after creating it
  literalColorObject.r = r;
  literalColorObject.g = g;
  literalColorObject.b = b;
  //long obejct method syntax using non-arrow syntax
  literalColorObject.rgb = function () {
    //this keyword uses execution scope therofore it refer to the created/returned jsObject(literal jsObject)
    //object properties to variables - object destructuring
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  //long object method syntax using non-arrow syntax
  literalColorObject.hex = function () {
    //this keyword uses execution scope therofore it refer to the created/returned jsObject(literal jsObject)
    //object properties to variables - object destructuring
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  //explicitly return the created literal jsObject referenced though a variable
  return literalColorObject;
}
//literalJsObject = functionObject(3 arguments of type number) execution
const returnedLiteralColorObject1 = makeColorFunctionObject(100, 150, 120);
const returnedLiteralColorObject2 = makeColorFunctionObject(100, 150, 120);
//literalJsObject.objectMethod()
console.log(returnedLiteralColorObject1.rgb());
//literalJsObject.objectProperty - update existing properties value
returnedLiteralColorObject1.r = 120;
//literalJsObject.objectMethod() - the object property value update changes the object method output value
console.log(returnedLiteralColorObject1.rgb());
//Current Issue -
//we have unique copies of obejct members/keys(object method/object properties) on each explcitly returned literal jsObject
//literalJsObject.objectMethod === literalJsObject.objectMethod
//returnedLiteralColorObject1.rgb === returnedLiteralColorObject2.rgb //false

//********************************************************************************************
//Second jsObject creation pattern/blueprint/template - similar to a class template/blueprint
//********************************************************************************************
//instance jsObject creation patterns - create an instance jsObject using a constructor
//functionExpressionDefentiion with the new keyword and add unique copies of features ie(object memebers/object properites) to the created jsObject(instance jsObject/literal jsObject)
//,as well as add unique copies of features ie(object memeber/keys(object methods/object properties)) to the constructor functionObjects protoype property ie protoytypeObject
//which will already contains the constructorFunctionDefenitionExpression itself
//as a short syntax obejct method and it will be auto/implcitly set as reference in the __proto__ obejct property of the created instance jsObject,all this is done
//so we can have reusable/common copies of prototypeObject obejct members/keys(prototypeObject object method/prototypeObject object properties) on all created instance jsObject through this 1 common prototypeObject
//that is reference through its __proto__  object property.
//Note - namedConstructorFunctionExpressionDefenition's first letter is capital.
//***************************************************************************************
//Having the new keyword next to ConstructorFunctionObject during execeution does a few things -
//1.it makes ConstructorFunctionExpressionDefenition implcitly creating/initializing a literal jsObject ie(the instance jsObject) and referencing it in a variable
//Reminder - All functionObjects have a obejct property called prototype that stores a prototypeObject, this is true for the ConstructorFunctionObject as well.
//All functionExpressionDefenitions/ConstructorFunctionExpressionDefenitions implicitly add
//the functionExpressionDefenitions/ConstructorFunctionExpressionDefenition itself as a long syntax object method on the prototypeObject ie.functionObject.prototype/ConstructorFunctionObject.prototype
//2.It makes ConstructorFunctionExpressionDefenition implcitly return the created/intitializes literal jsObject(ie the instance jsObject) referenced though a variable
//3.After we added our reusable/common features(prototypeObject object memebers/keys(prototypeObject object properties/prototypeObject object methods)) on all implcitly created/initiazlied/returned literal jsObjects (ie the instance jsObjects)
//by adding them as unique long syntax object methods/object properties on the prototypeObject. ie ConstructoFunctionObject.prototype.ObjectMemeber/key(object propertie/object method),
//thus preventing all implcitly returned literal jsObject(ie the instance jsObject) from hainveg their own unique copy of these features(obejct members/keys(object properties/object methods).
//Reminder - All jsObjects(instance jsObject or literal jsObject) contains a obejct property called __proto__
//It implcitly set the value of the __proto__ object property on literal jsObject(the instance jsObject) to a reference to the prototypeObject in the prototype obejct proeprty in the ConstrcutorFunctionObject ie (ConstructorFunctionObject.prototype)
//4.Reminder - The this keyword in a normal functionExpressionDefenition/ConstructorFunctionExpressionDefention is execution scoped.
//it makes the this keyword in the ConstructorFunctionExpressionDefention to be the implcitly created/returned
//literal jsObject(ie instance jsObject) instead of this keyword being the windowObject if it was normal functionExpressionDefenition.
//Reminder - The this keyword inside short object method sytnax is execution scoped.
//so when we add unique long syntax object methods on the prototypeObject, due to how those prototypeObject obejct methods are called
//ie instancejsObject.prototypeObjectObjectMethod, the this keyword points to the implcitly created/returned
//literal jsObject(ie instance jsObject)

//namedConstructorFunctionExpressionDefenition - 3 parameters
function ColorConstructorFunctionObject(r, g, b) {
  //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
  //creating/initializing unique copies of object members/keys(obejct properties/object methods) on the implicitly created literal jsObject ie(the instance jsObject)
  //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
  this.r = r;
  this.g = g;
  this.b = b;
  //long obeject method syntax using non-arrow syntax
  this.innerRgb = function () {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
}

//creating/initialzing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
//by adding it as a unique long sytnx obejct methods onto the prototypeObject instead.
//prototypeObject.objectMethod = long obejct method syntax using non-arrow syntax
ColorConstructorFunctionObject.prototype.rgb = function () {
  //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
  //object properties to variables - object destructuring
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

//creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
//by adding it as a unique long sytnx obejct methods onto the prototypeObject instead.
//prototypeObject.objectMethod = long obejct method syntax using non-arrow syntax
ColorConstructorFunctionObject.prototype.hex = function () {
  //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
  //obejct properties to variables - object destructuring
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

//instanceJsObject/instanceColorObject = new ConstructorFunctionObject(3 arguments of type number) execution
const returnedInstanceColorObject1 = new ColorConstructorFunctionObject(
  40,
  50,
  0
);
const returnedInstanceColorObject2 = new ColorConstructorFunctionObject(
  0,
  0,
  0
);
//Previous Issue -
//we had unique copies of obejct members/keys(object methods/objects properties) on all explcitily returned literal jsObject
//and we can still have unique copies of obejct memeber/keys(object methods/object properties) on all returned literal jsObject(ie instance jsObject)
//example -
//instanceJsObject.objectMethod === instnceJsObject.obejctMethod
console.log(
  returnedInstanceColorObject1.innerRgb ===
    returnedInstanceColorObject2.innerRgb
); //false

//Previous Issue resolved -
//we now also have reusable/common prototypeObject object members/keys(prototypeObject object method/prototypeObject object properties) on all implcitly returned literal jsObject(ie instance jsObject)
//though the 1 common prototypeObject referenceed in its __proto__ object property.
//example -
//instanceJsObject.prototypeObjectObjectMethod(ie instanceJsObject.__proto__.objectMethod) === instnceJsObject.prototypeObjectObjectMethod(ie instanceJsObject.__proto__.objectMethod)
//is the same as
//ConstructorFunctionObject.prototype.objectMethod === ConstructorFunctionObject.prototype.objectMethod
console.log(
  returnedInstanceColorObject1.rgb === returnedInstanceColorObject2.rgb
); //true

//Current Issue -
//The js code/sytax is too cluttered, does not have a single grouping

//***************************************************************************************************
//Third jsObject creation pattern/blueprint/template - Is exactly like a class template/blueprint
//***************************************************************************************************
//create an instance jsObject using the class template/blueprint syntax sugar version of creation pattern/blueprint/template 2
//(ie Makeing prototyal OOP/prototype oriented programming(POP) look like classical OOP/classbased OOP)
//*************************************************************************************************
//NOTE - we have 4 principle in classical OOP,they are ENCAPSULATION, ABSTRACTION, INHERITANCE, and POLYMORPHISM
//************ */
//INHERITANCE
//************ */
//if we have duplicating class memebers in multiple child/sub class blueprint/template we can move them into a parent class blueprint/template
//am let the multiple child/sub class blueprint/temapltes inherit the class memebers from the parent/super class blueprint/temaplte with the extends keyword and possibly the super keyword
//We are passing down the class memebers(class methods and class propertes(ie class variales)) in a parent/super Class template/blueprint to
//a child/sub Class template/blueprint by using the extends keyword on the child/sub Class template/blueprint
//as well as calling the parent/super Classes template/blueprints constructorClassMethod implcitly or explcitly with super keyword inside
//child/sub Class template/blueprints constructorClassMethod, so that all the instanceObject instantiated from the child/sub Class
//template/blueprint contains unique copies of object properties(class properties(ie class vairalbes))/object methods as well as the
//reusable/common copies of class methods from both the parent/super Class template/blueprint as well as the child/sub Class temaplte/blueprint.
//**************
//In javascript
//**************
//all created instanceJsObjects contains the unique copy of features(object memebers/child class memeber(not child class methods)/key(object properties(child class properties(ie child class variables/fields)))/object methods)
//as well as the reusable/common copy of features(prototypeObject object memebers/child class memeber(not child class properties)/keys(prototyeObject propertie/prototypeObject method(ie child class method)) through the 1
//common prototypeObject reference in its __proto__ object property , where this prototypeObject is the child/sub class blueprint/temaplte
//as well as the unique copy of features(object memebers/parent class memebers(not parent class methods)/key(object properties( parent class properties(ie parent class variables/fields)))/object methods)
//as well as the reusable/common copy of features(prototypeObject object memebers/parent class memebers(not parent class propertie)/keys(prototyeObject propertie/prototypeObject method(ie parent class method)) through the 1
//common prototypeObject referenced in the __proto__ object property of the prototypeObject in the __proto__ property of the instanceJsObject , where this prototypeObject is the parent/super class blueprint/temaplte
//**************
//POLYMORPHISM
//**************
//creating/initializing a same named but diffrent version/implementation (ie overriding) of an inherited class member(class properties(ie class variables/fields)/class method) from a parent/super class blueprint/template inside the inheriting
//child/sub class temaplte.This causes the instantiated instanceObjects used version of either unique copie of object properties(class properties(ie class varialbes/fields)/object method)
//or reusable/common copie of the class method from both the parent/super Class tempalte/blue print as well as the child/sub Class temaplte/blueprint
//to be based on which Class blueprint/templte was used to instantiate the instanceObject.
//***************
//In javascript
//**************
//case 1 -
//If the returned instanceJsObject has its own unique copy of the features(object memebers/child/parent class
//memebers(not child/parent class methods)/keys(object properties/child/parent class properties(ie child/parent class varialbes/fields)/objecet methods))
// with the same names but diffrent version/implimentation (ie overriding) as its reusuable/common features(prototyoeObject object memebers/child class memebers(not child class properites)/key)(object properties/object methods(ie child class methods) gotten through the 1
//common prototypeObject reference in its __proto__ object propertie or its reusuable/common features(prototyoeObject object memebers/child class memebers(not child class properites)/key)(object properties/object methods(ie child class methods) gotten through the 1
//common prototypeObject reference in its __proto__ object propertie of the prototypeObject.
//Then the instanceJsObject will use its own copy of same named feature.
//case 2 -
//If the returned instanceJsObject has its own unique copy of the features(object memebers/child/parent class memebers
//(not child/parent class methods)/keys(object properties/parent/child class properties(ie parent/child class varialbes/fields)/objecet methods))
//and has reusuable/common features(prototyoeObject object memebers/child class memebers(not child class properites)/key)(object properties/object methods(ie child class methods) gotten through the 1
//common prototypeObject reference in its __proto__ object propertie but it has same names but diffrent version/implemention(ie overriding)
//of its own unique copy of the features(object memebers/child/parent class
//memebers(not child/parent class methods)/keys(object properties/child/parent class properties(ie child/parent class varialbes/fields)/objecet methods))
//as its reusuable/common features (prototyoeObject object memebers/child(parent) class memebers(not child(parent) class properites)/key)(object properties/object methods(ie child(parent) class methods) gotten through the 1
//common prototypeObject reference in __proto__ object propertie of the prototypeObject.
//Then the instanceJsObject will use those reusuable/common copy of same named feature.
//***************
//ENCAPSULATION
//***************
//Is having private/protected access modifiers on the class temaple/blueprint itself or on the class memebers(class methods and class properties(ie class variables/fields)) to restrcit access
//to them from outside the current Class template/blueprint so that they can only be accsed from outside the current Class template/blueprint with the help
//of 2 dedicated short class method syntax named getter and setterm created inside the current Class tempalte/blueprint with public access modifeirs on them.
//It is about setting up secutity/a firewall incase users/programmers try to access the certain class members/class temaple/blueprint from outside the class temaple/blueprint which we dont want them to access.
//************
//ABSTRACTION
//************
//Abstraction is a design level concept which tells us how we should modualarize our program and hide unessary information from the user/programmer that
//use our program, so that when an outside user/programmer needs to repeatedly retrive speific infromation from our program,they are not be required to know everything about
//how our program works to do it. Which then in turn allows us to change the inner implmentation of the program without effect the outside user/programmer usage of our program.
//We can use encapsulation to implement this in our program.
//************
//COMPOSITION
//************
//Instead of using inheritance to couple parent and child class blueprint/temapltes together, which could lead to issue when we need change the structure of the class blueprint/tempalte hierachy,
//we create an instanceObject of one of the class blueprint/tamplates inside another class blueprint/temaplte and use it in that class blueprint/template.
//***************
//In javascript
//***************
//it is to not use Classical OOP and instead just use functionalProgramming,by using a factoryFunction instead.
//************
//Usage Notes - contains all others
//************
//1.A Class cannot be executed without the new keyword next it
//2.Executing a Class with new keyword means to execute its short class method syntax named constructor,
//this is an alternative way of writing the namedConstructorFunctionObject we saw in creation pattern 2,
//3.The new keyword does all the same things from creation pattern 2, but this time it is the constructorClassMethod that has an object propertie called
//protoype that stores a prototypeObject,and by default it will already contain the constructor class method itself as a long syntax object method.
//4.We have no way of setting object properties on the prototypeObject when inside a Class body
//5.The first letter of a Class is capital just like a ConstructorfunctionExpressionDefention
//6. if we have duplicating class memebers in multiple child/sub class blueprint/template we can move them into a parent class blueprint/template
//am let the multiple child/sub class blueprint/temapltes inherit the class memebers from the parent/super class blueprint/temaplte with the extends keyword and possibly the super keyword
//7.The child class blueprint/template inherits the parent class blueprint/temapltes
//class memebers(class properties(ie class variables/fields)/class methods) by using the js syntax/code keyword extends along with the name
//of the parent class blueprint/temaplte next to the child class blueprint/tempalte delcaration.
//8.The super keyword in js syntax/code is stores a refernce to the short class method syntax named constructor
//of the parent class blueprint/temaplte
//9.If we create a class blueprint/temaplte that dosnt extend a parent class blueprint/temaplte, and dont provide an explicit short class method syntax named constructor
//it implcitly creates a short class method syntax named constructor with no parameters.This means we dont want to initiazlie any class properties(ie class variables/fields).
//10.If we create a child/sub class blueprint/tempalte that extends a parent class blueprint/template, and dont provide an explicit short class method syntax named constructor
//and explicitly execute the short class method syntaxed named construtore of the parent class blueprint/temaplte
//it implcitly executes the short class method syntax named constructor of parent class blueprint/temaplte because of extends keyword and then
//implcity create short class method syntax named constructor with 0 paremeters.We do this when we dont want to inittiazlie any extra class properties(ie class variables/fields)
//ontop of the class propperties(ie class variables/fields) initazlies by the implicit execution of the short class method syntax named construor of the parent class blueprint/temaplte.
//11.If we create a child/sub class blueprint/tempalte that extends from a parent class blueprint/template, and provide an explicit short class method syntax named constructor
//as well as explcitly execute the short class method syntax named constructor of parent class blueprint/temaplte, it allows us to initialzie extra
//class properties(ie class variables/fields) ontop of the class properties(ie class variables/fields) initiazlied by the explcit execution of the short class method syntax named constructor of the parent class blueprint/template
//12.if the short class method syntax in a child/sub class temaplte/blueprint is the same name with diffrent implementation of the inherited class method from the parent/super class blueprint/template
//then we are overriding that inherited class method
//13.A child/parent class blueprint/template can extend only a single other parent class blueprint/temaplte
//14.we usually name the short syntax class method named constructor
//the same name as the declared Class in most other real classical OOP programming langaues
//15.The Class name needs to be noun.
//16.In js syntax/code,we have 2 ways to create unique copies of object memebers/class memeber(not class methods)/keys(object properties/
//class properties(ie class variables/fields)/object properties)on the implicitly created literal jsObject ie(the instance jsObject),
//way 1.we can create it outside the short sytanx class method named constructor by using just the object propertie/class property(ie class variable/filed)/object method name.
//which implcity does way 2.way 2.we can creat it inside the short syntax class method named constructor by using the this keyword and object method/object propertie(ie class variable/field)/object method name,
//17.we can initiazlie a default value to a created unique copies of object memebers/class memeber(not class methods)/keys(object properties/
//class properties(ie class variables/fields)/object properties)on the implicitly created literal jsObject ie(the instance jsObject)
//when we dont want to use the arguments passed into the explict short class method syntax named constructor's paramters to initiazlie it.
//we usually use way 1 from above when doing this.

//***********
//Example 1
//***********
//declare ColorClass blueprint/temaplte using class keyword in js syntax/code
class Color {
  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will later be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  r;
  g;
  b;
  h;
  s;
  l;

  //normal js syntax/code version of
  //creating unique copie of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will not be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  //but instead will be initiazlied with a default value.
  isValid;

  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  usesLeft = 10;

  //instead of namedConstructorFunctionExpressionDefenition with 3 parameters,
  //we write an explcit short class method syntax named constructor with 3 parameters
  constructor(r, g, b) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //initializing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object methods)
    //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into the explicit short class method syntax named constructor's paramters
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.r = r;
    this.g = g;
    this.b = b;
    //normal js syntax/code version
    //initiazling with a default value the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
    //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters
    this.isValid = true;

    //long object method syntax using non-arrow syntax
    this.innerRgb = function () {
      //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
      //object properties to variables - object destructuring
      const { r, g, b } = this;
      return `rgb(${r},${g},${b})`;
    };
    //executing prototypeObjectMethod on instanceJsObject(ie executing short class method syntax)
    this.helperHsl();
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
  }

  //creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  decrementUsesLeft() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    this.usesLeft--;
  }

  //creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  helperRgb() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }

  //creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  rgba(a = 1.0) {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    //executing prototypeObjectMethod on returned liternal jsObject(ie instanceJsObject)(ie executing short class method syntax)
    return `rgb(${this.helperRgb()},${a})`;
  }

  //creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  helperHsl() {
    const h = 10,
      s = 20,
      l = 30;
    //initiazlizing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
    //on the implicitly created literal jsObject ie(the instance jsObject)
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.h = h;
    this.s = s;
    this.l = l;
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  hsl() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    const { h, s, l } = this;
    return `hsl(${h},${s}%,${l}%)`;
  }
}

//instanceJsObject/instanceColorObject = new Class(3 arguments of type number) execution
const instanceColorObject3 = new Color(255, 34, 12);
const instanceColorObject4 = new Color(222, 22, 0);
//We can still have unique copies of object memebers/class memeber(not class methods)/keys(object methods/object properties/class properties(ie class variables/fields)) on all returned literal jsObject(ie instance jsObject)
//example -
//instaceJsObject.objectMethod === instanceJsObeject.Objectmethod
instanceColorObject3.innerRgb === instanceColorObject4.innerRgb; //false
//instanceJsObject.objectPropertie/classPropertie ie class variable/fields
instanceColorObject3.r;

//we can have reusable/common prototypeObject object members/keys(prototyeObject propertie/prototypeObject method) on all implcitly returned literal jsObject(ie instance jsObject)
//though the 1 common prototypeObject referenceed in its __proto__ property.
//instanceJsObject.prototypeObjectObjectMethod(ie instanceJsObject.__proto__.objectMethod) === instnceJsObject.prototypeObjectObjectMethod(ie instanceJsObject.__proto__.objectMethod)
//is the same as
//constructorClassMethod.prototype.objectMethod === constructorClassMethod.prototype.objectMethod
instanceColorObject3.rgb === instanceColorObject4.rgb; //true

//Previous Issue -
//The js code/sytax is too cluttered, does not have a single grouping
//Issue resolved -
//The js code/sytax is grouped together inside a Class body

//**********
//Example 2
//**********
//Usage Notes -
//************
//Implimenting encapsulationcreating -
//1.Creating private class memebers(private class properties/private class methods) using the # keyword
//so that they are only accessible/executable inside class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject)
//2.we can write normal js code/syntax version of object accessor class methods (ie public short class method syntax named getPrivateClassMemeberName to allow the
//returned literal jsObject(ie instance jsObject) to access/execute a private/public class memeber and public short class method syntax
//named setPrivateClassMemeberName to allow the returned literal jsObject(ie instance jsObject) to update a private/public class memeber.)
//3.we can write alterantive js code/syntax version of object accessor class methods (ie public short class method syntax named PrivateClassMemeberName with a get keyword
//to create/initalize a (readonly) public class property that allows the returned literal jsObject(ie instance jsObject) to access/execute private/public class memeber
//and public short class method syntax named PrivateClassMemeberName with a set keyword
//case 1. if same named short class sytanx with get keyword already exists, it adds on the (write) ability to the already created/initiazlied (readonly) public class property
//that allowd the returned literal jsObject(ie instance jsObject) to access/execute private/public class memeber,thus now allowing the returned literal jsObject
//(ie instance jsObject) to initialize/update a private/public class memeber
//case 2.if same named short class syntax with get keyword does not exists,it creates/initalizes a (invisible)(writeonly) public class
//property that allows the returned literal jsObject(ie instance jsObject) to initialize/update a private/public class memeber
//4.Writing/initializing static class memebers(static class propertie/static class methods) by using the static keyword will
//add object memebers(object propeties/long syntax object method) to the ConstructorClassMethod, therefore they will only be accessible/executable
//on the Class and not on the created/returned literal jsObject(ie instanceJsObject)

//***************************************************************************************************************************

//declare PlayerClass blueprint/temaplte using class keyword in js syntax/code
class Player {
  //creating/initialzing a unique copie object propertie on the ConstructorClassMethod with a default value.
  //by writing/inititalizing a class propertie with the static keyword and a default value
  //and beacuse of the static keyword it will not do its default behaviour
  //which would have been where the alternative js syntax/code version of
  //creates/initializes a unique copie of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value
  static description = "This Class can instantiates a instancePlayerObject.";

  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will later be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  first;
  last;

  //alternative js syntax/code version of
  //creating/initiazling unique copie of private object memeber(not object method)/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields))
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value and in this case it is only accessible withing the class blueprint/temaplte itself and not accessible on the returned litearl jsObject(ie instacne jsObject)
  #score = 0;
  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  constructor(first, last) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //initializing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object methods)
    //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into the explicit short class method syntax named constructor's paramters
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.first = first;
    this.last = last;
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
  }

  //creating/initiazling unique copie of private object memeber(not object propertie)/class memeber(not class propertie)/keys(object method/class method)
  //on the implicitly created literal jsObject (ie instance jsObject) by adding it as a unique long syntax object method on the implicitly created literal
  //jsObject(ie instance jsObject),and in this case it is only executable withing the class blueprint/temaplte itself and not accessible on the returned litearl jsObject(ie instacne jsObject)
  //we do this by writing a private short class method syntax beacause a private object method cannot be create/initiazlies like a public object method
  #helperSpeak() {
    return `speaking.`;
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  speak() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a private object method/short class methos syntax is only executable within the class blueprint/template itself and not executable on the
    //returned literal jsObject(ie instance jsObject)
    return `${this.name} ${this.last} is ${this.#helperSpeak()}.`;
  }

  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  getScore() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a private object property/class property(ie class variables/field) is not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this.#score;
  }

  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax with 1 parameter
  setScore(newScore) {
    //encapsulation security check
    if (newScore < 0) throw new Error("Score must be positive");
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a private object property/class property(ie class variables/field) is not accessible via the returned literal jsObjet (ie instance  jsObject)
    this.#score = newScore;
  }

  //alternative js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //+
  //alternative js syntax/code version of
  //creating/initiazling the unique copie of (readonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value that is created from accessing/executing a combinataion of public/private object memebers/
  //class memebers/keys/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject))
  //we do this by writing a short class method syntax with the get keyword
  get score() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a private object property/class property(ie class variables/field) is not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this.#score;
  }

  //alternative js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //+
  //case 1 - if same named short class method syntax with the get keyword is not already written -
  //it creates unique copie of (invisible) (writeonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will not be initialized inside the class blueprint/template,
  //instead we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //but in reality we are executing the short class method syntax with the set keyword and passing in the value as argument,
  //OR
  //case 2 - if same named short class method syntax with the get keyword is already written -
  //it add's on the (write) ability to the already created/initiazed unique copie of (readonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //and whem we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //we are in reality executing the short class method syntax with the set keyword and passing in the value as argument,
  //+
  //the short class method syntax with the set keyword initializes/updates an existing public/private object memebers/
  //class memebers/key/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) with the passed in value in its parameter.
  //(Note- we can perform encapsulation security check as well as access/execute all existing public/private object memebers/
  //class memebers/keys/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) inside the short class method syntax with the set keyword)
  //we do this by writing a short class method syntax with the set keyword that accepts 1 paramter
  set score(newScore) {
    //encapsulation security check
    if (newScore < 0) throw new Error("Score must be positive");
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a private object property/class property(ie class variables/field) is not accessible via the returned literal jsObjet (ie instance  jsObject)
    this.#score = newScore;
  }

  //creating/initialzing a unique copie object method on the ConstructorClassMethod with a long syntax object method
  //by writing a short class method syntax with the static keyword
  //and beacuse of the static keyword it will not do its default behaviour
  //which would have been creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject
  static createRandomInstancePlayerObject() {
    return new Player("RandomFirstName", "RandomLastName");
  }
}

//instanceJsObject/instancePlayerObject = new Class(0 arguments) execution
const instancePlayerObject1 = new Player();
//instanceJsObject/instancePlayeyObject.readWriteGetterSetterObjectPropertie/classPropertie ie class variable/fields
console.dir(instancePlayerObject1.score);
//instanceJsObject/instancePlayeyObject.readWriteGetterSetterObjectPropertie/classPropertie ie class variable/fields = number type
instancePlayerObject1.score = 10;
//Class.objectPropertie = string type
console.dir(Player.description);
//Class.objectMethod = instanceJsObject/instancePlayerObject
console.dir(Player.createRandomInstancePlayerObject());

//*********************************************************************************************************
//Using class syntax sugars classical OOP's class inheritance to achieve prototypal inheritance/deligation
// in prototypal OOP/prototype oriented programming(POP)
//*******************************************************
//Usage Notes -
//************
//1.if we have duplicating class memebers in multiple child/sub class blueprint/template we can move them into a parent class blueprint/template
//and let the multiple child/sub class blueprint/temapltes inherit the class memebers from the parent/super class blueprint/temaplte with the extends keyword and possibly the super keyword
//2.The child class blueprint/template inherits the parent class blueprint/temapltes
//class memebers(class properties(ie class variables/fields)/class methods) by using the js syntax/code keyword extends along with the name
//of the parent class blueprint/temaplte next to the child class blueprint/tempalte delcaration.
//3.The super keyword in js syntax/code is stores a refernce to the short class method syntax named constructor
//of the parent class blueprint/temaplte
//4.If we create a class blueprint/temaplte that dosnt extend a parent class blueprint/temaplte, and dont provide an explicit short class method syntax named constructor
//it implcitly creates a short class method syntax named constructor with no parameters.This means we dont want to initiazlie any class properties(ie class variables/fields).
//5.If we create a child/sub class blueprint/tempalte that extends a parent class blueprint/template, and dont provide an explicit short class method syntax named constructor
//and explicitly execute the short class method syntaxed named construtore of the parent class blueprint/temaplte
//it implcitly executes the short class method syntax named constructor of parent class blueprint/temaplte because of extends keyword and then
//implcity create short class method syntax named constructor with 0 paremeters.We do this when we dont wan to inittiazlie any extra class properties(ie class variables/fields)
//ontop of the class propperties initazlies by the implicit execution of the short class method syntax named construor of the parent class blueprint/temaplte.
//6.If we create a child/sub class blueprint/tempalte that extends from a parent class blueprint/template, and provide an explicit short class method syntax named constructor
//as well as explcitly execute the short class method syntax named constructor of parent class blueprint/temaplte, it allows us to initialzie extra
//class properties(ie class variables/fields) ontop of the class properties(ie class variables/fields) initiazlied by the explcit execution of the short class method syntax named constructor of the parent class blueprint/template
//7.if the short class method syntax in a child/sub class temaplte/blueprint is the same name with diffrent implementation of the inherited class method from the parent/super class blueprint/template
//then we are overriding that inherited class method
//8.A child class blueprint/template can only extend a single other parent class blueprint/template
//9.In js syntax/code,we have 2 ways to create unique copies of object memebers/class memeber(not class methods)/keys(object properties/
//class properties(ie class variables/fields)/object properties)on the implicitly created literal jsObject ie(the instance jsObject),
//way 1.we can create it outside the short sytanx class method named constructor by using just the object propertie/class property(ie class variable/filed)/object method name.
//which implcity does way 2.way 2.we can creat it inside the short syntax class method named constructor by using the this keyword and object method/object propertie(ie class variable/field)/object method name,
//10.we can initiazlie a default value to a created unique copies of object memebers/class memeber(not class methods)/keys(object properties/
//class properties(ie class variables/fields)/object properties)on the implicitly created literal jsObject ie(the instance jsObject)
//when we dont want to use the arguments passed into the explict short class method syntax named constructor's paramters to initiazlie it.
//we usually use way 1 from above when doing this.

//Example 1 -
//declare parent/super AnimalClass blueprint/temaplte using class keyword in js syntax/code
class Animal {
  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  name;
  age;
  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  constructor(name, age) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //initializing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
    //on the implicitly created literal jsObject ie(the instance jsObject)
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.name = name;
    this.age = age;
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
  }

  //creating/initializing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  eat() {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //obejct properties to variables - object destructuring
    return `${this.name} is eating.`;
  }
}

//declare child/sub DogClass blueprint/temaplte using class keyword in js syntax/code then extending it with parent AnimalClass blueprint/temaplte
class Dog extends Animal {
  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  livesLeft;

  //NOTE -
  //In a child/sub class blueprint/temaplte that extends from a parent/super class blueprint/temaplte
  //we only write an explicit short class method syntax named constructor and explcitly execute short class method syntaxed named constructor
  //of the parent class blueprint/templte when we want to initiazlie extra class properties(ie class variables/fields)
  //using any of the arguments passed into the explcit short class method syntax named constructor's parameters,
  //ontop of the class propperties(ie class variables/fields) that will be initazlies by
  //the explicit execution of the short class method syntax named construor of the parent class blueprint/temaplte.

  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 3 parameters
  constructor(name, age, livesLeft = 9) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //explicitly execute short class method syntax named constructor of parent class blueprint/temaplte and pass in required 2 arguments
    super(name, age);
    //initializing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object properties)
    //on the implicitly created literal jsObject ie(the instance jsObject)
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.livesLeft = livesLeft;
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  bark() {
    return `woof`;
  }
}

//declare child/sub MouseClass blueprint/temaplte using class keyword in js syntax/code then extending it with parent AnimalClass blueprint/temaplte
class Cat extends Animal {
  //NOTE -
  //In a child/sub class blueprint/temaplte that extends from a parent/super class blueprint/temaplte
  //we only omit adding the explicit short class method syntax named constructor and explcitly executing the short class method syntaxed named constructor
  //of the parent class blueprint/templte, when we dont want to initiazlie any extra class properties(ie class vairables/fields) using any of the
  //arguments passed into the explicit short class method syntax named constructor's paramters , ontop
  //of the class properties(ie class variables/fields) that would be initazlies by
  //the explicit execution of the short class method syntax named constructor of the parent class blueprint/temaplte.

  //implcity create short class method syntax named constructor with 2 paremeters
  //implcitly execute short class method syntax named constructor of parent class blueprint/temaplte passing in
  //in 2 arguments(ie the arguments passed into 2 parameters of implcitly created short class method syntax named constructor)
  //because of extends keyword

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  meow() {
    return `meow`;
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  //the short class method syntax is the same name with diffrent implementation of an inherited class method from the parent/super class blueprint/template
  //Therfore we are overriding that inherited class method
  eat() {
    return `${this.name} is not eating.`;
  }
}

//declare MouseClass blueprint/temaplte using class keyword in js syntax/code
class Mouse {
  //NOTE -
  //In a class blueprint/temaplte that does not extends from a parent/super class blueprint/temaplte
  //we only omit adding the explicit short class method syntax named constructor
  //when we dont want to initiazlie any class properties(ie class vairables/fields) using any of the
  //arguments that would be passed into the explicit short class method syntax named constructor's paramters

  //implcity create short class method syntax named constructor with 0 paremeters

  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  squeak() {
    return `sqeak`;
  }
}
