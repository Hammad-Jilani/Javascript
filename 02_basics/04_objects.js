const facebookUser = {};

facebookUser.id = "abcd1234";
facebookUser.name = "abcd";
facebookUser.isLoggedin = false;

console.log(facebookUser); 
const regularUser = {
    email : "someone@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Syed",
            lastName:"Hammad"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);
const object1 = {1:"a",2:"b"};
const object2 = {3:"c",4:"d"};
const object3 = {5:"e",6:"f"};
// const object4 = Object.assign({},object1,object2,object3);

const object4 = {...object1,...object2,...object3};
console.log(object4);

const user = [
    {
        id:590,
        email:"hammasd@gmail.com"
    },
    {
        id:590,
        email:"hammasd@gmail.com"
    },
    {
        id:590,
        email:"hammasd@gmail.com"
    }
]
// console.log(user[1]);

console.log(facebookUser);
console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser));

console.log(facebookUser.hasOwnProperty('email'));