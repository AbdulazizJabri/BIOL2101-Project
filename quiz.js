// Array of quiz questions
const quizQuestions = [
    {
        question: "What is the human microbiome?",
        options: ["A collection of microorganisms", "A type of human cell", "A vitamin", "A protein"],
        answer: 0
    },
    {
        question: "Where is the highest concentration of microbiota found in the human body?",
        options: ["Skin", "Gut", "Mouth", "Nasal cavity"],
        answer: 1
    },
    {
        question: "How many species of bacteria are estimated to be in the human gut?",
        options: ["10+", "100+", "1000+", "10000+"],
        answer: 2
    },
    {
        question: "Which of the following is a benefit of a healthy microbiome?",
        options: ["Improved digestion", "Enhanced immunity", "Better mood", "All of the above"],
        answer: 3
    },
    {
        question: "What role does the microbiome play in human health?",
        options: ["Digestion", "Immunity", "Mood regulation", "All of the above"],
        answer: 3
    },
    // Add more questions as needed
];

// Load quiz with random questions
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    const resultContainer = document.getElementById('quiz-result');
    quizContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    // Shuffle questions and pick the first 5
    const shuffledQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
                <span class="feedback" id="feedback-${index}-${i}"></span>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Submit quiz and show result
function submitQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    const resultContainer = document.getElementById('quiz-result');
    const questions = quizContainer.querySelectorAll('.question');
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = q.querySelector('input[name="question' + index + '"]:checked');
        const correctAnswer = quizQuestions[index].answer;

        q.querySelectorAll('input[name="question' + index + '"]').forEach((input, i) => {
            const feedback = document.getElementById(`feedback-${index}-${i}`);
            if (i === correctAnswer) {
                feedback.innerHTML = '&#10003;'; // Tick mark for correct answer
                feedback.style.color = 'green';
            }

            if (selectedOption && parseInt(selectedOption.value) === i) {
                if (parseInt(selectedOption.value) === correctAnswer) {
                    score++;
                } else {
                    input.parentElement.style.color = 'red'; // Highlight wrong answer in red
                }
            }
        });
    });

    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

// Load the quiz when the page loads
window.onload = loadQuiz;
