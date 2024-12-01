document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");
    const tooltip = document.getElementById("tooltip");

    hotspots.forEach((hotspot) => {
        hotspot.addEventListener("mouseenter", (event) => {
            const info = hotspot.getAttribute("data-info");
            tooltip.textContent = info;
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "1";
            tooltip.style.top = `${event.pageY + 10}px`;
            tooltip.style.left = `${event.pageX + 10}px`;
        });

        hotspot.addEventListener("mousemove", (event) => {
            tooltip.style.top = `${event.pageY + 10}px`;
            tooltip.style.left = `${event.pageX + 10}px`;
        });

        hotspot.addEventListener("mouseleave", () => {
            tooltip.style.visibility = "hidden";
            tooltip.style.opacity = "0";
        });
    });
});


// Question database
const questions = [
    {
        question: "What is the microbiome?",
        options: [
            "A collection of all microbes living in an environment",
            "A single type of bacteria in the gut",
            "Viruses that infect the body",
            "The immune system's response to infection",
        ],
        answer: 0,
    },
    {
        question: "Which vitamin is produced by gut bacteria?",
        options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin B12"],
        answer: 2,
    },
    {
        question: "True or False: Skin has a microbiome.",
        options: ["True", "False"],
        answer: 0,
    },
    {
        question: "Name one food that promotes a healthy microbiome.",
        options: ["Candy", "Fermented foods", "Fried foods", "Processed foods"],
        answer: 1,
    },
    {
        question: "What is a probiotic?",
        options: [
            "A type of medicine",
            "Live microorganisms that promote gut health",
            "A disease caused by bacteria",
            "An antibiotic treatment",
        ],
        answer: 1,
    },
    // Add more questions here
];

// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById("quiz");

    // Shuffle questions and pick 5
    const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

    // Render questions
    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        // Add question text
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionText);

        // Add options
        q.options.forEach((option, optIndex) => {
            const optionContainer = document.createElement("div");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = `question${index}`;
            radioInput.value = optIndex;

            const label = document.createElement("label");
            label.textContent = option;

            optionContainer.appendChild(radioInput);
            optionContainer.appendChild(label);
            questionElement.appendChild(optionContainer);
        });

        quizContainer.appendChild(questionElement);
    });

    // Add event listener for submit button
    document.getElementById("submitQuiz").addEventListener("click", () => {
        calculateScore(selectedQuestions);
    });
}

// Function to calculate the score
function calculateScore(selectedQuestions) {
    let score = 0;

    selectedQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        }
    });

    // Display the score
    document.getElementById("score").textContent = `Your score: ${score} / ${selectedQuestions.length}`;
}

// Initialize the quiz
document.addEventListener("DOMContentLoaded", generateQuiz);
