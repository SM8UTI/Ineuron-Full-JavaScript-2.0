## Question 18

### Write a program which tells the number of days in a month, now consider leap year


```javascript



let year = 2020;
let day = 02;


let daysInAMonth = (year,day)=>{
    return new Date(year,day,0).getDate();
}

console.log(daysInAMonth(year,day));


```