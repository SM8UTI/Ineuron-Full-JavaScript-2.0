let countries = ["india","USA","London","UK","Africa","Germany","Russia"]

console.log(countries);

if(!countries.includes("Ethiopia")){
    countries.push("Ethiopia");
}

console.log(countries);

if(countries.includes("Ethiopia")){
    console.log("Ethiopia".toUpperCase());
}