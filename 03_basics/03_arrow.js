const user = {
    username:"Hammad Ali",
    price : 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Syed Hammad";
// user.welcomeMessage();

// console.log(this);

// function  newFunction(){
//     let username = "Jilani";
//     console.log(this.username);
// }
// newFunction();

// const chai = function(){
//     let username = "Jilani";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Jilani";
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// const addTwo = (num1,num2) => (num1 + num2);
const addTwo = (num1,num2) => ({username:'hammad'});
console.log(addTwo(2,3));