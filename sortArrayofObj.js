let employee = [
    {
        name : "joy" ,
        Age : "20" ,
    },
    {                        
        name : "Ayush" ,
        Age : "18" ,

    },                       
    {
        name : "Hinal" ,
        Age : "22" ,
                             
    },{
        name : "Dhruvil" ,
        Age : "25" ,

    },
    {
        name : "Riya" ,
        Age : "27" ,

    }
]

//By Age
employee.sort((a,b)=> a.Age - b.Age)
employee.forEach((ele)=>console.log(`${ele.name}  ${ele.Age}`))

//By name 
console.log("  By name  ");
employee.sort((x,y)=>{
    const A = x.name.toUpperCase()
    const B = y.name.toUpperCase()
    
    if(A < B){
        return -1
    }
    if(A > B){
        return 1
    }
    return 0
})

employee.forEach((element)=>{
   console.log(`${element.name} ${element.Age}`);
})