const myNumber = [1,2,3,4,5,6,7,8,9];

// can also be done by for each loop
const newNums = myNumber.map( (num) => num+10);
console.log(newNums);

// Agr ek list ka total kerna hai tu use reduce method or can also be done using forEach loop
const total = [1,2,3];
const totalNew  = myNumber.reduce(function(acc,currValue){
    console.log(`acc : ${acc} , current value:${currValue}`);
    return acc+currValue;
},0);
const newTotal = total.reduce((acc,currValue) => acc+currValue, 0)