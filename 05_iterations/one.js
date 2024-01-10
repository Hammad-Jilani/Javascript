// for of
const array = [1,2,3,4,5,6,7,8];
for (const number of array) {
    // console.log(number);
}
const map = new Map();
map.set("In","India");
map.set("US","United States of America");
map.set("FR","France");
map.set("In","India");

// console.log(map);
for (const [key,value] of map) {
    console.log(key,"-",value);
}
const object = {
    game1 : "GTA",
    game2 : "Spiderman"
}
for (const [key,value] of object) {
    console.log(key,"-",value);
}