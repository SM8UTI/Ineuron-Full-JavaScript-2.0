
let year = 2020;
let day = 02;


let daysInAMonth = (year,day)=>{
    return new Date(year,day,0).getDate();
}

console.log(daysInAMonth(year,day));