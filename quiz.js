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

class Quiz {
    constructor(questions) {
        this.questions = this.shuffleQuestions(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;
        this.questionsToShow = 5; // Number of questions per quiz
        
        // Get DOM elements
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.nextButton = document.getElementById('next-button');
        this.retakeButton = document.getElementById('retake-button');
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.resultsSection = document.getElementById('results-section');
        this.questionSection = document.getElementById('question-section');
        
        // Initialize quiz
        this.initializeQuiz();
    }

    shuffleQuestions(questions) {
        return [...questions].sort(() => Math.random() - 0.5);
    }

    initializeQuiz() {
        this.questions = this.questions.slice(0, this.questionsToShow);
        this.displayQuestion();
        this.updateProgress();
        
        this.nextButton.addEventListener('click', () => this.handleNext());
        this.retakeButton.addEventListener('click', () => this.retakeQuiz());
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        this.optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.addEventListener('click', () => this.handleAnswer(option));
            this.optionsContainer.appendChild(button);
        });

        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questionsToShow}`;
        this.answered = false;
        this.nextButton.disabled = true;
    }

    handleAnswer(selectedOption) {
        if (this.answered) return;
        
        const question = this.questions[this.currentQuestionIndex];
        const correct = selectedOption === question.answer;
        this.answered = true;
        
        if (correct) this.score++;

        // Update UI to show correct/incorrect answers
        const buttons = this.optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === question.answer) {
                button.classList.add('correct');
            } else if (button.textContent === selectedOption && !correct) {
                button.classList.add('incorrect');
            }
        });

        this.nextButton.disabled = false;
    }

    handleNext() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.showResults();
        }
        this.updateProgress();
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    showResults() {
        this.questionSection.classList.add('hidden');
        this.resultsSection.classList.remove('hidden');
        this.nextButton.classList.add('hidden');
        this.retakeButton.classList.remove('hidden');

        const scoreDisplay = document.getElementById('score-display');
        const resultsMessage = document.getElementById('results-message');
        
        scoreDisplay.textContent = `${this.score}/${this.questionsToShow}`;
        
        if (this.score === this.questionsToShow) {
            resultsMessage.textContent = "Perfect score! You're a microbiome expert!";
        } else if (this.score > this.questionsToShow / 2) {
            resultsMessage.textContent = "Great job! Keep learning about the microbiome!";
        } else {
            resultsMessage.textContent = "Keep studying! There's more to learn about the microbiome!";
        }
    }

    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = this.shuffleQuestions(quizQuestions).slice(0, this.questionsToShow);
        
        this.questionSection.classList.remove('hidden');
        this.resultsSection.classList.add('hidden');
        this.nextButton.classList.remove('hidden');
        this.retakeButton.classList.add('hidden');
        
        this.displayQuestion();
        this.updateProgress();
    }
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz(quizQuestions);
});
