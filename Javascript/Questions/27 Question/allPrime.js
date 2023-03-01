const primeCheck = require("./primeOrNot")

let allPrime = []

for(let i = 0;i<=100;i++){
  if(primeCheck(i)){
    allPrime.push(i)
  }
}

console.log(allPrime);