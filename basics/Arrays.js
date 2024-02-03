//Array makes shallow copy which means that they are referenced (heap)

// const arr = [1,2,3,4]
// console.log(arr)

const arr = new Array(1,2,3,4)
// console.log(arr);


// Array Methods

// arr.push(8) // push into the end of array

// arr.pop() // pop last inserted element
// console.log(arr)
// arr.unshift(9)//insert in front of array
// console.log(arr)

// const newArr = arr.join()
// console.log(newArr)//convert to string

const a1 = arr.slice(1,3)

console.log(a1)
console.log(arr)
const a2 = arr.splice(1,3)
console.log(a2)
console.log(arr)

// Splice removes the element from original array while slice doesn't

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // can't convert to array from object 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// creating array of several values