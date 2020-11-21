//template literals
var name="Divyank";
var age=21;
console.log(`name=${name} age=${age}`);

//Destructuring Objects

const obj={
    firstname:"Divyank",
    lastname:"Mishra"
}

const {firstname:fn,lastname:ln}=obj;

console.log(`${fn} ${ln}`);

//Destructuring arrays

let [firstname,middlename,lastname]=["Sachin","Ramesh","Tendulkar"];

firstname="Sahil";

console.log(`${firstname} ${middlename} ${lastname}`);

//Object literals

function address(city,state){
    const newaddress={city,state};
    console.log(newaddress)
}

address("Mumbai","Maharashtra");

//for of loop

let fullname=["Rohan","Rohit","Kunal"];

for(const name of fullname){
    console.log(name);
}

//spread operator
let example1=[1,2,3,4,5];
let example2=[...example1];

console.log(example2)

//rest operator

function add(...nums){
    console.log(nums);
}

add(1,2,3,4);


//arrow functions
function add(...nums){
    let total=nums.reduce((x,y)=>x*y);
    console.log(total)
}

add(1,2,3,4);

//default params



function addarray(nums=[]){
    let total=0;
    nums.forEach((e)=>total+=e);
    console.log(total)
}

addarray();


//includes


let array=[1,2,3];
console.log(array.includes(0));

//let and const

const x=[];
//x="" not allowed
//x.push(5) allowed

let y=10;
y=5;

//import export in js
//export const x=[1,2];//suppose this is in example.js
//import {x} from 'example.js'

//padStart and padEnd

let e="Divyank";
console.log(e.padEnd(10,"a"));
console.log(e.padStart(10,"a"));


//async await

function resolveAfter30Sec(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        },2000);
    })

}

async function getAsyncResults(){
    var results=await resolveAfter30Sec();
    console.log(results);
}

getAsyncResults();


//set

const exampleset=new Set([1,1,2,2,2]);

exampleset.add(5);
console.log(exampleset.has(5));
exampleset.clear();

console.log(exampleset.size);