//Function Declaration 
/// Hoisted
// function sayHi(){
//     return console.log("he0")
// }



// Function Expression 
// Anon , not named
//Not hoisted 
// Adv => Passed around and use it 
//ex :=  var sayHi = function (){
//     return console.log("hi")
// }
// self-reference
//more debuggable stack trace
//more self-documenting code


// function add(){
//     sayHi()
// }

var sayHi = function(){
    return console.log("hi0")
}
// Arrow Functions 
var sayHi = ()=>{
    return console.log("hiii ")
}

//Arrow function - in single st , u dont have to write return
var sayHi = ()=> console.log("hiii with arrow functions ")


// precedence
//(Named) function declaration
// function sayHello(){}
// >
//
// Named function expression ( var namedFn = function namedFn(){ return console.log("named func exp")} )
// >
//Annonymous funciton expression
//var s = function (){ return console.log("hello")}

