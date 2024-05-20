// Function to calculate BMI
function calculateBMI() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // Display result
    let result = '';
    if (!isNaN(bmi)) {
        result = `Your BMI: ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
    } else {
        result = 'Please enter valid height and weight.';
    }
    document.getElementById('result').innerText = result;

    // Save input values to local storage
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
}

// Function to retrieve stored values and populate the form
function populateForm() {
    const height = localStorage.getItem('height');
    const weight = localStorage.getItem('weight');
    if (height) {
        document.getElementById('height').value = height;
    }
    if (weight) {
        document.getElementById('weight').value = weight;
    }
}

// Function to reset form and clear local storage
function resetForm() {
    localStorage.removeItem('height');
    localStorage.removeItem('weight');
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerText = '';
}

// Function to categorize BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }, function(err) {
            console.log('Service Worker registration failed:', err);
        });
    });
}
// Populate form with stored values on page load
populateForm();