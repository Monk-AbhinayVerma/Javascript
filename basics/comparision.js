// console.log("2">1) - true

// console.log("02" > 1) - true

// console.log(null>0); - false
// console.log(nul == 0); - false
// console.log(null>=0); - true

// == && other comparision operator work differently , hence false for == and true for >=
// console.log(undefined  == 0); - false
// console.log(undefined > 0); - false
// console.log(undefined >= 0); - false
// ===   : strict check

// console.log("3" === 3); - false

/*

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

Datatypes - Primitive and Non Primitive data types (Based on how data is stored in memory)
Primitive : (call by value - Copy of datatype is given)
 1. String
 2. Number
 3. Boolean
 4. Null
 5. undefined
 6. Symbol
 7. BigInt

Non-Primitive Datatype (Reference type - memory refernece)
Array, Objects, functions

*/

// symbol - unique value

const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id == id2); - false

// Array
const heroes = ['Shaktimaan', 'Junior-G', 'Naagraj']

//Objects
let myObj = {
    Name: 'Abhinay',
    age: 23
}

//typeof null - object

//function
const myfunction = function(){
    console.log("hello world");
}
/*
typeof val 	         Result
Undefined 	        "undefined"
Null 	            "object"
Boolean 	        "boolean"
Number 	            "number"
String 	            "string"
Object(native and does not implement [[Call]]) 	"object"
Object(native or host and does implement [[Call]]) 	"function"
Object(host and does not implement [[Call]]) 	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/