## Question 23

### Write a program to check that the number given by the user is a prime number or not

```javascript

function primeOrNot(num){
  for(let i = 2;i<=Math.sqrt(num);i++){
    if(num%i === 0){
      return false;
    }
  }

  return true;
}


console.log(primeOrNot(22));



```