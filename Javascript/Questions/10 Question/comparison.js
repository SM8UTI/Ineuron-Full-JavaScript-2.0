//  4 > 3 true
//  4 >= 3 true 
//  4 < 3 false
//  4 <= 3 false
//  4 == 4 true 
//  4 === 4 true 
//  4 != 4 false 
//  4 !== 4 false 
//  4 != '4' false
//  4 == '4' true 
//  4 === '4' false 

console.log(`4 > 3 : ${4>3}`);
console.log(`4 >= 3 : ${4>=3}`);
console.log(`4 < 3 : ${4<3}`);
console.log(`4 <= 3 : ${4<=3}`);
console.log(`4 == 4 : ${4==4}`);
console.log(`4 === 4 : ${4===4}`);
console.log(`4 != 4 : ${4!=4}`);
console.log(`4 !== 4 : ${4!==4}`);
console.log(`4 != '4' : ${4!='4'}`);
console.log(`4 == '4' : ${4=='4'}`);
console.log(`4 === '4' : ${4==='4'}`);

let py = "python".length;
let jar = "jargon".length;

console.log(py != jar);