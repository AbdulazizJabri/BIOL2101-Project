// Sample quiz questions
const quizQuestions = [
    {
        question: "What is the most common type of bacteria found in the human gut?",
        options: ["Bacteroides", "Staphylococcus", "Lactobacillus", "Escherichia"],
        answer: "Bacteroides"
    },
    {
        question: "Approximately how many microbes live in the human body?",
        options: ["1 trillion", "10 trillion", "100 trillion", "500 trillion"],
        answer: "100 trillion"
    },
    {
        question: "Which microorganism is commonly found on the skin?",
        options: ["Escherichia coli", "Staphylococcus epidermidis", "Helicobacter pylori", "Bacteroides fragilis"],
        answer: "Staphylococcus epidermidis"
    },
    {
        question: "What percentage of the immune system is influenced by gut health?",
        options: ["30%", "50%", "70%", "90%"],
        answer: "70%"
    },
    {
        question: "Where in the body would you find Streptococcus mutans?",
        options: ["Gut", "Skin", "Mouth", "Nasal cavity"],
        answer: "Mouth"
    },
    {
        question: "Which of the following is a function of the human microbiome?",
        options: ["Digestion", "Mood regulation", "Immunity", "All of the above"],
        answer: "All of the above"
    },
    // Add more questions as needed
];

function generateQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    const resultContainer = document.getElementById('quiz-result');
    const retakeButton = document.querySelector('.btn-retake');

    // Clear previous quiz
    quizContainer.innerHTML = '';
    resultContainer.innerHTML = '';
    retakeButton.style.display = 'none';

    // Shuffle questions and select 5 random questions
    const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Q${index + 1}: ${q.question}`;
        questionElement.appendChild(questionTitle);

        q.options.forEach(option => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionElement.appendChild(optionLabel);
            questionElement.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    const resultContainer = document.getElementById('quiz-result');
    const retakeButton = document.querySelector('.btn-retake');
    let score = 0;

    // Get all questions and their answers
    const questions = document.querySelectorAll('.question');
    questions.forEach((questionElement, index) => {
        const selectedAnswer = questionElement.querySelector('input[type="radio"]:checked');
        const correctAnswer = quizQuestions.find(q => q.question === questionElement.querySelector('h3').textContent.slice(4)).answer;

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                score++;
                selectedAnswer.parentElement.style.backgroundColor = 'lightgreen'; // Highlight correct answer in green
            } else {
                selectedAnswer.parentElement.style.backgroundColor = 'lightcoral'; // Highlight wrong answer in red
                // Highlight the correct answer in green
                const correctOption = [...questionElement.querySelectorAll('input[type="radio"]')].find(input => input.value === correctAnswer);
                correctOption.parentElement.style.backgroundColor = 'lightgreen';
            }
        } else {
            // If no answer was selected, highlight the correct answer in green
            const correctOption = [...questionElement.querySelectorAll('input[type="radio"]')].find(input => input.value === correctAnswer);
            correctOption.parentElement.style.backgroundColor = 'lightgreen';
        }
    });

    // Display result
    resultContainer.innerHTML = `<h2>Your Score: ${score} / 5</h2>`;
    retakeButton.style.display = 'block'; // Show the retake button
}


// Initialize the quiz on page load
document.addEventListener('DOMContentLoaded', generateQuiz);
