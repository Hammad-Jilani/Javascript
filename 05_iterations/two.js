const object = {
    js : "javascript",
    cpp:"C++",
    rb:"Ruby",
}
for (const key in object) {
    // console.log(key);
    console.log(`${key} is extension of ${object[key]}`);
}
const programming = ["js","rb","cpp","java","py"];
for (const key in programming) {
    console.log(programming[key]);
}