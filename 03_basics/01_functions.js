console.log();

function myName(){
    console.log("Hammad Ali Jilani");
}
// myName();

function sum(num1,num2){
    return num1+num2;
}
// console.log(`Sum is ${sum(9,1)}`);

function printName(username = "sam"){
    if(username==undefined ){
        return `Error`;
    }
    if(!username){
        return `Error`;
    }
    return `${username} has logged in`;
}
// console.log(printName());

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(2));

const user = {
    username:"hammad",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
// Another way is as following
handleObject({
    username:"Hammad Ali",
    price:499
})

const array = [12,3,4,5,6,7,8,9];

function returnSecondValue(myArray){
    return myArray[1];
}
// console.log(returnSecondValue(array));

// Allowed
console.log(sumNumberOne(3));
function sumNumberOne(n1){
    return n1+1;
}
// Not allowed
// console.log(variable(4));
const variable = function(n1){
    return n1+2;
}
console.log(variable(2));