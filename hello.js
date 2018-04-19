//console.log("Hello World");

/*
var test;
console.log("test =", test, "test is a", typeof test);
test = true;
console.log("test =", test, "test is a", typeof test);
test += 5;
console.log("test =", test, "test is a", typeof test);
test += "test";
console.log("test =", test, "test is a", typeof test);
*/

// OBJECTS //////////////////////////////////////////////////////////////
/*
var person = {}; //An empty object
person.name = "Joe";
person.surname = "Soap";
person.age = "20";
person.isMale = true;
person.fullname = person.name + " " + person.surname; //we can access the
//variables using their names
console.log(person);
*/

/*
// JSON notation (JavaScript Object Notation)
var anObject = { //objects are declared using curly braces
    aNumber: 4, //colons separate keys and values
    aBool: false, //commas separate members
    aString: "thread",
    anotherString: 'rope',
    anArray: [4, false, "thread", 'rope'] //remeber that arrays and objects
    //can be nested
    }
console.log(anObject)
*/  

// FUNCTIONS /////////////////////////////////////////////////////////////
/*

var someFunction = function (someArgument, anotherArgument) {
    //do stuff
    return someArgument + anotherArgument;
}

var copyOfFunction = someFunction; //Javascript assigns by reference
var anotherFunction = function(aFunction){
return aFunction("Hello ", "World"); //Calling the passed in function
}
var result = anotherFunction(copyOfFunction);
console.log(result);

*/
// ANONYMOUS FUNNCTIONS //////////////////////////////////////////////////
/*
var wrapperFunction = function(aFunction)
{
    return aFunction(10);
}
//using a delta function
var resDelta = wrapperFunction(function(max)
{
    var j = 0;
    for (var i = 0; i < max; i++) 
    {
        j += i;
    }
    return j;
}
);
console.log(resDelta);

var resArrow = wrapperFunction((max) => {
    var j = 0;
    for (var i = 0; i < max; i++) 
    {
        j += i;
    }
    return j;
});
console.log(resArrow);
*/

// ASYNCHRONOUS FUNNCTIONS AND CALLBACKS ///////////////////////////////////

/* 
function sleep( sleepDuration ){ // A function that blocks
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ }
}
  
console.log("Starting");
sleep(10000);
console.log("Done, doing other things");
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("Done with other things");
*/

/*
console.log("Starting");
setTimeout(() => {
    console.log("Done Waiting");
}, 10000);

console.log("Done doing other things");
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("Done with other things");
*/

// NPM AND MODULES //////////////////////////////////////////////////
