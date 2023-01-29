## Question 11

### Use the Date object to do the following activities

    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.

```javascript

let dt = new Date()

// What is the year today?

console.log(dt.getFullYear()); // 2023 

// What is the month today as a number?

console.log(dt.getMonth()); // 0

// What is the date today?

console.log(dt.getDate()); // 29

// What is the date today as a number?

console.log(dt.getDay()); // 0 

// What is the hours now? 

console.log(dt.getHours()); // 11 

// What is the minutes now?

console.log(dt.getMinutes()); // 4


```