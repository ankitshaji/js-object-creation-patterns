//***************************************************************************************************
//ts syntax/code version of third js object creation pattern/blueprint/template
//- Is exactly like a class template/blueprint
//***************************************************************************************************
//create an instance jsObject using the ts syntax/code version of
//class template/blueprint syntax sugar version of object creation pattern/blueprint/template 2
//(ie Makeing prototyal OOP/prototype oriented programming(POP) look like classical OOP/classbased OOP)
//*************************************************************************************************
//Usage Notes -
//************
//1.The explcit short class method syntax named constructor
//has an implcit type annotation on return value that we cannot explicitly set
//2.In ts syntax/code we are not allowed to create/initialize unique copies of object memebers/class memeber(not class methods)
///keys(object properties/class properties(ie class variables/fields)/object methods)
//on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
//the explicit short class method syntax named constructor's paramters or with a default value, inside the explicit short class
//method syntax named constructor as this would cause static type checking object pattern checking to show error as we are trying to call an undefinedPropertyOrMethod on the jsObject
//We are only allowed to intitalize here but after we
//set the explcitly/implict type annotation for the object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//and create them outside the explicit short class method syntax named constructor
//3.we use the readonly keyword in ts syntax/code when setting a to be created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method) to be ts readonly
//this will cause static type checking's object pattern checking to show error if we rewrite a ts readonly property/method value
//but when compiled to js syntax/code we are only creating/initiazling a unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject) and not creating/initiazling a unique copie of (readonly) object memeber/class
//memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method) on the implicitly
//created literal jsObject ie(the instance jsObject)
//4.case 1 - we can use public keyword in ts sytax/code when creating/initizling a unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject)
//to add a visual reminder to let the user know that the created/initialzied unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject) is accessible/executable inside the parent/super class blueprint/template
//and the child/super class blueprint as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//case 2 - we can use public keyword in ts sytax/code when writing a short class method syntax
//to add a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
//object method on all created/returned literal jsObject ie(the instance jsObject)
//is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/temaplte
//as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//5.case 1 - we can use private keyword in ts syntax/code when creating/initizling a unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject), so that while we are in the ts file,
//the created/initialzied unique copie of object memebers/class memeber(not class methods)/keys(object
//properties/class properties(ie class variables/fields)/object method) on the implicitly created literal
//jsObject ie(the instance jsObject) is only accessible/executable inside the class blueprint/template and not
//via the returned literal jsObjet (ie instance  jsObject), meaning static type checking's object pattern
//checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ charecter at start of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
//case 2 - we can use private keyword in ts sytax/code when writing a short class method syntax
//,so that while we are in the ts file,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
//created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside this specific class blueprint/template
//and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
//checking will show error if we try to call the ts syntax/code private prototypeObject(or its prototypeObjects) object method
//via the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ at the start of written short class method syntax
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
//6.case 1 - we can use the protected keyword in ts syntax/code when creating/initizling a unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject), so that while we are in the ts file,
//the created/initialzied unique copie of object memebers/class memeber(not class methods)/keys(object
//properties/class properties(ie class variables/fields)/object method) on the implicitly created literal
//jsObject ie(the instance jsObject)
//is only accessible/executable inside the parent/super class blueprint/template and the child/sub class blueprint/template and not
//via the returned literal jsObjet (ie instance  jsObject), meaning static type checking's object pattern
//checking will show error if we try to call an ts syntax/code protected propert/method on the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ charecter at start of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
//case 2 - we can use protected keyword in ts sytax/code when writing a short class method syntax
//,so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
//created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside the parent/super class blueprint/template
//and child/sub class blueprint/tempalte and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
//checking will show error if we try to call the ts syntax/code protected prototypeObject(or its prototypeObjects) object method
//via the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ at the start of written short class method syntax
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.

//**************************************************************************************************************************************
//Example 1
//**************************************************************************************************************************************
//declare parent/super PlayerClass blueprint/temaplte using class keyword in js syntax/code
class Player {
  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will later be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public first: string;
  public last: string;

  //creating unique copies of (ts syntax/code readonly) object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will later be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //setting the to be created/initalized object memeber/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method) to be readonly with ts code/syntax readonly keyword
  //so that static type checking's object pattern checking will show error if we rewrite a ts syntax/code readonly property/method value
  //adding the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public readonly bloodType: string;

  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public isAlive: boolean = true;

  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside this specific class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method in a child/sub class blueprint/template or on the returned literal jsObject(ie instance jsObject).
  //adding the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private or protected keyword while in the ts file
  private _score: number = 0;

  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the protected keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside the parent/super class blueprint/template and child/sub blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code protected propert/method on the returned literal jsObject(ie instance jsObject).
  //adding the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private or protected keyword while in the ts file
  protected _description: string =
    "This Class instantiates a instancePlayerObject.";

  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  //+
  //whcih has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  constructor(first: string, last: string, bloodType: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //initializing unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object methods)
    //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into the explicit short class method syntax named constructor's paramters
    //static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
    //static tpye checking's object pattern checking will show error if we try to call an undefinedPropertyOrMethod on jsObject
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    this.first = first;
    this.last = last;
    //initializing unique copie of (ts syntax/code readonly) object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object methods)
    //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into the explicit short class method syntax named constructor's paramters
    this.bloodType = bloodType;
    //static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
    //static type checking's object pattern checking will show error if we rewrite a ts syntax/code readonly property/method value
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  //+
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the private keyword in ts syntax/code to the written the short class method syntax
  //so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
  //created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside this specific class blueprint/template
  //and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
  //checking will show error if we try to call the ts syntax/code private prototypeObject(or its prototypeObjects) object method
  //via the returned literal jsObject(ie instance jsObject).
  //adding the _ at the start of written short class method syntax
  //as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
  private _helperSpeak(): string {
    return `speaking`;
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  //+
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the protected keyword in ts syntax/code to the written the short class method syntax
  //so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
  //created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside the parent/super class blueprint/template
  //and child/sub class blueprint/tempalte and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
  //checking will show error if we try to call the ts syntax/code protected prototypeObject(or its prototypeObjects) object method
  //via the returned literal jsObject(ie instance jsObject).
  //adding the _ at the start of written short class method syntax
  //as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
  protected _helpCount(): string {
    return `counting`;
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototyeObject) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObject)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/temaplate
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public speak(): string {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private prototypeObject(or its prototypeObjects) method/short class method syntax is only accessible/executable within that specifc class blueprint/template itself and not executable on the
    //returned literal jsObject(ie instance jsObject)
    return `${this.first} ${this.last} is ${this._helperSpeak()}.`;
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/templte
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public count(): string {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected prototypeObject(or its prototypeObjects)method/short class method syntax is
    //only accessible/executable within the parent/super class blueprint/template and
    //child/sub class blueprint/template and not accessible/executable on the returned literal jsObject(ie instance jsObject)
    return `${this.first} ${this.last} is ${this._helpCount()}.`;
    //static type checkiing will show error if we return value of wrong type
  }

  //alternative js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //(But in this case of alternative js code/syntax version of object accessor class methods, the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject) is not accessible/executable anywhere)
  //+
  //alternative js syntax/code version of
  //creating/initiazling a unique copie of (js syntax/code readonly + ts syntax/code readonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value that is created from accessing/executing a combinataion of ts syntax/code public/private/protected object memebers/
  //class memebers/keys/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject))
  //we do this by writing a short class method syntax with the js syntax/code get keyword
  //+
  //which has 0 realParameter variables and it needs an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type.
  //The explcit/implicit type annotatation on the return value is used to set implicit type annotation for the to be
  //created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //sets the to be created/initalized object memeber/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method) to be ts syntax/code readonly with ts code/syntax readonly keyword
  //so that static type checking's object pattern checking will show error if we rewrite a ts syntax/code readonly property/method value
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/templte
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  //(But in this case of alternative js code/syntax version of object accessor class methods, the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject) is not accessible/executable anywhere)
  public get score(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc class blueprint/template
    //itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this._score;
    //static type checkiing will show error if we return value of wrong type
  }

  //alternative js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead
  //(But in this case of alternative js code/syntax version of object accessor class methods, the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject) is not accessible/executable anywhere)
  //+
  //case 1 - if same named short class method syntax with the js syntax/code get keyword is not already written -
  //it creates unique copie of (invisible) (js syntax/code writeonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will not be initialized inside the class blueprint/template,
  //instead we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //but in reality we are executing the short class method syntax with the js syntax/code set keyword and passing in the value as argument,
  //OR
  //case 2 - if same named short class method syntax with the js syntax/code get keyword is already written -
  //it add's on the (js syntax/code write) ability to and removes both (js/ts syntax/code readonly) ability from the already created/initiazed unique copie of
  //(js syntax/code readonly + ts syntax/code readonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //and whem we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //we are in reality executing the short class method syntax with the js syntax/code set keyword and passing in the value as argument,
  //+
  //the short class method syntax with the js syntax/code set keyword initializes/updates an existing ts syntax/code public/private/protected object memebers/
  //class memebers/key/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) with the passed in value in its parameter.
  //(Note- we can perform encapsulation security check as well as access/execute all existing ts syntax/code public/private/protected object memebers/
  //class memebers/keys/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) inside the short class method syntax with the js syntax/code set keyword)
  //we do this by writing a short class method syntax with the js syntax/code set keyword that with 1 paramter that accepts 1 argument
  //+
  //whcih needs an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/templte
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  //(But in this case of alternative js code/syntax version of object accessor class methods, the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject) is not accessible/executable anywhere)
  //if case 1 - The explcit type annotatation on the realParameter variable is used to set explcit type annotation for the to be
  //created unique copie of (invisible) (js syntax/code writeonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  public set score(newScore: number) {
    //encapsulation security check
    if (newScore < 0) throw new Error("score needs to be positive");
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within
    //that specifc class blueprint/template itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    this._score = newScore;
  }
}

//declare child/sub AdminPlayerClass blueprint/temaplte using class keyword in js syntax/code then extending it with parent/super PlayerClass blueprint/temaplte with the extends keyword in js syntax/code
class AdminPlayer extends Player {
  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public isAdmin: boolean = true;

  //NOTE -
  //In a child/sub class blueprint/temaplte that extends from a parent/super class blueprint/temaplte
  //we only omit adding the explicit short class method syntax named constructor and explcitly executing the short class method syntaxed named constructor
  //of the parent class blueprint/templte, when we dont want to initiazlie any extra class properties(ie class vairables/fields) using any of the
  //arguments passed into the explicit short class method syntax named constructor's paramters , ontop
  //of the class properties(ie class variables/fields) that would be initazlies by
  //the explicit execution of the short class method syntax named constructor of the parent class blueprint/temaplte.

  //implcity create short class method syntax named constructor with 2 paremeters
  //implcitly execute short class method syntax named constructor of parent class blueprint/temaplte and pass in
  //in 2 arguments(ie the arguments passed into 2 parameters of implcitly created short
  //class method syntax named constructor of child/sub class blueprint/tempalte)
  //because of extends keyword

  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead
  //we do this by writing a short class method syntax with 1 parameter
  //+
  //whcih has an explcit type annotation on the realParameter variables and it has an explicit/implcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public setDescription(newDescription: string): void {
    //encapsulation security check
    if (newDescription === "")
      throw new Error("Description cannot be be empty");
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected object property/class property(ie class variables/field) is accessible on the parent/super class blueprint/template and
    //child/sub class blueprint/temaplte but not accessible via the returned literal jsObjet (ie instance  jsObject)
    this._description = newDescription;
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  //The short class method syntax is the same name with diffrent implementation of an inherited class method from the parent/super class blueprint/template
  //Therfore we are overriding that inherited class method
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public count(): string {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected prototypeObject(or its prototypeObjects) method/short class methos syntax is only accessible/executable
    //within the parent/super class blueprint/template and
    //child/sub class blueprint/template and not accessible/executable on the returned literal jsObject(ie instance jsObject)
    return `${this.first} ${this.last} is ${this._helpCount()}.`;
    //static type checkiing will show error if we return value of wrong type
  }
}
//*************
//Testing area
//*************
//instanceJsObject/instancePlayerObject = new parent/super Class(2 arguments) execution
const instancePlayerObject1 = new Player("Elton", "Steel", "B+");
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts

//instanceJsObject/instancePlayerObject.readPropertie = type string value
//instancePlayerObject1.bloodType = "writing";
//static type checking's object pattern checking will show error if we rewrite a ts readonly property/method value

//instanceJsObject/instancePlayerObject.privatePropertie
//console.log(instancePlayerObject1._score);
//static type checking's object pattern checking will show error if we try to call an ts syntax/code private/protected object propert/object method on the returned literal jsObject(ie instance jsObject).

//instanceJsObject/instancePlayerObject.prototypeObjectObjectMethod(0 argument)
//console.log(instancePlayerObject1._helperSpeak())
//static type checking's object pattern checking will show error if we try to call the ts syntax/code private/protected prototypeObject(or its prototypeObjects) object method
//via the returned literal jsObject(ie instance jsObject).

//case 1 - if same named short class method syntax with the js syntax/code get keyword is not already written -
//instanceJsObject/instancePlayeyObject.writeSetterObjectPropertie/classPropertie ie class variable/fields = number type
instancePlayerObject1.score = 10;
//static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//instanceJsObject/instancePlayeyObject.writeSetterObjectPropertie/classPropertie ie class variable/fields
instancePlayerObject1.score;
//static type checking's object pattern checking will not show error becasue we are calling a
//definedPropertieOrMethod on the returned literal jsObject(ie instance jsObject)
//case 2 - if same named short class method syntax with the js syntax/code get keyword is already written -
//instanceJsObject/instancePlayeyObject.readWriteGetterSetterObjectPropertie/classPropertie ie class variable/fields = number type
instancePlayerObject1.score = 11;
//static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
instancePlayerObject1.score;
//static type checking's object pattern checking will not show error becasue we are calling a
//definedPropertieOrMethod on the returned literal jsObject(ie instance jsObject)
//case 3 - if we only have short class method syntax with the js syntax/code get keyword -
//instanceJsObject/instancePlayeyObject.readGetterObjectPropertie/classPropertie ie class variable/fields = number type
instancePlayerObject1.score;
//static type checking's object pattern checking will not show error becasue we are calling a
//definedPropertieOrMethod on the returned literal jsObject(ie instance jsObject)
instancePlayerObject1.score = 12;
//static type checking's object pattern checking will show error if we rewrite a ts readonly property/method value

//instanceJsObject/instanceAdminPlayerObject = new child/sub Class(2 arguments of type string) execution
const instanceAdminPlayerObject1 = new AdminPlayer("James", "Dean", "D-");

//instanceJsObject/instanceAdminPlayeyObject.prototypeObjectObjectMethod(1 argument of type string)
instanceAdminPlayerObject1.setDescription(
  "This Class instantiates a instanceAdminPlayerObject."
);
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts

//instanceJsObject/instanceAdminPlayeyObject.prototypeObjectPrototypeObjectObjectMethod()
console.log(instanceAdminPlayerObject1.speak());

///instanceJsObject/instanceAdminPlayeyObject
console.dir(instanceAdminPlayerObject1);

//**************************************************************************************************************************************
//Exmaple 2
//**************************************************************************************************************************************
//Usage notes -
//************
//1.The paramter properties ts syntax/code is an alternative syntax in ts code/syntax that
//allows us to create/initialize unique copies of object memebers/class memeber(not class methods)
///keys(object properties/class properties(ie class variables/fields)/object methods)
//on the implicitly created literal jsObject ie(the instance jsObject)
//with the arguments passed into the explicit short class method syntax named constructor's paramters or default value since paramters can have default value,
//with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
///keys(object properties/class properties(ie class variables/fields)/object methods) name,
//we do this by writing a visiblity/accessor modifier next to the realParamter with explcit type annotation
//inside the explicit short class method syntax named constructor
//Therfore it can automatically do the following -
//set explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//add the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//to have a visual reminder it is accessible/executable inside the class blueprint/template
//as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//add the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//so that while we are in the ts file, it is only accessible/executable inside class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
//meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
//add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file

//declare PlayerClass blueprint/temaplte using class keyword in js syntax/code
class Person {
  //instead of namedConstructorFunctionExpressionDefenition with 3 parameters,
  //we write an explcit short class method syntax named constructor with 3 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  //adds the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside this specific class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
  //add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file
  constructor(
    public first: string,
    public last: string,
    private _age: number = 25
  ) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
  }
}
//*************
//Testing area
//*************
//instanceJsObject/instancePersonObject = new Class(3 arguments) execution
const instancePersonObject1 = new Person("Arthur", "Shelby", 25);

//************************************************************************************************************************************
//Example 3
//************************************************************************************************************************************
//Usage notes -
//**************
//1.we can decalre an type annotation interface with the ts syntax/code interface keyword to store
//the type annotation of type object
//2.when declaring a type annotation interfaces of type object, the first letter should be capital.
//3.we ususally declare a type annotation interfaces of type object
//and set the reusable explicit type annotation interface of type object
//similar to a setting an explicit type annotation of type anything on
//the paramater variables with/without default value ,return value and normal varaiables,that
//accept,return and initiazlie/store type object respecrivly,thus allowing us to enforce/describe the
//required shape/structure on/of the literal jsObject that will be accepted, returned and iniitlized/stored.
//it allows static type checking to show error if we try to accept,return,store/initialzie a value of wrong type in paramter variable,return value and normal variable
//it allows static type checking to show error if we try to store/initiazlie a value of wrong type inside the object properties/object methods of the
//accepted,returned,stored/initizlied literal jsObject.
//it allows static type checkings object pattern checking to show error if there are extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject.
//it allows static type checkings object pattern checking to show error if if a requried object property/object method is missing in the
//accepted,returned,stored/initazlied literal jsObject.
//it allows static type checking object pattern checking to show error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object proeprty/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//4.We have a diffrent case for setting re-usuable explicit type annotation interfaces of type object on a declared child(sub)/parent(super) class blueprint/temapltes
//by using the ts syntax/code implements keyword, this allows us to enforce/describe the
//required shape/structure on/of the implcitly created literal jsOjbect.
//it allows static type checking to show error if we try to store/initiazlie a value of wrong type inside the
//created public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//on the implcitly created literal jsObject
//it allows static type checking object pattern checking to show error if a required public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) is missing/not created on the created literal jsObject.
//The requirement of a specifc method set by the implcit type annotaion interafce of type object
//on a child/sub class blueprint/template can be satisfied by the public/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//inhertied from a parent/super class blueprint/temaplte.
//Usually static type checking object pattern checking to show error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object proeprty/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//,but in this case of implemeting the declared type annotation of type object with object property/object method with the ts syntax/code readonly keyword
//on the class blueprint/template, we completly ignore the ts syntax/code readonly keyword on the object properties/methods in the
//the decalred type annotation of type of type object.
//Usually static type checkings object pattern checking would also show error if we add extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject, but in this case static type checkings object pattern checking
//does not show error if we add extra public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) on the implicitly created literal jsObject.
//4.There are 2 ways to extend an declared type annotation interface of type object -
//way 1 - a declared child/sub type annotation interface of type object can inherit properties/methods from multiple other preexisting decalred parent/super
//type annotation interfaces of type object(ie interfaces have multiple inheritance) through the ts syntax/code extends keyword.
//Imporant Note - we cannot override a property/method similar to how we override a public/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods)
//inside a declared child/sub Class blueprint/template.
//way 2 - we can re-open a pre-existing decalred type annotation interface of type object to add in extra properties/methods.
//4.declaring a type annotation interface of type object is the same as a
//declaring a type annotataion type alias of type objcet using the ts syntax/code type keyword
//and they can be used interchangebly.

//declaring the type annotation ColorfulObjectInterface of type object
interface ColorfulObjectInterface {
  //explicit type annotation on propertie that initializes/stores type string
  color: string;
}

//declaring the type annotation PrintableObjectInterface of type object
interface PrintableObjectInterface {
  //explicit type annotation on method that initiazlies/store type function  - using option 2
  //(option 2 - based on short method creation js code/syntax ((only)non arrow version) and
  //variable stored anonymous non arrow function expression defenition js code/syntax),
  //it accepts no fakeParameter variables and it has an explcit type annotation on return value
  print(): void;
}

//declare PlayerClass blueprint/temaplte using class keyword in js syntax/code
//that implemnts explicit type annotation ColorfulObjectInterface of type object
//+
//it allows static type checking to show error if we try to store/initiazlie a value of wrong type inside the
//created public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//on the implcitly created literal jsObject
//it allows static type checking object pattern checking to show error if a required public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) is missing/not created on the created literal jsObject.
//The requirement of a specifc method set by the implcit type annotaion interafce of type object
//on a child/sub class blueprint/template can be satisfied by the public/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//inhertied from a parent/super class blueprint/temaplte.
//Usually static type checking object pattern checking to show error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object proeprty/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//,but in this case of implemeting the declared type annotation of type object with object property/object method with the ts syntax/code readonly keyword
//on the class blueprint/template, we completly ignore the ts syntax/code readonly keyword on the object properties/methods in the
//the decalred type annotation of type of type object.
//Usually static type checkings object pattern checking would also show error if we add extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject, but in this case static type checkings object pattern checking
//does not show error if we add extra public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) on the implicitly created literal jsObject.
class Bike implements ColorfulObjectInterface {
  //instead of namedConstructorFunctionExpressionDefenition with 1 parameters,
  //we write an explcit short class method syntax named constructor with 1 parameters
  //+
  //it has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public color: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
  }
}

//declare PlayerClass blueprint/temaplte using class keyword in js syntax/code
//that implemnts explicit type annotation ColorfulObjectInterface of type object
//and explicit type annotation PrintableObjectInterface of type object
//+
//it allows static type checking to show error if we try to store/initiazlie a value of wrong type inside the
//created public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//on the implcitly created literal jsObject
//it allows static type checking object pattern checking to show error if a required public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) is missing/not created on the created literal jsObject.
//The requirement of a specifc method set by the implcit type annotaion interafce of type object
//on a child/sub class blueprint/template can be satisfied by the public/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//inhertied from a parent/super class blueprint/temaplte.
//Usually static type checking object pattern checking to show error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object proeprty/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//,but in this case of implemeting the declared type annotation of type object with object property/object method with the ts syntax/code readonly keyword
//on the class blueprint/template, we completly ignore the ts syntax/code readonly keyword on the object properties/methods in the
//the decalred type annotation of type of type object.
//Usually static type checkings object pattern checking would also show error if we add extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject, but in this case static type checkings object pattern checking
//does not show error if we add extra public/private/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) on the implicitly created literal jsObject.
class Jacket implements ColorfulObjectInterface, PrintableObjectInterface {
  //instead of namedConstructorFunctionExpressionDefenition with 1 parameters,
  //we write an explcit short class method syntax named constructor with 1 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public brand: string, public color: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  // +
  //it accepts 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/templte
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public print(): void {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    console.log(`${this.color} ${this.brand} jacket`);
  }
}
//*************
//Testing area
//*************
//instanceJsObject/instanceBikeObject = new Class(1 arguments) execution
const instanceBikeObject1 = new Bike("red");
//instanceJsObject/instanceJacketObject = new Class(2 arguments) execution
const instanceJacketObject1 = new Jacket("cd project red", "yellow");

//************************************************************************************************************************************
//Example 3
//************************************************************************************************************************************
//Usage notes -
//*************
//1.we can decalre a parent/super astract class blueprint/template using the abstract keyword in ts syntax/code along with
//the class keyword in js syntax/code
//2.A declared parent/super abstract class blueprint/temaplte cannot be instantiated by executing the parent/super abstract
//class blueprint/temaplte with the new keyword in js syntax/code next to it.
//therefore static type checking will show error if we try to instantiate a parent/super abstract class blueprint/temaplte by
//executing the parent/super abstract parent/super class blueprint/temaplte with the new keyword in js syntax/code next to it.
//3.A declared parent/super abstract class blueprint/template is a hybrid parent/super class blueprint/temaplte,
//which is a combination of a declared type annotaion interface of type object and a declared parent/super concerte class blueprint/temaplte.
//4.if a child/sub concrete class blueprint/template extends a parent/super abstract class blueprint/tempalte using the extends keyword in js sytanx/code
//then it will inherit the public/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//from the parent/super abstract class blueprint/temaplte.
//and it will allows us to enforce/describe the required shape/structure on/of the implcitly created literal jsObject
//therefore static type checking will show error if we try to store/initiazlie a value of wrong type inside the
//the public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract property/method from the parent/super abstract class blueprint/template on the implcitly created literal jsObject inside
//the child/sub concrete class blueprint/template.
//static type checking object pattern checking can show error if a abstract object property/object method/class method that was present inside the extended parent/super abstract class blueprint/temaplte
//does not have an implimentation in the child/sub class blueprint/temaplte (ie we did not have public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly created literal jsObject
//inside the child/sub concrete class blueprint/template)
//Usually static type checking object pattern checking shows error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object property/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//but in this case of having a ts syntax/code readonly keyword on an explcit type annotation of abstract object property/object method/class method
//inside an parent/super abstract class blueprint/temaplte,we completly ignore the ts syntax/code readonly keyword when extending the parent/super
//abstract class blueprint/temaplte from a child/sub concrete class blueprint/template.
//4.we can also set the required access modifier when writing the explcitly type annotaion on abstract object property/object method/class method inside the parent/super abstract class blueprint/temaplte
//,so that when child/sub concrete class blueprint/temaplte that extends the parent/super absract class blueprint/template
//creates the public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//on the literal jsObject to implement the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple,it will also be required to
//use the correct access modifer.
//therefore static type checkings object patern checking will show error if we do not have the correct access modifer on the
///public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implmetation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly create literal jsObject
//inside the child/sub concrete class blueprint/temaplte

//declare parent/super abstract EmployeeClass blueprint/temaplte using abstract keyword in ts syanx/code and class keyword in js syntax/code
abstract class Empoloyee {
  //explicit type annotation on abstract object propertie that initializes/stores type boolean that required a public access modifier
  //(ie not created on the literal jsObject)
  public abstract isHired: boolean;

  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public first: string, public last: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
  }

  //explicit type annotation on abstract class method that initiazlies/store type function  - using option 2 - that requires a public access modifier
  //(option 2 - based on short method creation js code/syntax ((only)non arrow version) and
  //variable stored anonymous non arrow function expression defenition js code/syntax),
  //it accepts no fakeParameter variables and it has an explcit type annotation on return value
  //(ie not created on the prototypeObject)
  public abstract getAnnualSalary(): number;

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototyeObject) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax
  // +
  //it has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObject)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/temaplate
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public greet(): void {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    console.log(`Hello, ${this.first} ${this.last}`);
    //static type checkiing will show error if we return value of wrong type
  }
}

//declare child/sub FullTimeEmployeeClass blueprint/temaplte using class keyword in js syntax/code then
//extending it with parent/super abstract EmployeeClass blueprint/template with the extends keyword in js syntax/code
//+
//static type checking will show error if we try to store/initiazlie a value of wrong type inside the
//the public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract property/method from the parent/super abstract class blueprint/template on the implcitly created literal jsObject inside
//the child/sub concrete class blueprint/template.
//static type checking object pattern checking can show error if a abstract object property/object method/class method that was present inside the extended parent/super abstract class blueprint/temaplte
//does not have an implimentation in the child/sub class blueprint/temaplte (ie we did not have public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly created literal jsObject
//inside the child/sub concrete class blueprint/template)
//Usually static type checking object pattern checking shows error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object property/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//but in this case of having a ts syntax/code readonly keyword on an explcit type annotation of abstract object property/object method/class method
//inside an parent/super abstract class blueprint/temaplte,we completly ignore the ts syntax/code readonly keyword when extending the parent/super
//abstract class blueprint/temaplte from a child/sub concrete class blueprint/template.
//static type checkings object patern checking will show error if we do not have the correct access modifer on the
///public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implmetation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly create literal jsObject
//inside the child/sub concrete class blueprint/temaplte
class FullTimeEmployee extends Empoloyee {
  //implmenting an abstract object propertie required by the parent/super abstract class blueprint/template on the child/sub class bluepint/template
  //+
  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public isHired: boolean = true;

  //instead of namedConstructorFunctionExpressionDefenition with 3 parameters,
  //we write an explcit short class method syntax named constructor with 3 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside this specific class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
  //add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file
  constructor(first: string, last: string, private _salary: number) {
    //explictly execute short class method syntax named constructor of parent class blueprint/temaplte using super keyword in js syntax/code and pass in
    //in 2 arguments(ie the arguments passed into 2 parameters of explicitly created short
    //class method syntax named constructor of child/sub class blueprint/tempalte)
    //because of extends keyword
    super(first, last);
  }

  //implmenting an abstract class method required by the the parent/super abstract class blueprint/template on the child/sub class bluepint/template
  //+
  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  //+
  //whcih has 0 realParameter variables and it has an explicit/implcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  getAnnualSalary(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc class blueprint/template
    //itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this._salary;
  }
}

//declare child/sub FullTimeEmployeeClass blueprint/temaplte using class keyword in js syntax/code then
//extending it with parent/super abstract EmployeeClass blueprint/template with the extends keyword in jst syntax/code
//+
//static type checking will show error if we try to store/initiazlie a value of wrong type inside the
//the public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract property/method from the parent/super abstract class blueprint/template on the implcitly created literal jsObject inside
//the child/sub concrete class blueprint/template.
//static type checking object pattern checking can show error if a abstract object property/object method/class method that was present inside the extended parent/super abstract class blueprint/temaplte
//does not have an implimentation in the child/sub class blueprint/temaplte (ie we did not have public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implementation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly created literal jsObject
//inside the child/sub concrete class blueprint/template)
//Usually static type checking object pattern checking shows error if the object property/object method in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and we tried to rewrite the value of the object property/object method in the
//accepted,returned,stored/initazlied literal jsObject that had the explcitict type annotaion interface of type object set on it.
//but in this case of having a ts syntax/code readonly keyword on an explcit type annotation of abstract object property/object method/class method
//inside an parent/super abstract class blueprint/temaplte,we completly ignore the ts syntax/code readonly keyword when extending the parent/super
//abstract class blueprint/temaplte from a child/sub concrete class blueprint/template.
//static type checkings object patern checking will show error if we do not have the correct access modifer on the
///public/private/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//created for the implmetation of the abstract object property/object method/class method from the parent/super abstract class blueprint/temaple on the implcitly create literal jsObject
//inside the child/sub concrete class blueprint/temaplte
class PartTimeEmployee extends Empoloyee {
  //implmenting an abstract object propertie required by the parent/super abstract class blueprint/template on the child/sub class bluepint/template
  //+
  //alternative js syntax/code version of
  //creating/initiazling the unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) without using any of the arguments passed into the explicit short class method syntax named constructor's paramters,
  //instead initiazling with a defualt value.
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //but we already would have an implcitly type annotation on it by infering the type from the initialized default value
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public isHired: boolean = true;

  //instead of namedConstructorFunctionExpressionDefenition with 4 parameters,
  //we write an explcit short class method syntax named constructor with 4 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it has an implcit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //+
  //But in this case we also using the paramter properties ts syntax/code,the alternative syntax in ts code/syntax
  //which creates/initializes unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods)
  //on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
  //the explicit short class method syntax named constructor's paramters or with the default value since parameters can have default value,
  //with the realParameter names being the create/initialize unique copies of object memebers/class memeber(not class methods)
  ///keys(object properties/class properties(ie class variables/fields)/object methods) names,
  //we do this by writing a visiblity/accessor modifier next to the realParameter with explicit type annotation
  //inside the explicit short class method syntax named constructor.
  //+
  //Therfore it automatically does the following -
  //sets explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adds the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside this specific class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
  //add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file
  constructor(
    first: string,
    last: string,
    private _hourlyRate: number,
    private _hoursWorked: number
  ) {
    //explictly execute short class method syntax named constructor of parent class blueprint/temaplte using super keyword in js syntax/code and pass in
    //in 2 arguments(ie the arguments passed into 2 parameters of explicitly created short
    //class method syntax named constructor of child/sub class blueprint/tempalte)
    //because of extends keyword
    super(first, last);
  }

  //implmenting an abstract class method required by the parent/super abstract class blueprint/template on the child/sub class bluepint/template
  //+
  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject instead
  //we do this by writing a short class method syntax
  //+
  //whcih has 0 realParameter variables and it has an explicit/implcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into fakeParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the parent/super class blueprint/template and child/sub class blueprint/template
  //as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public getAnnualSalary(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc class blueprint/template
    //itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this._hourlyRate * this._hoursWorked;
  }
}

//*************
//Testing area
//*************
//instanceJsObject/instanceEmployeeObject = new Class(3 arguments) execution
// const instanceEmployeeObject1 = new Empoloyee("Karen", "Gillian");
//static type checking will show error if we try to instantiate a parent/super abstract class blueprint/temaplte by
//executing the parent/super abstract parent/super class blueprint/temaplte with the new keyword in js syntax/code next to it.

//instanceJsObject/instanceFullTimeEmployeeObject = new Class(3 arguments) execution
const instanceFullTimeEmployeeObject1 = new FullTimeEmployee(
  "Arthur",
  "Shelby",
  120000
);
//instanceJsObject/instanceFullTimeEmployeeObject.prototypeObjectObjectMethod(0 argument)
console.dir(instanceFullTimeEmployeeObject1.getAnnualSalary());

//instanceJsObject/instancePartTimeEmployeeObject = new Class(4 arguments) execution
const instacePartTimeEmployeeObject = new PartTimeEmployee(
  "James",
  "Dean",
  25,
  1100
);
//instanceJsObject/instancePartTimeEmployeeObject.prototypeObjectObjectMethod(0 argument)
console.dir(instacePartTimeEmployeeObject.getAnnualSalary());
