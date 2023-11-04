function checkGrade() {
    var percentage = document.getElementById("percentage").value;

    if (percentage === "") {
        displayResult("Please enter a value.");
    } else if (percentage >= 0 && percentage <= 100) {
        if (percentage >= 80) {
            displayResult("A+");
        } else if (percentage >= 70) {
            displayResult("A");
        } else if (percentage >= 60) {
            displayResult("B");
        } else if (percentage >= 50) {
            displayResult("C");
        } else {
            displayResult("F");
        }
    } else {
        displayResult("Invalid input. Please enter a value between 0 and 100.");
    }
}

function displayResult(grade) {
    // Get the result element
    var resultElement = document.getElementById("result");
    // Set the grade result text
    resultElement.textContent = "Grade: " + grade;
}





// Get the input field
var percentageInput = document.getElementById('percentage');

// Add an event listener for the "keydown" event on the input field
percentageInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Call the checkGrade function if "Enter" key is pressed
        checkGrade();
    }
});