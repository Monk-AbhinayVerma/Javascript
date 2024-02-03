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