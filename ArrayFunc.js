const arr = [10,20,30,40,50]

//forEach
arr.forEach((ele)=>console.log(ele))

//indexOf
console.log(arr.indexOf(40)); //3

//lastIndexOf
let strarr = ["apple","bananas","grapes","sapota","grapes","apple"]
console.log(strarr.indexOf('grapes'));//2
console.log(strarr.lastIndexOf("apple"));//5

//includes --> return true or false
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//const arr = [10,20,30,40,50]

console.log(arr.includes(60)); //false
console.log(arr.includes(30)); //true

///find --> retun first ele who satisfy the testing function
let array = [10,20,4,3,50,4]
console.log(array.find(ele => ele < 10)); //4
console.log(array.find(element => element > 3)); //10


//findIndex --> first element's index number
console.log(array.findIndex(item => item == 3));// indexNo - 3
console.log(array.findIndex(it => it>20)); //indexNo - 4

//map --> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr1 = [10,20,30,40]
arr1.map((ele)=>console.log(ele * 2))

//filter
let arr2 = ["vidhi","rana","joy","khushijsndkN","lkalskLAL"]
console.log(arr2.filter((str)=>str.length > 6)
);

let arrnum = [10,20,50,60]
console.log(arrnum.filter((item)=>item<20));//10

//sort --> The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending
let arr3 = [34,54,5654,1,145,56,90]
console.log(arr3.sort());

//reverse --> The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
let rev = [4,3,2,1]
console.log(rev.reverse());

let strrev = ["a","b","c","d"]
console.log(strrev.reverse());

//slice
console.log(arrnum.slice(1)); //[20,50,60]
console.log(arrnum.slice(1,4));

//splice --> change the contents of an aaray by removing or adding or replacing with new element
let months = ["jan","march","april","may"]
months.splice(1,0,"feb")
console.log(months);

//splice(start,deletecounts,item)

//split --> The split() method takes a pattern and divides a String into an 
//ordered list of substrings by searching for the pattern, puts these 
//substrings into an array, and returns the array.

let  namestr = "vidhi rana"
let word = namestr.split(" ")
console.log(word[0]);
console.log(namestr.split());

//join--> The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
let arrfr = ["apple","banana","grapes"]
console.log(arrfr.join());
console.log(arrfr.join(""));
console.log(arrfr.join("-"));

//reduce --> // Subtract all numbers in an array left to right
let arrsum = [10,20,30,40,50]

const sum = arrsum.reduce((total,num)=> total+=num)
console.log(sum); //150

//reduceRight
const right = arrsum.reduceRight((total,val)=>total-=val)
console.log(right);

//some --> The some() method tests whether at least one element in the array
// passes the test implemented by the provided function.
//return true or false

let arrAge = [10,20,40,50,2]
console.log(arrAge.some((ele)=>ele >= 18)); //true

console.log(arrAge.every((ele)=>ele >= 18)); //false










