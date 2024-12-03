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
    {
        question: "What is the main difference between gut and human cells?",
        options: ["Gut has fewer cells", "Gut has more bacterial cells than human cells", "Human cells are more diverse", "Gut cells outnumber human cells"],
        answer: "Gut has more bacterial cells than human cells"
    },
    {
        question: "How does the skin microbiome change?",
        options: ["It remains constant", "It changes every time you shower", "It changes once a month", "It never changes"],
        answer: "It changes every time you shower"
    },
    {
        question: "How many different bacterial species are in the oral microbiome?",
        options: ["Over 200", "Over 500", "Over 700", "Over 1000"],
        answer: "Over 700"
    },
    {
        question: "How can your microbiome influence you?",
        options: ["It influences your physical appearance", "It influences your mood and behavior", "It influences only digestion", "It has no influence on mood or behavior"],
        answer: "It influences your mood and behavior"
    },
    {
        question: "What percentage of your body weight is made up of bacteria?",
        options: ["5%", "10%", "15%", "20%"],
        answer: "10%"
    },
    {
        question: "How unique is each person's microbiome?",
        options: ["It's unique, like a fingerprint", "It's similar across everyone", "It changes every year", "It is genetically inherited"],
        answer: "It's unique, like a fingerprint"
    },
    {
        question: "What role does the gut microbiome play in the immune system?",
        options: ["It has no effect on the immune system", "It regulates metabolism and the immune system", "It only influences digestion", "It influences the nervous system"],
        answer: "It regulates metabolism and the immune system"
    },
    {
        question: "What does good bacteria in your gut help protect against?",
        options: ["Harmful pathogens", "Allergies", "Depression", "Fatigue"],
        answer: "Harmful pathogens"
    },
    {
        question: "What is crucial for maintaining good health in the gut?",
        options: ["A high-fat diet", "A low-carb diet", "The diversity of microbiota", "Exercising regularly"],
        answer: "The diversity of microbiota"
    },
    {
        question: "Where is most of the immune system located?",
        options: ["In the brain", "In the stomach", "In the gut", "In the skin"],
        answer: "In the gut"
    },
    {
        question: "What is the primary function of the skin microbiome?",
        options: ["Regulate metabolism", "Help digest food", "Protect the skin from pathogens", "Aid in mood regulation"],
        answer: "Protect the skin from pathogens"
    },
    {
        question: "Which of the following is not a part of the gut microbiome?",
        options: ["Firmicutes", "Bacteroides", "Staphylococcus epidermidis", "Escherichia coli"],
        answer: "Staphylococcus epidermidis"
    },
    {
        question: "Which area of the body has the highest concentration of bacteria?",
        options: ["Gut", "Skin", "Mouth", "Respiratory system"],
        answer: "Gut"
    },
    {
        question: "How does the microbiome affect body weight?",
        options: ["It has no effect on body weight", "It controls weight gain", "It can influence the regulation of body weight", "It causes weight loss"],
        answer: "It can influence the regulation of body weight"
    },
    {
        question: "Which bacterium is commonly found in the mouth microbiome?",
        options: ["Streptococcus mutans", "Staphylococcus epidermidis", "Corynebacterium species", "Escherichia coli"],
        answer: "Streptococcus mutans"
    },
    {
        question: "What role do good bacteria in the gut play in immunity?",
        options: ["They help protect against harmful bacteria", "They destroy harmful bacteria", "They help regulate immune cell production", "They do not affect immunity"],
        answer: "They help protect against harmful bacteria"
    },
    {
        question: "Which organ does the microbiome influence the most?",
        options: ["Brain", "Liver", "Heart", "Gut"],
        answer: "Gut"
    },
    {
        question: "What is the connection between the microbiome and mood regulation?",
        options: ["The microbiome has no impact on mood", "The microbiome can influence mood and behavior", "The microbiome controls emotional responses", "The microbiome only affects digestion"],
        answer: "The microbiome can influence mood and behavior"
    },
    {
        question: "How much of your immune system is influenced by the gut microbiome?",
        options: ["10%", "50%", "70%", "90%"],
        answer: "70%"
    },
    {
        question: "How often does the skin microbiome change?",
        options: ["Every day", "Once a year", "Every time you shower", "It never changes"],
        answer: "Every time you shower"
    }
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
