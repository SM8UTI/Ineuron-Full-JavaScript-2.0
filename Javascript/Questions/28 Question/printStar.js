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