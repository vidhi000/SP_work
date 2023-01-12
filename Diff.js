//The forEach() method is similar to the for loop, but it does not have a return value.
let arr1 = [10,20,30,40,50]
arr1.forEach((ele)=>console.log(ele))

for(let x = 0 ;x < arr1.length;x++){
    console.log(arr1[x]);
}

//map() vs. forEach()
//The map() method returns a new array, whereas the forEach() method does not return a new array.

//The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

//The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods.

let sum = [10,20,30,40,50]
const res = sum.map((ele)=>{
     // ele * ele
})
console.log(res);

let arrnum = [10,20,30,1,2,3]

const result = arrnum.filter(ele => ele>20)
console.log(result);

//example using map and filter
let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" }
]

const ans = students.filter((student)=>{
    return student.sports === "Basketball"
}
).map((student)=>{
      return  student.name
})
console.log(ans);
console.log(students);
ans.forEach((ele)=> console.log(ele))
