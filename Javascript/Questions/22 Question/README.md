## Question 22

### The following is an array of 10 students ages

    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

```javascript

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort()

let max = ages[ages.length - 1];
let min = ages[0];

// Find the median age(one middle item or two middle items divided by two)

let medianAge;
let middleIndex = Math.floor(ages.length/2);

if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex] + ages[middleIndex - 1]) / 2;
} else {
  medianAge = ages[middleIndex];
}


// Find the average age(all items divided by number of items)

const average_sum = ages.reduce((total,age) => total + age);
let average = parseInt(average_sum / ages.length)

// Find the range of the ages(max minus min)

const range = max - min ;


// Compare the value of (min - average) and (max - average), use abs() method 

const minAvg = Math.abs(min - average);
const maxAvg = Math.abs(max - average);


console.log("Average Age : ",average);
console.log("Max : ",max," Min : ",min);
console.log("Range age : ",range);
console.log("Median age : ",medianAge)
console.log('Difference between min and average age:', minAvg);
console.log('Difference between max and average age:', maxAvg);

```