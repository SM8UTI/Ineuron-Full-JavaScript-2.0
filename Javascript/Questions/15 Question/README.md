## Question 15

### Write a program which can give grades to students according to theirs scores

    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F

```javascript



let num = 65;

if(num >= 80 && num <= 100){
    console.log("Grade A");
}else if(num >= 70 && num <= 79){
    console.log("Grade B");
}else if(num >= 60 && num <= 69){
    console.log("Grade C");
}else if(num >= 50 && num <= 59){
    console.log("Grade D");
}else if (num >= 0 && num <= 49){
    console.log("Grade F");
}else{
    console.log("Mark Between 0 to 100");
}

```