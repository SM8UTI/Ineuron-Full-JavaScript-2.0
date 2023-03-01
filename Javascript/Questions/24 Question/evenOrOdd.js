
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