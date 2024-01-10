const userEmail = "Hammad@gmail.com"
if(userEmail){
    console.log("User has the email address");
}
else{
    console.log("User donot have email address");
}

// falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value
// "0",'false'," ",[],{},function(){}
const emptyObject = {};
if( Object.keys(emptyObject).length == 0){
    console.log("Object is empty");
}
// Nullish Coalescing Operator (??) : null/undefined
let var1;
// val1 = 5??10;
// val1 = null??10;
// val1 = undefined??15;
// val1 = null ?? 10 ?? 20;
// console.log(val1);

// Terniary Operator
// condition ? true : false;
const iceTeaPrice  = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
