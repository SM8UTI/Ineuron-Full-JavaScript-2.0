## Question 24

### Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included)

```javascript


let odd = [];
let even = [];

function check(num){
  return num%2 === 0 ? true : false;
}

for(let i = 1;i<=100;i++){
  if(check(i)){
    even.push(i);
  }else{
    odd.push(i);a
  }
}

console.log(even,odd);


```