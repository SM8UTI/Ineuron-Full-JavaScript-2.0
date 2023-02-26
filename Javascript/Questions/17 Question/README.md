## Question 17

### Write a program which tells the number of days in a month

```javascript

let year = 2021;
let day = 01;


let daysInAMonth = (year,day)=>{
    return new Date(year,day,0).getDate();
}

console.log(daysInAMonth(year,day));


```
