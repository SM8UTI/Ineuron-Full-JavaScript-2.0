function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  let weightGroup;
  if (bmi < 18.5) {
    weightGroup = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightGroup = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    weightGroup = 'Overweight';
  } else {
    weightGroup = 'Obese';
  }
  return weightGroup;
}


console.log(calculateBMI(100, 1.85)); 
