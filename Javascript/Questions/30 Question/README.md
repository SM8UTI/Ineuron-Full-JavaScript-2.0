## Question 30

### Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers

```javascript


function add(x,y){
    return x + y;
}

function sub(x,y){
    return x-y;
}

function div(x,y){
    return x/y;
}

function multi(x,y){
    return x * y;
}

function calc(x,y,symbol){
    let res;
    if(symbol === "+"){
        res = add(x,y);
    }
    else if(symbol === "-"){
        res = sub(x,y);
    }
    else if(symbol === "/"){
        res = div(x,y);
    }
    else if(symbol === "*"){
        res = multi(x,y);
    }

    return res;
}

console.log(calc(50,10,"+"));


```