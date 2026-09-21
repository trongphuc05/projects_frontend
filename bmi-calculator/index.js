const btnEL = document.getElementById("btn");
const bmiInputEL = document.getElementById("bmi-result");
const weightConditonEL = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEL.value = bmiValue.toFixed(2);

  if (bmiValue < 18.5) {
    weightConditonEL.innerText = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    weightConditonEL.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    weightConditonEL.innerText = "Overweight";
  } else {
    weightConditonEL.innerText = "Obese";
  }
}

btnEL.addEventListener("click", calculateBMI);
