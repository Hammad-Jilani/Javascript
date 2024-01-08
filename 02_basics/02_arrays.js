const marvelHeros = ["thor","Ironman","spiderman"];
const dcHeros = ["superman","batman","flash"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);
const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// we can also use the following way to concat array
const allNewHeros = [...marvelHeros,...dcHeros];
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = anotherArray.flat(Infinity);

console.log(Array.isArray("Hammad"));
console.log(Array.from("Hammad"));

console.log(Array.from({name:"Jilani"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));