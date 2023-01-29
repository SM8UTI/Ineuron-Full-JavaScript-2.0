## Question 12

### Create a human readable time format using the Date time object

    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm

```javascript

let dt = new Date()

let year = dt.getFullYear();
let month = dt.getMonth();
let date = dt.getDate();
let hours = dt.getHours();
let minutes = dt.getMinutes();

// YYYY-MM-DD HH:mm
console.log(`${year}-${month+1}-${date} ${hours}:${minutes}`);

// DD-MM-YYYY HH:mm
console.log(`${date}-${month+1}-${year} ${hours}:${minutes}`);

// DD/MM/YYYY HH:mm
console.log(`${date}/${month+1}/${year} ${hours}:${minutes}`);

//or 

console.log(`${dt.toLocaleDateString()} ${hours}:${minutes}`);
```