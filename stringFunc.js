//length

const str = "Vidhi Rana"
console.log(`${str} ${str.length}`); //Vidhi Rana 10

console.log(str.indexOf('R')); //6
let arr = [2,3,4,5,6,7]
console.log(arr.indexOf(5)); //3
console.log(str.lastIndexOf('a'))

let array = ["vidhi","joy","dhruvil","vidhi"]
console.log(array.lastIndexOf("vidhi")); //3
console.log(array.lastIndexOf("joy")); //1
console.log(array.lastIndexOf("pp")); //-1

//serach --> The search() method executes a search for a match between a regular expression and this String object.

let strr = "I m from Khmbhat.sdfds"
let Regexp = /[^\w\s]/g
console.log(strr.search(Regexp));
console.log(strr.search("K"));

//slice -->The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
let person = "this is a person. He is a doctor"
console.log(person.slice(4,9)); // is a
console.log(person.slice(4)); //  is a person. He is a doctor
console.log(person.slice(-5,-2)); //oct

//substring --> method returns the part of the string from the start index up to and excluding the end index
console.log(person.substring(3,9));
console.log(person.substring(5));



console.log(person.replace("person","Joy"));
console.log(person.toUpperCase());
console.log(person.toLowerCase());

//concat --> The concat() method concatenates the string arguments to the calling string and returns a new string.
let str1 = "welcome"
let str2 = "To Goa"

console.log(str1.concat(" ",str2)); //welcome To Goa
console.log(str2.concat(" ",str1)); //To Goa welcome

//trim --> The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
let hello = "  Hello World   "
console.log(hello.trim()); 

//charAt
console.log(str1.charAt(2));

//charCodeAt
console.log(str1.charCodeAt(4));

//substr
// console.log(person.substr(3,9));

console.log(person.split());

//split
//let person = "this is a person. He is a doctor"

let word = person.split(" ")
console.log(word[2]);
console.log(word[5]);
console.log(word[3]);








