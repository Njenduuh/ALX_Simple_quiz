function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4"; // Correct answer to the quiz question

    // Step 2: Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Select checked radio button

    // Step 3: Provide feedback based on the user's selection
    const feedback = document.getElementById("feedback"); // Select the feedback element
    
    // Check if a radio button is selected
    if (userAnswer) {
        const answerValue = userAnswer.value; // Get the value of the selected answer

        // Compare the user's answer with the correct answer
        if (answerValue === correctAnswer) {
            // Providing feedback for the correct answer
            feedback.textContent = "Correct! Well done."; // Correct answer feedback
        } else {
            // Providing feedback for the incorrect answer
            feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
        }
    } else {
        // Handle the case when no answer is selected
        feedback.textContent = "Please select an answer.";
    }
}

// Step 4: Retrieve the "submit-answer" button and add an event listener
const submitButton = document.getElementById("submit-answer"); // Retrieve the submit button
submitButton.addEventListener("click", checkAnswer); // Add click event listener to the submit button
