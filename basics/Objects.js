// //symbol declaration
// const mySym = Symbol("Key1")

// //Object Literals
// const obj = {
//     Name: "abhinay",
//     Age : 25,
//     isLoggedIn :false,
//     isHappy: true,
//     "Hello": "world",
//     [mySym]:"keys"
// }

// //accessing objects
// // console.log(obj.Name);
// console.log(obj.Hello);
// // console.log(obj.mySym) //It gives undefined as output since mySym is an symbol

// // //To access symbol value
// // console.log(obj[mySym]);

// obj.greeting = function(){
//     console.log("Hello JS user");
// }
// obj.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.Name}`);
// }

// obj.greeting();
// obj.greetingTwo();

//Objects Singleton through COnstructor

const tinder = new Object()
tinder.id = 123
tinder.name = "Dhanraj"
tinder.isLoggedIn  = false
// console.log(tinder);

const regUser = {
    fullName : {
        userFullName:{
            first:"Ajay",
            last:"Gupta"
        }
    }
}
// console.log(regUser.fullName.userFullName.first);

const obj1 = {1:"a",2:"b"}
const obj2  = {3:"a",4:"b"}

const obj3 = {obj1,obj2}
// console.log(obj3); - //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({},obj1, obj2)//{} - target, obj1, obj2 - source
// console.log(obj4); - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const obj5 = {...obj1, ...obj2}

// console.log(obj5); - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const course = {
    courseName : "JS",
    price: 999
}

// Destructuring of objects
const {courseName : cn} = course
console.log(cn);

// API provide objects or array of objects