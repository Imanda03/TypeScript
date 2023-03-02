function calculateTax(income:number):number{
    if(income < 50_000)
        return income * 0.5
    else
        return income * 1.5;
}

//Another way 
function calculateTax2(income:number, yearTax:number):number{
    if(yearTax < 2022)
        return income * 0.5
    else
        return income * 1.5;
}

calculateTax2(10_000,2022);


//Using optional in function parameters
function calculateTax3(income:number,yearTax=2022):number{          //Another way yearTax?:number
    if(yearTax < 2022)
        return income * 0.5
    else
        return income * 1.5;
}