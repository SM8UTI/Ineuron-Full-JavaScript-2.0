## Question 21

### In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list

```javascript

let countries = ["india","USA","London","UK","Africa","Germany","Russia"]

console.log(countries);

if(!countries.includes("Ethiopia")){
    countries.push("Ethiopia");
}

console.log(countries);

if(countries.includes("Ethiopia")){
    console.log("Ethiopia".toUpperCase());
}

```