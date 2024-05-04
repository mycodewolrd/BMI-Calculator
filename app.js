//Hold the needed variables
const form = document.getElementById('bmiForm');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultElement = document.getElementById('result');
const guideElement = document.getElementById('guide');

form.addEventListener('submit', (event) => {
    event.preventDefault(); //hold the input value instead of sending in browser

    
    //'praseInt' to convert the input value in Int num
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (isNaN(height) && isNaN(weight)) {
        alert('Please enter both height and weight.');
        return;
    }

    //For Results
    const bmi = weight / ((height / 100) ** 2);
    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    //For Weight Guides
    const guideElement = document.getElementById('guide');
    if (bmi < 18.5) {
        guideElement.innerHTML = '<h3>You are underweight</h3>';
    } else if (bmi < 25) {
        guideElement.innerHTML = '<h3>Normal weight</h3>';
    } else if (bmi < 30) {
        guideElement.innerHTML = '<h3>Overweight</h3>';
    } else {
        guideElement.innerHTML = '<h3>Obesity</h3>';
    }
});