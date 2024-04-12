let jsonObj = {
    name:"Syed Hammad Ali Jilani",
    age:6,
    friend:"Talha Farooq",
    food:'biryani'
};
console.log(jsonObj);
let JSON_OBJECT = JSON.stringify(jsonObj);
console.log(JSON_OBJECT);
JSON_OBJECT = JSON_OBJECT.replace('biryani','sabji');
console.log(JSON_OBJECT);


let newJsonObj = JSON.parse(JSON_OBJECT);
console.log(newJsonObj);