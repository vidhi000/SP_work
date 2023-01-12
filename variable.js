//let, var , const

//var --> The scope of the var keyword is the global or function scope. 
//It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 
var a = 14;
function value(){
    var b = 10
    console.log(a);
    console.log(b);
}
value()


//let --> Blocked scope, mutable ,can’t be accessible outside the particular block ({block})

let x = 10
if (true) {
	let x = 9
	console.log(x) // It prints 9
}
console.log(x) // It prints 10

//const --> blocked scope , can not change or update it in future
const name = "vidhi"

// function fun(){
//     name = "joy"            // U can't assign in constant variable
//     console.log(name);
// }
// fun()
