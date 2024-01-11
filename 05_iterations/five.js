const coding = ['js','rb','py','java','cpp'];

// const value = coding.forEach((item)=>{
//     console.log(item);
// });
// console.log(value);

const nums = [1,2,3,4,5,6,7,8,9];
// important to return if braces used
const newNums=nums.filter((num)=> {
    return num > 4
});
// console.log(newNums);


// coding.forEach((item)=>{
//     console.log(item);
// })
// coding.forEach((item,index,array)=>{
//     console.log(item,index,array);
// })
// array of objects
const myCoding = [
    {
        languageName:"Java",
        languageFileExtension:"java"
    }
    ,{
        languageName:"C++",
        languageFileExtension:"cpp"
    }
    ,{
        languageName:"python",
        languageFileExtension:"py"
    }
]
// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })


const arrayOfPhones = [
    {
        model:"c25",company:"Samsung",price:22000
    },
    {
        model:"k28 lite",company:"Realme",price:23910
    },
    {
        model:"F12s",company:"Oppo",price:20000
    },
    {
        model:"s2",company:"Samsung",price:31000
    }
];
// can also be done with help of for each loop
let select = arrayOfPhones.filter((item) => item.company === "Samsung");
// console.log(select);
select = arrayOfPhones.filter((item)=>{return item.price<23000 && item.company=== "Samsung"});
console.log(select);