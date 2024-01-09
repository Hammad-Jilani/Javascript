const mySym = Symbol("key1");
const obj = {
    name : "Jilani",
    age:15,
    [mySym]: "myKey1",
    location:"Karachi",
    email:"hammad@google.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"],
};
// console.log(obj.email);
// console.log(obj["email"]);
// console.log(obj[mySym]);
// obj.email = "hjilani15@gmail.com";
// Object.freeze(obj);
// obj["email"] = "jilani@microsoft.com"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello dunya");
}
obj.greetingTwo = function(){
    console.log(`Hello world, ${this.name}`)
}
console.log(obj.greeting());
console.log(obj.greetingTwo());