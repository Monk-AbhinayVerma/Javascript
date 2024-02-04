// const user = {
//     username:"Abhinay",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// console.log(this);

// Browser ke andar global object jo hai wo window object hai


// function chai(){
//     let username = "hitesh"
//     // console.log(this.username); - undefined
// }

// chai()

// ----------Arrow Function ------------------------
// const chai = () => {
//     let username = "abhinay"
//     console.log(this.username)
// }

// chai()


//---------------Implicit recturn (without using return keyword)---------------------

// const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(3,4))

// For Objects {} is must

// Immediately Invoked Function Expression 
//----------named iffe-------
(function chai(){
    console.log(`Hello`)
})();
//--------simple iffe -------
((name) => {
    console.log(`Hello ${name}`);
})('Abhinay')