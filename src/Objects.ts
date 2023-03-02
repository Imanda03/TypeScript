let employee:{
    id:number,
    name:string,
    retire:(date:Date) =>void
} = {
    id:1, 
    name : "Anish", 
    retire : (data:Date) => {
        console.log(data)
    }};

    
// employee.id = 04  //error will occur

