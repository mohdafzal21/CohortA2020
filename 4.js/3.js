// ******************//
// Function Scoping
var teacher = 'tom';
function anotherTeacher() {
	var teacher = 'plant';
	console.log("inside the fn",teacher);
}
anotherTeacher();
console.log("outside", teacher);

///// Read 1-4 Eloquent JS //
// IIfe - Immediately invoked function expression
// solving the problem of hoisting nd not exposing data to the dom/global object
//readable Code
var teacher = 'tom0'
(function anotherTeacher(){
   var teacher = 'plant'
   console.log(teacher)
})()
///*************************************************** */
var teacher = 'tom'
(function anotherTeacher(teacher){
    console.log(teacher)
 })('plant')
 
// /////////////
 var a = 2;

(function foo() {
	var a = 3;
	console.log(a);
})();

console.log(a);