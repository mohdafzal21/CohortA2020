//block scopes 
for (var i = 0; i < 10; i++) {
	console.log(i);
}
/////***************/ */

var teacher = 'tom';
{
	var teacher = 'plant';
	console.log(teacher);
}
console.log(teacher);
