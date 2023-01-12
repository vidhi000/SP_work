//1
let obj1 = {
    name : "vidhi",
    Age : 20

    
}
let obj2 = {
    Age : 20,
    name : "vidhi",
}

console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //true
//JSON.stringify --> method converts a JavaScript value to a JSON string
let obj3 = {
    name : "vidhi",
    Age : 20,
    Add : "khmbhat",
    Regno : 17 
}
console.log(JSON.stringify(obj3));

//slice and substring
const str = "Hello How are you today?"
console.log(str.slice(-12,-4));

console.log(str.substring(-4,-1)); //take negative value as 0

