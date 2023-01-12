let obj1 = {
    name : "vidhi",
    Age : 20
     
}
let obj2 = {
    Age : 20,
    name : "vidhi"
}

obj1 = Object.entries(obj1)
obj2 = Object.entries(obj2)

console.log(obj1);

if(obj1.length === obj2.length){
    obj1.forEach((val,i)=>{
        obj1[i] = String(obj1[i])
        obj2[i] = String(obj2[i])  
    });
    const res = obj1.every((ele)=>{
        return obj2.includes(ele)

    })
    console.log(res);

}else{
    return false
}



