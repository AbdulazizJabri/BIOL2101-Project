// Quiz Form Submission
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;

    // Check answers
    if (answer1 === "2") score++;
    if (answer2 === "3") score++;

    // Display result
    let resultMessage = "You scored " + score + " out of 2!";
    if (score === 2) {
        resultMessage += " Excellent knowledge!";
    } else if (score === 1) {
        resultMessage += " Nice try! You're getting there.";
    } else {
        resultMessage += " Keep learning!";
    }

    document.getElementById('quiz-result').innerHTML = resultMessage;
});
