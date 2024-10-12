function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4"; // Correct answer to the quiz question

    // Step 2: Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Select checked radio button

    // Check if a radio button is selected
    if (userAnswer) {
        const answerValue = userAnswer.value; // Get the value of the selected answer

        // Step 3: Compare the user's answer with the correct answer
        const feedback = document.getElementById("feedback"); // Select the feedback element
        if (answerValue === correctAnswer) {
            feedback.textContent = "Correct! Well done."; // Correct answer feedback
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
        }
    } else {
        // Handle the case when no answer is selected
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Please select an answer.";
    }
}

// Step 4: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
