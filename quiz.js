// Step 1: Create the checkAnswer function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4"; // Correct answer to the quiz question

    // Step 3: Retrieve the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked'); // Select checked radio button
    const feedback = document.getElementById("feedback"); // Select the feedback element

    // Check if a radio button is selected
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value; // Get the value of the selected answer

        // Step 4: Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) { // Ensure correct comparison syntax
            // Providing feedback for the correct answer
            feedback.textContent = "Correct! Well done."; // Correct answer feedback
        } else {
            // Providing feedback for the incorrect answer
            feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
        }
    } else {
        // Provide feedback if no answer is selected
        feedback.textContent = "Please select an answer."; // Feedback for no selection
    }
}

// Step 5: Retrieve the "submit-answer" button and add an event listener
const submitButton = document.getElementById("submit-answer"); // Retrieve the submit button
submitButton.addEventListener("click", checkAnswer); // Add click event listener to the submit button
