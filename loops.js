for(let i = 1;i<=100;i++){
    console.log(i);
}

//for in loop
const obj = {
    a : 10,
    b : 20,
    c : 30,
    d : 40
}
for(const prop in obj){
    console.log(`${prop} : ${obj[prop]}`);
}

//while loop
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

//do while
let num = 0
let res = ''
do{
    num ++;
    res = res + num
}
while(num <5)
console.log(res); //12345

//forEach
let arr = [10,20,30,40,50]
arr.forEach((ele)=>console.log(ele))