function calculateBMI() {
  var weight = document.getElementById("human-weight").value;
  var height = document.getElementById("human-height").value;

  if (weight > 0 && height > 0) {
    var bmi = weight / Math.pow(height / 100, 2);

    var resultDiv = document.getElementById("human-result");
    resultDiv.innerHTML = `<h4>Your BMI is: ${bmi.toFixed(2)}</h4>`;
  } else {
    alert("Please enter valid weight and height");
  }
}
