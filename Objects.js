//assign --> assign or copies one or more prop from source to destination
let obj = {
    a : 10,
    b : 20
}

console.log(Object.assign({},obj));

//create --> The Object.create() static method creates a new object, 
//using an existing object as the prototype of the newly created object.
let obj1 = {
    name : "vidhi rana",
    add : "khmbaht",
    Age : 20
}

const me = Object.create(obj1)
me.color = "pink",
me.no = 17

console.log(me);

//defineProperty --> The Object.defineProperty() static method defines 
//a new property directly on an object, or modifies an existing property on an object, and returns the object.
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;


console.log(object1.property1);
// expected output: 42

//defineProperties
const obj2 = {}

Object.defineProperties(obj2,{
    prop1 : {
        value : 12,
        writable : true
    },
    prop2 : {
        value : 24,
        writable : false
    }
})

console.log(obj2.prop1);
console.log(obj2.prop2);

//entries --> returns key value pairs //array ma key value pair return kare
let intro = {
    name : "vidhi",
    Add : "Khkmbhat",
    no : 17
}
for(const [key,value] of Object.entries(intro)){
    console.log(`${key} : ${value}`);
}
console.log(Object.entries(intro));

//freez --> cant change prop of the objects, cant do add remove
Object.freeze(intro)
intro.name = "joy"
console.log(intro);


//fromEntries --> transform list of key-value pairs in object 
let ent =  [
    ["name","vidhi"],["name2","khushi"],[3,"dhruvil"]
]
console.log(Object.fromEntries(ent));

//getOwnPropertyDescriptor

let fruit = {
    prop1 : "Apple"
}

let des = Object.getOwnPropertyDescriptor(fruit,"prop1");
console.log(des.configurable); //true
console.log(des.value); //apple

//getOwnPropertyDescriptors

let des2 =Object.getOwnPropertyDescriptors(fruit)
console.log(des2);
console.log(des2.prop1.writable);

//getOwnPropertyNames --> returns an array of all properties name

console.log(Object.getOwnPropertyNames(intro));


let array1 = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0;i < array1.length;i++){
array1[i] % 2 === 0 ? 
console.log(`${array1[i]}  true`):
console.log(`${array1[i]}  false`);
}

function myFunc(num){
   if(num % 2 === 0) 
    console.log("even");
     return
   
}
console.log('odd')

myFunc(20)


let values = {
    a : 10,
    b : 20,
    c : 30
}

for(const [key,value] of Object.entries(values)){
    console.log(`${key} : ${value}`);
}

for(const k in values){
  console.log(k);
}

console.log(Object.getPrototypeOf(values));

// getOwnPropertySymbols --> //return array of  all symbol properties
// The Object.getOwnPropertySymbols() static method returns an array of all symbol properties found directly upon a given object.

// Expected output: true


//Object.is() //check 2 values are same or not
console.log(Object.is(3,4));
console.log(Object.is("vidhi","vidhi"));

console.log(Object.keys(values)); //['a','b','c']

console.log(Object.isExtensible(values)); //true

console.log(Object.isFrozen(values)); //false
Object.freeze(values)
console.log(Object.isFrozen(values)) //true

//seal
let number = {
    n1 : 10,
    n2 : 20,
    n3 : 30
}

console.log(Object.seal(number));
number.n1 =100
console.log(number.n1);
console.log(number);

delete number.n1 
 number.a1 = "vidhi"
console.log(number);

let num = {
    s : 10
}
num.s2 = 12
console.log(num);

//prevent extension
console.log(Object.preventExtensions(num)); //extend thatu stop kare
num.s3 = 14
console.log(num);
//get
console.log(Object.getPrototypeOf(num));

// console.log(Object.setPrototypeOf(Object.prototype,{}));
console.log(Object.setPrototypeOf(Object.prototype,null));