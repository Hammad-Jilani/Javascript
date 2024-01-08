const name = "Hammad";
const repoCount = 50;

// console.log(`My name is ${name}, and I have ${repoCount} repositories`);

const newName = new String("Hammad Jilani");
console.log(newName[1]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.indexOf('t'));
const newString = newName.substring(0,4);
console.log(`Value of new String is ${newString}`);
const anotherString = newName.slice(0,4);
console.log(`VAlue of anotherString is ${anotherString}`);
const newString2 = "         Hammad           ";
console.log(newString2);
console.log(newString2.trim());

const address = "https://youtube%102.com-hammad-ali";
const newAddress = address.replace("%102","");
console.log(newAddress);

console.log(address.includes("https"));

console.log(address.split("-"));
