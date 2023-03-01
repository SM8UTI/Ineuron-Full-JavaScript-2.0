## Question 27

### Write a program to print all the prime number between 0 to 100 (0 and 100 included)

```javascript
// allPrime.js

const primeCheck = require("./primeOrNot")

let allPrime = []

for(let i = 0;i<=100;i++){
  if(primeCheck(i)){
    allPrime.push(i)
  }
}

console.log(allPrime);

```

```javascript 

// primeOrNot.js

function primeOrNot(num){
  if(num <= 2){
    return false;
  }
  
  for(let i = 2;i<=Math.sqrt(num);i++){
    if(num%i === 0){
      return false;
    }
  }

  return true;
}


module.exports = primeOrNot;




```