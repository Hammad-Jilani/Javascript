const array = ["Pakistan","India","Afghanistan","Iran"];
let myObject = {name:"Hammad Ali",age:18,location:"Karachi"};
const Function = function(){
    console.log("Hello world");
}
// console.log(typeof array);
// console.log(typeof myObject);
// console.log(typeof Function);
// =====================xxxxxxxxxxxxxxxxxxx=============xxxxxxxxxx
// Stack(Primitive)=> pass by copy and heap(Non-primitive) => pass by reference 
let name1 = "Hammad";
let name2 = name1;
name2 = "Jilani";
console.log(name1);
console.log(name2);

let animal ={name:"tom", age:"12"};
let anotherAnimal = animal;
anotherAnimal.age = 101;
console.log(anotherAnimal.age);
console.log(animal.age);