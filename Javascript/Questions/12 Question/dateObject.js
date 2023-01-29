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