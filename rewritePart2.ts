//***************************************************************************************************
//The ts syntax/code version of the js syntax/code third js object creation pattern/blueprint/template
//ie syntax sugar that looks exactly like declaring a class template/blueprint
//***************************************************************************************************
//it can create an instance jsObject using the ts syntax/code version of the js syntax/code's
//declared class template/blueprint ie syntax sugar of object creation pattern/blueprint/template 2
//(ie Makeing prototyal OOP/prototype oriented programming(POP) look like classical OOP/classbased OOP)
//And because it is the ts syntax/code version, it is also treated
//as a declared type annotation class blueprint/template of type object, as it will be hence forth refered to as
//,it is similar to decalring a type annoitation interface of type object, it allows to enforce/describe
//the requied shape/structure of the jsObject(literal jsObject/instance jsObject) that is created
//then returned in the explcit/implcit short class method syntax named constructor
//*************************************************************************************************
//Usage Notes -
//************3
//1.The explicit/implcit short class method syntax named constructor
//gets set an invisible explicit type annotation class blueprint/tempalte of type object for its implcit return value
//ie(literal jsObject/instance jsObject) which we cannot explicitly set.
//static type checking will show error if we return a value of wrong type
//static type checking will show error if we store/initialize value of wrong type in properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//2.In ts syntax/code we are not allowed to directly create/initialize unique copies of object memebers/class memeber(not class methods)
///keys(object properties/class properties(ie class variables/fields)/object methods)
//on the implicitly created literal jsObject ie(the instance jsObject) with the arguments passed into
//the explicit/implicit short class method syntax named constructor's paramters or with a default value inside the explicit short class
//method syntax named constructor, as this would cause static type checking object pattern checking to show error as we are trying to call an undefinedPropertyOrMethod on the jsObject
//We are only allowed to intitalize the values here and that too only after we
//set explcitly/implict type annotation for the object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//and create them outside the explicit/implicit short class method syntax named constructor
//static type checking will show error if we store/initialize value of wrong type in these properties/methods
//3.we can use the readonly keyword in ts syntax/code when setting a to be created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method) to be ts readonly
//this will cause static type checking's object pattern checking to show error if we rewrite a ts readonly property/method value
//but note when compiled to js syntax/code we are only creating/initiazling a unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject) and not creating/initiazling a unique copie of (readonly) object memeber/class
//memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method) on the implicitly
//created literal jsObject ie(the instance jsObject)
//4.case 1 - we can use public keyword in ts sytax/code when creating/initizling a unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject)
//to add a visual reminder to let the user know that the created/initialzied unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject) is accessible/executable inside the declared type annotation  parent/super class blueprint/template of type object
//and the declared type annotation child/super class blueprint of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//case 2 - we can use public keyword in ts sytax/code when writing a short class method syntax
//to add a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
//object method on all created/returned literal jsObject ie(the instance jsObject)
//is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/temaplte
//of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//5.case 1 - we can use private keyword in ts syntax/code when creating/initizling a unique copie of object memebers/class
//memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//on the implicitly created literal jsObject ie(the instance jsObject), so that while we are in the ts file,
//the created/initialzied unique copie of object memebers/class memeber(not class methods)/keys(object
//properties/class properties(ie class variables/fields)/object method) on the implicitly created literal
//jsObject ie(the instance jsObject) is only accessible/executable inside the declared type annotation class blueprint/template of type object and not
//via the returned literal jsObjet (ie instance  jsObject), meaning static type checking's object pattern
//checking will show error if we try to call an ts syntax/code private property/method on the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ charecter at start of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
//case 2 - we can use private keyword in ts sytax/code when writing a short class method syntax
//,so that while we are in the ts file,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
//created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside this specific declared type annotation class blueprint/template of type object
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
//checking will show error if we try to call an ts syntax/code protected property/method on the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ charecter at start of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.
//case 2 - we can use protected keyword in ts sytax/code when writing a short class method syntax
//,so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
//created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside the declared type annotation parent/super class blueprint/template of type object
//and  declared type annotation child/sub class blueprint/tempalte of type object and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
//checking will show error if we try to call the ts syntax/code protected prototypeObject(or its prototypeObjects) object method
//via the returned literal jsObject(ie instance jsObject).
//Note - we also add the _ at the start of written short class method syntax
//as a visual reminder that it had a ts syntax/code private or protected keyword while in the ts file.

//**************************************************************************************************************************************
//Example 1
//**************************************************************************************************************************************
//declare a type annotation parent/super PlayerClass blueprint/temaplte of type object using class keyword in js syntax/code
class Player {
  //creating unique copies of object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject) that will later be initialized with the arguments passed into the explicit short class method syntax named constructor's paramters
  //+
  //setting explcit type annotation for the to be created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //adding the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation  parent/super class blueprint/template of type object and declared type annotation  child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
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
  //we write an explicit short class method syntax named constructor with 2 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisislbe
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  //+
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the private keyword in ts syntax/code to the written the short class method syntax
  //so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
  //created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside this specific declared type annotation class blueprint/template
  //of type object and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
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
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  //+
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the protected keyword in ts syntax/code to the written the short class method syntax
  //so that while we are in the ts file ,the reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all
  //created/returned literal jsObject ie(the instance jsObject) is only accessible/executable inside the declared type annotation parent/super class blueprint/template of type object
  //and declared type annotation child/sub class blueprint/tempalte of type object and not via the returned literal jsObjet (ie instance  jsObject),meaning static type checking's object pattern
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
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObject)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/temaplate
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
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
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the delcared type annotation parent/super class blueprint/template of type object  and declared type annotation child/sub class blueprint/templte
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public count(): string {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected prototypeObject(or its prototypeObjects)method/short class method syntax is
    //only accessible/executable within the declared type annotation parent/super class blueprint/template of type object and
    //the decalred type annotation child/sub class blueprint/template of type object and not accessible/executable on the returned literal jsObject(ie instance jsObject)
    return `${this.first} ${this.last} is ${this._helpCount()}.`;
    //static type checkiing will show error if we return value of wrong type
  }

  //alternative js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead
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
  //so that static type checking will show error if we pass arguments of wrong type into realParamter(ignored)
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts(ignored)
  //and static type checkiing will show error if we return value of wrong type.
  //The explcit/implicit type annotatation on the return value is used to set an invisible explicit type annotation for the to be
  //created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that static type checking will show error if we store/initialize value of wrong type in object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //it sets the to be created/initalized object memeber/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method) to be ts syntax/code readonly with ts code/syntax readonly keyword
  //so that static type checking's object pattern checking will show error if we rewrite a ts syntax/code readonly property/method value
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/templte
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  //(But in this case of alternative js code/syntax version of object accessor class methods, the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject) is not accessible/executable anywhere)
  public get score(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc declared type annotation class blueprint/template of type object
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
  //on the implicitly created literal jsObject ie(the instance jsObject) that will not be initialized inside the declared type annoationt class blueprint/template of type object,
  //instead we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //but in reality we are executing the short class method syntax with the js syntax/code set keyword and passing in the value as argument,
  //OR
  //case 2 - if same named short class method syntax with the js syntax/code get keyword is already written -
  //it add's on the (js syntax/code write) ability to and removes both (js/ts syntax/code readonly) ability from the already created/initiazed unique copie of
  //(js syntax/code readonly + ts syntax/code readonly) object memeber/class memeber(not class method)/keys(object propertie/class propertie(ie class variable/field)/object method)
  //on the implicitly created literal jsObject ie(the instance jsObject)
  //and when we pretend to initialize/update it with a value by accessing it on the returned literal jsObject(ie instanceJsObject),
  //we are in reality executing the short class method syntax with the js syntax/code set keyword and passing in the value as argument.
  //+
  //the short class method syntax with the js syntax/code set keyword initializes/updates an existing ts syntax/code public/private/protected object memebers/
  //class memebers/key/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) with the passed in value in its parameter.
  //(Note- we can perform encapsulation security check as well as access/execute all existing ts syntax/code public/private/protected object memebers/
  //class memebers/keys/(object properties/class properties(ie class variables/fields)/object methods/class methods) on the
  //implcitly created/returned jsObject ie(instance jsObject)) inside the short class method syntax with the js syntax/code set keyword)
  //we do this by writing a short class method syntax with the js syntax/code set keyword that with 1 paramter that accepts 1 argument
  //+
  //which needs an explcit type annotation on the realParameter variables and it has an invisible explicit type annotation on return value that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter(ignored)
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts(ignored)
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the delcared type annotation child/sub class blueprint/templte
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
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
    //that specifc declared type annotation class blueprint/template of type object itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    this._score = newScore;
    //static type checkiing will show error if we return value of wrong type
  }
}

//declare a type annotation child/sub AdminPlayerClass blueprint/temaplte of type object using class keyword in js syntax/code then extending it with the declared type annotation parent/super PlayerClass blueprint/temaplte of type object with the extends keyword in js syntax/code
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public isAdmin: boolean = true;

  //NOTE -
  //In a decalred type annotation child/sub class blueprint/temaplte of type object that extends a declared type annotation parent/super class blueprint/temaplte of type object
  //we only omit adding the explicit short class method syntax named constructor and explcitly executing the short class method syntaxed named constructor
  //of the extended declared type annotation parent class blueprint/templte of type object, when we dont want to initiazlie any extra class properties(ie class vairables/fields) using any of the
  //arguments passed into the explicit short class method syntax named constructor's paramters, ontop
  //of the class properties(ie class variables/fields) that would be initazlies by
  //the explicit execution of the short class method syntax named constructor of the extended declared type annotation parent class blueprint/temaplte of type object.

  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //implcity create short class method syntax named constructor with 2 paremeters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
  //+
  //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
  //implcitly execute short class method syntax named constructor of extended declared type annotation parent class blueprint/temaplte and pass in
  //in 2 arguments(ie the arguments passed into 2 parameters of implcitly created short
  //class method syntax named constructor of declared type annotation child child/sub class blueprint/tempalte)
  //because of extends keyword.
  //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
  //static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.

  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead
  //we do this by writing a short class method syntax with 1 parameter + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  //+
  //which has an explcit type annotation on the realParameter variables and it has an explicit/implcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public setDescription(newDescription: string): void {
    //encapsulation security check
    if (newDescription === "")
      throw new Error("Description cannot be be empty");
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected object property/class property(ie class variables/field) is accessible on the declared type annotatation parent/super class blueprint/template of type object and
    //the declared type annotation child/sub class blueprint/temaplte of type object but not accessible via the returned literal jsObjet (ie instance  jsObject)
    this._description = newDescription;
    //static type checkiing will show error if we return value of wrong type
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  //The short class method syntax is the same name with diffrent implementation of an inherited class method from the parent/super class blueprint/template
  //Therfore we are overriding that inherited class method
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the decalred type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public count(): string {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code protected prototypeObject(or its prototypeObjects) method/short class methos syntax is only accessible/executable
    //within the declared type annotaiton parent/super class blueprint/template of type object and declared type annotation
    //child/sub class blueprint/template of type obejct and not accessible/executable on the returned literal jsObject(ie instance jsObject)
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
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checking object pattern checking will show error if we can an undefinedPropertyOrMethod

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
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call un undefined property/method

//instanceJsObject/instanceAdminPlayeyObject.prototypeObjectObjectMethod(1 argument of type string)
instanceAdminPlayerObject1.setDescription(
  "This Class instantiates a instanceAdminPlayerObject."
);
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checkings object pattern checking could show error if we call undefinedPropertyOrMethod

//instanceJsObject/instanceAdminPlayeyObject.prototypeObjectPrototypeObjectObjectMethod()
console.log(instanceAdminPlayerObject1.speak());
//static type checkings object pattern checking will show error if we call an undefiendPropertyOrMethod on the instance jsObject

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
//so static type checking will show error if we store/inivitalize a value of wrong type in property/method
//add the ts syntax/code public keyword on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//to have a visual reminder it is accessible/executable inside the class blueprint/template
//as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
//so that static type checking's object pattern checking will not show error if we try to call an ts syntax/code public object propert/object method on the returned literal jsObject(ie instance jsObject).
//add the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//so that while we are in the ts file, it is only accessible/executable inside class blueprint/template and not via the returned literal jsObjet (ie instance  jsObject),
//meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
//add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
//to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file

//declare a type annotation PlayerClass blueprint/temaplte of type object using class keyword in js syntax/code
class Person {
  //instead of namedConstructorFunctionExpressionDefenition with 3 parameters,
  //we write an explcit short class method syntax named constructor with 3 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  //adds the private keyword in ts syntax/code on the created/initiazlied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //so that while we are in the ts file, it is only accessible/executable inside this specific declared type annotaiton class blueprint/template of type object and not via the returned literal jsObjet (ie instance  jsObject),
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
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }
}
//*************
//Testing area
//*************
//instanceJsObject/instancePersonObject = new Class(3 arguments) execution
const instancePersonObject1 = new Person("Arthur", "Shelby", 25);
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call un undefined property/method

//************************************************************************************************************************************
//Example 3
//************************************************************************************************************************************
//Usage notes -
//**************
//Recap of declaring type annotation interfacec of (only) type object
//********************************************************************
//1.we can decalre an type annotation interface with the ts syntax/code interface keyword to store
//the type annotation of type object.
//2.when declaring a type annotation interfaces of type object, the first letter should be capital.
//3.we ususally declare a type annotation interfaces of type object
//and use it to set a (reusable) explicit type annotation interface of type object
//similar to how we set (reusable) explicit type annotation of type anything, on
//the paramater variables with/without default value,return value and normal varaiables,that
//accept,return and initiazlie/store type object respectivly,thus allowing us to enforce/describe the
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
//4.There are 2 ways to extend an declared type annotation interface of type object -
//way 1 - a declared child/sub type annotation interface of type object can inherit properties/methods from multiple other preexisting decalred parent/super
//type annotation interfaces of type object(ie interfaces have multiple inheritance) using the ts syntax/code extends keyword.
//Imporant Note - we cannot override a property/method similar to how we override a public/protected object memebers/class memebers/key
//(object properties(class properties(ie class variables/fields))/object methods/class methods) inside a declared child/sub type annotation Class blueprint/template of type object.
//way 2 - we can re-open a pre-existing decalred type annotation interface of type object to add in extra properties/methods.
//5.declaring a type annotation interface of type object is the same as a
//declaring a type annotataion type alias of type objcet using the ts syntax/code type keyword
//and they can be used interchangebly.
//****************************************************************************************************************************************
//Relating declared type annotation interface of (only) type object to declared type annotation class blueprint/tempalte of type object
//****************************************************************************************************************************************
//6.We can use a decalred type annotation interfacce of (only) type object with a decalred child(sub)/parent(super) type annotation class blueprint/template of type object
//by setting is as explicit type annotation interfaces of type object on the declared child(sub)/parent(super) type annotation class blueprint/template of type object
//by using the ts syntax/code implements keyword, this allows us to enforce/describe the
//required shape/structure on/of the declared child(sub)/parent(super) type annotaiton class blueprint/template (ie class meets a particular contract).
//7.We can only write the required/optional properties/methods with type annotations for the public class memebers while inside the declared type annotation interface of type object.
//static type checkins object pattern checking shows error if a required public class memeber is missing
//in the declared type annotation class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra class memebers)
//static type checking will show error if we try to store/initizlie a value of wrong type inside the required public class members
//in the decalred type annotation class blueprint/template of type object
//8.We cannot write properties/methods with type annotation for the static class members while inside the declared type annotation interface of type object
//static type checkins object pattern checking shows error if a required public class memeber is missing
//in the declared type annotation class blueprint/template of type object
//9.A required method written in the explcit type annotaion interafce of type object implemented
//on a declared child/sub type annotation class blueprint/template of type object can be satisfied by the public object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//inhertied from a declared parent/super type annotation class blueprint/temaplte of type object
/*************/
//Comparisons
/*************/
//10.Usually if a required object property/object method with its type annotation in the declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and the explcit type annotation interface of type object was set a varialbe,paramter or return value that stores/initializes,
//accepts and returns type object.
//static type checkings object patttern checking will show error if we try to rewrite the value of the object property/method that had the ts syntax/code readonly keyword
//but in this case of implemeting this explcit type annotation interface of type object on a decalred type annotaiton class blueprint/template of type object
//,we completly ignore the ts syntax/code readonly keyword that was on the object properties/methods in the
//the decalred type annotation interface of type of type object.
//10.Usually if an explcit type annotation interface of type object was set a varialbe,paramter or return value that stores/initializes,
//accepts and returns type object.
//static type checkings object pattern checking would also show error if we add extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject
//but in this case of implemeting this explcit type annotation interface of type object on a decalred type annotaiton class blueprint/template of type object
//static type checkings object pattern checking does not show error if we add extra public/private/protected class memebers on
//declared type annotaiton class blueprint/template.

//declaring the type annotation ColorfulObjectInterface of type object
interface ColorfulObjectInterface {
  //explicit type annotation on required propertie that initializes/stores type string
  color: string;
}

//declaring the type annotation PrintableObjectInterface of type object
interface PrintableObjectInterface {
  //explicit type annotation on required method that initiazlies/store type function  - using option 2
  //(option 2 - based on short method creation js code/syntax ((only)non arrow version) and
  //variable stored anonymous non arrow function expression defenition js code/syntax),
  //it accepts no fakeParameter variables and it has an explcit type annotation on return value
  print(): void;
}

//declare type annotation PlayerClass blueprint/temaplte of type object using class keyword in js syntax/code
//that implements explicit type annotation ColorfulObjectInterface of type object
//+
//static type checkins object pattern checking shows error if a required public class memeber is missing
//in the declared type annotation class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra class memebers)
//static type checking will show error if we try to store/initizlie a value of wrong type inside the required public class members
//in the decalred type annotation class blueprint/template of type object
class Bike implements ColorfulObjectInterface {
  //instead of namedConstructorFunctionExpressionDefenition with 1 parameters,
  //we write an explcit short class method syntax named constructor with 1 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public color: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }
}

//declare type annotation PlayerClass blueprint/temaplte of type object using class keyword in js syntax/code
//that implemnts explicit type annotation ColorfulObjectInterface of type object
//and explicit type annotation PrintableObjectInterface of type object
//+
//static type checkins object pattern checking shows error if a required public class memeber is missing
//in the declared type annotation class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra properties/methods)
//static type checking will show error if we try to store/initizlie a value of wrong type inside the required public class members
//in the decalred type annotation class blueprint/template.
class Jacket implements ColorfulObjectInterface, PrintableObjectInterface {
  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public brand: string, public color: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the decalred type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public print(): void {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    console.log(`${this.color} ${this.brand} jacket`);
    //static type checkiing will show error if we return value of wrong type
  }
}
//*************
//Testing area
//*************
//instanceJsObject/instanceBikeObject = new Class(1 arguments) execution
const instanceBikeObject1 = new Bike("red");
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call un undefined property/method

//instanceJsObject/instanceJacketObject = new Class(2 arguments) execution
const instanceJacketObject1 = new Jacket("cd project red", "yellow");
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call un undefined property/method

//************************************************************************************************************************************
//Example 3
//************************************************************************************************************************************
//Usage notes -
//*************
//1.we can decalre a type annotation parent/super astract class blueprint/template of type object
//using the abstract keyword in ts syntax/code along with the class keyword in js syntax/code
//2.A declared type annotation parent/super abstract class blueprint/temaplte of type object cannot be instantiated by executing the
//declared type annotation parent/super abstract class blueprint/temaplte with
//the new keyword from js syntax/code next to it.
//static type checking's class instantiation checking will show error if we try to instantiate a decalred type annotation parent/super abstract class blueprint/temaplte
//of type object
//3.A declared type annotation parent/super abstract class blueprint/template is a hybrid that is a
//combination of a declared type annotaion interface of type object and a declared type annotation parent/super concrete class blueprint/temaplte of type object
//4.When a declared type annotation child/sub concrete class blueprint/template of type object
//extends a decalred type annotation parent/super abstract class blueprint/tempalte of type object
//using the extends keyword in js sytanx/code.
//It does 2 things -
//One - it will inherit the public/protected object memebers/class memebers/key(object properties(class properties(ie class variables/fields))/object methods/class methods)
//from the decalred type annotation parent/super abstract class blueprint/temaplte of type object.
//Two - It allows us to enforce/describe the required shape/structure on/of the
//declared child(sub) type annotaiton class blueprint/template (ie class meets a particular contract).
//This is done by writing public/protected class memeber with an explicit type annotations and abstract keyword in ts syntax/code
//(ie no implementation) in the declared type annotation abstract (parent/super) class blueprint/temaplte of type object
//for the public/protected class memeber(ie implementation) inside the declared type annotaiton child/sub class blueprint/template of type object that extends it.
//static type checkings object pattern checking shows error if a public/protected class memeber(ie implementation) is missing
//in the declared type annotation child/sub class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra public/protected/private class memebers(ie implementations))
//static type checking will show error if we try to store/initizlie a value of wrong type inside the public/protected class members(ie implementation)
//in the decalred type annotation child/sub class blueprint/template of type object.
//static type checkings access modifier check shows error if we use the wrong access modifer on the class memeber(ie implmentation)
///but a protected access modifer on a abstract class memeber(ie no implementation) can be fullfilled by a class memeber(ie implementation) with either a public or protected access modifier
//inside the declared type annotation child/sub class blueprint/template,therefore static type checkings access modifier check does
//not show error.
//5.we cannot write the private access modifer with an abstract class memeber
//6.we cannot write the static keyword with an abstract class memeber
/*************/
//Comparisons
/*************/
//7.Usually if a required object property/object method with its type annotation inside a declared type annotation interafce of type object had
//a ts sytanx/keyword readonly keywoward and the explcit type annotation interface of type object was set on a varialbe,paramter or return value that stores/initializes,
//accepts and returns type object.
//static type checkings object patttern checking will show error if we try to rewrite the value of the object property/method that had the ts syntax/code readonly keyword
//but similar to how when implemeting this explcit type annotation interface of type object on a decalred type annotaiton class blueprint/template of type object
//,we completly ignore the ts syntax/code readonly keyword that was on the object properties/methods in the
//the decalred type annotation interface of type of type object.
//In this case of extending a decalred type annotation parent/super abstract class blueprint/template of type object with an abstract
//class memeber with a ts syntax/code readonly keyword on a decalred type annotation child/sub class blueprint/tempalte of type object
//,we completly ignore the ts syntax/code readonly keyword that was on the abstract class memeber in the
//the decalred type annotation super/parent abstract class blueprint/template of type object
//8.Usually if an explcit type annotation interface of type object was set a varialbe,paramter or return value that stores/initializes,
//accepts and returns type object.
//static type checkings object pattern checking would also show error if we add extra object properties/object methods in the
//accepted,returned,stored/initazlied literal jsObject
//but similar to how when implemeting this explcit type annotation interface of type object on a decalred type annotaiton class blueprint/template of type object
//static type checkings object pattern checking does not show error if we add extra public/private/protected class memebers on
//declared type annotaiton class blueprint/template.
//In this case of extending a decalred type annotation parent/super abstract class blueprint/temaplte of type boject on a
//decalred type annotation child/sub class blueprint/template of type object.
//static type checking object pattern checking does not show error if we add extra public/private/protected class memebers
//on the declared type annotaiton child/sub class blueprint/template.

//declare type annotation parent/super abstract EmployeeClass blueprint/temaplte of type object using abstract keyword in ts syanx/code and class keyword in js syntax/code
abstract class Empoloyee {
  //explcit type annotation on public abstract class property that inittializes/stores type boolean(ie no implementation)
  public abstract isHired: boolean;

  //instead of namedConstructorFunctionExpressionDefenition with 2 parameters,
  //we write an explcit short class method syntax named constructor with 2 parameters
  //+
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //to have a visual reminder it is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and declared type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  constructor(public first: string, public last: string) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }

  //explicit type annotation on public abstract class method that initiazlies/store type function - using option 2 (ie no implementation)
  //(option 2 - based on short method creation js code/syntax ((only)non arrow version) and
  //variable stored anonymous non arrow function expression defenition js code/syntax),
  //it accepts no fakeParameter variables and it has an explcit type annotation on return value
  public abstract getAnnualSalary(): number;

  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the decalred type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public greet(): void {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    console.log(`Hello, ${this.first} ${this.last}`);
    //static type checkiing will show error if we return value of wrong type
  }
}

//declare type annotation child/sub FullTimeEmployeeClass blueprint/temaplte of type object using class keyword in js syntax/code then
//extending it with declared type annotation parent/super abstract EmployeeClass blueprint/template of type object with the extends keyword in js syntax/code
//+
//static type checkings object pattern checking shows error if a public/protected class memeber(ie implementation) is missing
//in the declared type annotation child/sub class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra public/protected/private class memebers(ie implementations))
//static type checking will show error if we try to store/initizlie a value of wrong type inside the public/protected class members(ie implementation)
//in the decalred type annotation child/sub class blueprint/template of type object.
//static type checkings access modifier check shows error if we use the wrong access modifer on the class memeber(ie implmentation)
///but a protected access modifer on a abstract class memeber(ie no implementation) can be fullfilled by a class memeber(ie implementation) with either a public or protected access modifier
//inside the declared type annotation child/sub class blueprint/template,therefore static type checkings access modifier check does
//not show error.
class FullTimeEmployee extends Empoloyee {
  //implmentation of public abstract class propertie
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
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //so that while we are in the ts file, it is only accessible/executable inside this specific declared type annotaiton class blueprint/template of type object and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
  //add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file
  constructor(first: string, last: string, private _salary: number) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //explictly execute short class method syntax named constructor of extending declared type annotation parent/super class blueprint/temaplte of type object
    //using super keyword in js syntax/code and pass in 2 arguments(ie the arguments passed into 2 parameters of explicitly created short
    //class method syntax named constructor of declared type annotation child/sub class blueprint/tempalte of type object)
    super(first, last);
    //static type checking will show error if we pass arguments of wrong type into realParameter
    //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }

  //implementation of public abstract class method
  //+
  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the decalred type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  getAnnualSalary(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc class blueprint/template
    //itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this._salary;
    //static type checkiing will show error if we return value of wrong type
  }
}

//declare type annotation child/sub FullTimeEmployeeClass blueprint/temaplte of type object using class keyword in js syntax/code then
//extending it with declared type annotation parent/super abstract EmployeeClass blueprint/template of type object with the extends keyword in jst syntax/code
//+
//static type checkings object pattern checking shows error if a public/protected class memeber(ie implementation) is missing
//in the declared type annotation child/sub class blueprint/template of type object
//(Note - it ignores the set readonly keyword and does not show error for adding extra public/protected/private class memebers(ie implementations))
//static type checking will show error if we try to store/initizlie a value of wrong type inside the public/protected class members(ie implementation)
//in the decalred type annotation child/sub class blueprint/template of type object.
//static type checkings access modifier check shows error if we use the wrong access modifer on the class memeber(ie implmentation)
///but a protected access modifer on a abstract class memeber(ie no implementation) can be fullfilled by a class memeber(ie implementation) with either a public or protected access modifier
//inside the declared type annotation child/sub class blueprint/template,therefore static type checkings access modifier check does
//not show error.
class PartTimeEmployee extends Empoloyee {
  //implmentation of public abstract class propertie
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
  //which has an explcit type annotation on the realParameter variables and it gets set an invisible
  //explcit type annotation class blueprint/tempalte of type object set on its implcit return value (ie literal jsObject/instance jsObject)
  //that we cannot explicitly set
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //static type checking will show error if we store/initialize value of wrong type in properties/methods
  //static type checkings object pattern checking will show error if we add extra properties/methods
  //or if required properties/methods are missing or if we rewrite a readonly property/method.
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
  //so that while we are in the ts file, it is only accessible/executable inside this specific declared type annotaiton class blueprint/template of type object and not via the returned literal jsObjet (ie instance  jsObject),
  //meaning static type checking's object pattern checking will show error if we try to call an ts syntax/code private propert/method on the returned literal jsObject(ie instance jsObject).
  //add the _ charecter as the first charecter of created/initialzied object memebers/class memeber(not class methods)/keys(object properties/class properties(ie class variables/fields)/object method)
  //to have a visual reminder in js file of how it had a ts syntax/code private keyword while in the ts file
  constructor(
    first: string,
    last: string,
    private _hourlyRate: number,
    private _hoursWorked: number
  ) {
    //implcitly creating a literal jsObject ie(the instance jsObject) and referencing it in a variable
    //explictly execute short class method syntax named constructor of extending declared type annotation parent/super class blueprint/temaplte of type object
    //using super keyword in js syntax/code and pass in 2 arguments(ie the arguments passed into 2 parameters of explicitly created short
    //class method syntax named constructor of declared type annotation child/sub class blueprint/tempalte of type object)
    super(first, last);
    //static type checking will show error if we pass arguments of wrong type into realParameter
    //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
    //implicitly return the created literal jsObject(ie instance jsObject) referenced though a variable
    //static type checkiing will show error if we return value of wrong type
    //static type checking will show error if we store/initialize value of wrong type in properties/methods
    //static type checkings object pattern checking will show error if we add extra properties/methods
    //or if required properties/methods are missing or if we rewrite a readonly property/method.
  }

  //implementation of public abstract class method
  //+
  //normal js code/syntax version of object accessor class method
  //creating/initiazlizing reusabled/common copie of prototypeObject(or its prototypeObjects) object method on all created/returned literal jsObject ie(the instance jsObject)
  //by adding it as a unique long syntax object method on the prototypeObject(or its prototypeObjects) instead.
  //we do this by writing a short class method syntax + invisible explicit type annotation on method of type function(ie static type checking will show error if we initialize/store value of wrong type in class method)
  // +
  //which has 0 realParameter variables and it has an explcit type annotation on return value
  //so that static type checking will show error if we pass arguments of wrong type into realParamter
  //and static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
  //and static type checkiing will show error if we return value of wrong type
  //adding the public keyword in ts syntax/code to the written short class method syntax
  //to have a visual reminder to let the user know that the reusabled/common copie of prototypeObject(or its prototypeObjects)
  //object method on all created/returned literal jsObject ie(the instance jsObject)
  //is accessible/executable inside the declared type annotation parent/super class blueprint/template of type object and the decalred type annotation child/sub class blueprint/template
  //of type object as well as the returned literal jsObjet (ie instance  jsObject), which is the default behaviour.
  public getAnnualSalary(): number {
    //this keyword uses execution scope but instead of windowObject it refer to the implcitly created/returned literal jsOjbect ie(instance jsObject)
    //In this case it refers specifically to the implicitly created literal jsObject ie(instance jsObject)
    //as a ts syntax/code private object property/class property(ie class variables/field) is only accessible within this specifc class blueprint/template
    //itself and not accessible via the returned literal jsObjet (ie instance  jsObject)
    return this._hourlyRate * this._hoursWorked;
    //static type checkiing will show error if we return value of wrong type
  }
}

//*************
//Testing area
//*************
//instanceJsObject/instanceEmployeeObject = new Class(3 arguments) execution
// const instanceEmployeeObject1 = new Empoloyee("Karen", "Gillian");
//static type checking's class instantiation checking will show error if we try to instantiate a decalred type annotation parent/super abstract class blueprint/temaplte
//of type object

//instanceJsObject/instanceFullTimeEmployeeObject = new Class(3 arguments) execution
const instanceFullTimeEmployeeObject1 = new FullTimeEmployee(
  "Arthur",
  "Shelby",
  120000
);
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call an undefined property/method

//instanceJsObject/instanceFullTimeEmployeeObject.prototypeObjectObjectMethod(0 argument)
console.dir(instanceFullTimeEmployeeObject1.getAnnualSalary());
//static type checkings object pattern checking will show error if we call an undefined property/method on the instance jsObject

//instanceJsObject/instancePartTimeEmployeeObject = new Class(4 arguments) execution
const instacePartTimeEmployeeObject = new PartTimeEmployee(
  "James",
  "Dean",
  25,
  1100
);
//static type checking will show error if we pass arguments of wrong type into paramter
//static type checking paramter pattern checking could show error if we add extra arguments or remove required arguemnts
//static type checking will show error if we store/initialize value of wrong type in variable or properties/methods
//static type checkings object pattern checking will show error if we add extra properties/methods
//or if required properties/methods are missing or if we rewrite a readonly property/method.
//static type checkings object pattern checking will show error if we call an undefined property/method on the instance jsObject

//instanceJsObject/instancePartTimeEmployeeObject.prototypeObjectObjectMethod(0 argument)
console.dir(instacePartTimeEmployeeObject.getAnnualSalary());
//static type checkings object pattern checking will show error if we call an undefined property/method on the instance jsObject
