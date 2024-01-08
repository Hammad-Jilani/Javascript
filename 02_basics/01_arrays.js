const array = [0 , 1 , 2 , 3 , 4 , 5];
console.log(array[0]);

array.push(6);
array.push(7);
console.log(array);

array.unshift(8);
// add element in the first place of the array
array.shift();
// removes first element of the array

// console.log(array.includes(9));
// console.log(array.indexOf(3));

// console.log(array);

const newArray = array.join();
// console.log(array);
// console.log(newArray);

let newArray1 = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let newArray2 = newArray1.slice(0,3);
// console.log(newArray2);
// console.log(newArray1);

// Splice makes changes to the original array as well
let array3 = newArray1.splice(2,2,"Sunday");
console.log(array3);
console.log(newArray1);