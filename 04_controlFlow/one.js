// if
const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`User power ${power}`);
}
let userLoggedin = true;
let userLoggedinUsingEmail = true;
let userLoggedinUsingGoogleAccount = true;
if(userLoggedinUsingEmail && userLoggedin){
    console.log("The user is online");
}