## Question 28

### Write a program to print the given patterns using the loops-

	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
    *
    **
    ***
 
 b. Print a square pattern, if the input is 3 then the output should be similar to the given output
    ***
    ***
    ***

 c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
      *
     ***
     *****

```javascript


// a 

   //  *
   //  **
   //  ***

function printA(num){
  for(let i = 1;i<=num;i++){
    let star = "";
    for(let j = 1;j<=i;j++){
      star += "*";
    }
    console.log(star);
  }
}

printA(3)


console.log("\n");

// b 

   //  ***
   //  ***
   //  ***

function printB(num){
  for(let i = 1;i<=num;i++){
    let star = "";
    for(let j = 1;j<=num;j++){
      star += "*";
    }
    console.log(star);
  }
}

printB(3)

console.log("\n");

// c 

   //    *
   //   ***
    //  *****

function printC(num){
  for(let i = 1;i<=num;i++){
    let star = ""
    for(let j = 1;j<= num - i ;j++){
      star += " "
    }
    for(let k = 1;k<= 2*i-1;k++){
      star += "*"
    }
    console.log(star);
  }
}

printC(5)



```