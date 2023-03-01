## Question 29

### Write a javascript program which takes the input of filename as string and prints the extension of the file in the console

```javascript

let filename = prompt("Enter a filename: ");
let extension = filename.split('.').pop();

console.log("The file extension is: " + extension);

```