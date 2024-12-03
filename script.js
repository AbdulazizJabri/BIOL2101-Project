// Tool Tip: list of microbiomes in each region
document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");
    const tooltip = document.getElementById("tooltip");

    hotspots.forEach((hotspot) => {
        hotspot.addEventListener("mouseenter", (event) => {
            const info = hotspot.getAttribute("data-info");
            const microbiomeList = info.split("|"); // Split data-info by '|'

            // Generate a list dynamically
            let listHTML = "<ul>";
            microbiomeList.forEach((microbe) => {
                listHTML += `<li>${microbe}</li>`;
            });
            listHTML += "</ul>";

            tooltip.innerHTML = listHTML; // Insert the list into the tooltip
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

const microbiomeData = {
    nasal: {
        title: "Nasal Microbiome",
        microbes: [
            { name: "Staphylococcus aureus", info: "Spherical bacteria, Family: Staphylococcaceae", img: "staphylococcus aureus.jpg" },
            { name: "Staphylococcus epidermidis", info: "Spherical bacteria, Family: Staphylococcaceae", img: "bac.png" },
            { name: "Corynebacterium species", info: "Rod-shaped bacteria, Family: Corynebacteriaceae", img: "bac.png" },
            { name: "Propionibacterium acnes", info: "Rod-shaped bacteria, Family: Propionibacteriaceae", img: "bac.png" },
        ],
    },
    skin: {
        title: "Skin Microbiome",
        microbes: [
            { name: "Staphylococcus epidermidis", info: "Spherical bacteria, Family: Staphylococcaceae", img: "bac.png" },
            { name: "Cutibacterium acnes", info: "Rod-shaped bacteria, Family: Propionibacteriaceae", img: "bac.png" },
            { name: "Staphylococcus aureus", info: "Spherical bacteria, Family: Staphylococcaceae", img: "bac.png" },
            { name: "Corynebacterium species", info: "Rod-shaped bacteria, Family: Corynebacteriaceae", img: "bac.png" },
        ],
    },
    mouth: {
        title: "Mouth Microbiome",
        microbes: [
            { name: "Streptococcus mutans", info: "Spherical bacteria, Family: Streptococcaceae", img: "bac.png" },
            { name: "Streptococcus salivarius", info: "Spherical bacteria, Family: Streptococcaceae", img: "bac.png" },
            { name: "Fusobacterium nucleatum", info: "Rod-shaped bacteria, Family: Fusobacteriaceae", img: "bac.png" },
            { name: "Porphyromonas gingivalis", info: "Rod-shaped bacteria, Family: Porphyromonadaceae", img: "bac.png" },
        ],
    },
    gut: {
        title: "Gut Microbiome",
        microbes: [
            { name: "Bacteroides species", info: "Rod-shaped bacteria, Family: Bacteroidaceae", img: "bac.png" },
            { name: "Firmicutes", info: "Rod-shaped bacteria, Family: Firmicutes", img: "bac.png" },
            { name: "Escherichia coli", info: "Rod-shaped bacteria, Family: Enterobacteriaceae", img: "bac.png" },
            { name: "Faecalibacterium prausnitzii", info: "Rod-shaped bacteria, Family: Ruminococcaceae", img: "bac.png" },
        ],
    },
    respiratory: {
        title: "Respiratory Microbiome",
        microbes: [
            { name: "Staphylococcus species", info: "Spherical bacteria, Family: Staphylococcaceae", img: "bac.png" },
            { name: "Corynebacterium species", info: "Rod-shaped bacteria, Family: Corynebacteriaceae", img: "bac.png" },
            { name: "Moraxella species", info: "Rod-shaped bacteria, Family: Moraxellaceae", img: "bac.png" },
            { name: "Haemophilus influenzae", info: "Rod-shaped bacteria, Family: Pasteurellaceae", img: "bac.png" },
        ]
    }
};

document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", (event) => {
        const region = event.target.dataset.region;
        const data = microbiomeData[region];
    
        if (!data) { // Handle missing data gracefully
            console.warn(`No microbiome data found for region: ${region}`);
            return;
        }
    
        const imageContainer = document.getElementById("microbiome-image-container");
        imageContainer.innerHTML = ""; // Clear previous image
    
        if (data.microbes[0]?.img) {
            const image = document.createElement("img");
            image.src = `${data.microbes[0].img}`;
            image.alt = "Microbe Image";
            imageContainer.appendChild(image);
        } else {
            imageContainer.textContent = "No image available.";
        }
    
        const infoBox = document.getElementById("info-box");
        infoBox.style.display = "block";
    });    

    hotspot.addEventListener("mouseleave", () => {
        document.getElementById("info-box").style.display = "none";
    });
});

document.querySelectorAll(".hotspot").forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", (event) => {
        const region = event.target.dataset.region;
        const data = microbiomeData[region];

        if (data) {
            // Update the title
            document.getElementById("region-title").textContent = data.title;

            // Clear and populate the image grid with details
            const imageContainer = document.getElementById("microbiome-image-container");
            imageContainer.innerHTML = ""; // Clear previous images

            data.microbes.forEach((microbe) => {
                // Create a container for each microbe
                const microbeItem = document.createElement("div");
                microbeItem.classList.add("microbe-item");

                // Add image
                const image = document.createElement("img");
                image.src = `${microbe.img}`;
                image.alt = microbe.name;

                // Add name
                const name = document.createElement("div");
                name.classList.add("microbe-name");
                name.textContent = microbe.name;

                // Add info
                const info = document.createElement("div");
                info.classList.add("microbe-info");
                info.textContent = microbe.info;

                // Append all to the microbe item
                microbeItem.appendChild(image);
                microbeItem.appendChild(name);
                microbeItem.appendChild(info);

                // Add the microbe item to the grid container
                imageContainer.appendChild(microbeItem);
            });

            // Show the info box
            const infoBox = document.getElementById("info-box");
            infoBox.classList.add("visible");
        }
    });

    hotspot.addEventListener("mouseleave", () => {
        // Hide the info box
        const infoBox = document.getElementById("info-box");
        infoBox.classList.remove("visible");
    });
});



// // Question database
// const questions = [
//     {
//         question: "What is the microbiome?",
//         options: [
//             "A collection of all microbes living in an environment",
//             "A single type of bacteria in the gut",
//             "Viruses that infect the body",
//             "The immune system's response to infection",
//         ],
//         answer: 0,
//     },
//     {
//         question: "Which vitamin is produced by gut bacteria?",
//         options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin B12"],
//         answer: 2,
//     },
//     {
//         question: "True or False: Skin has a microbiome.",
//         options: ["True", "False"],
//         answer: 0,
//     },
//     {
//         question: "Name one food that promotes a healthy microbiome.",
//         options: ["Candy", "Fermented foods", "Fried foods", "Processed foods"],
//         answer: 1,
//     },
//     {
//         question: "What is a probiotic?",
//         options: [
//             "A type of medicine",
//             "Live microorganisms that promote gut health",
//             "A disease caused by bacteria",
//             "An antibiotic treatment",
//         ],
//         answer: 1,
//     },
//     // Add more questions here
// ];

// // Function to generate the quiz
// function generateQuiz() {
//     const quizContainer = document.getElementById("quiz");

//     // Shuffle questions and pick 5
//     const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);

//     // Render questions
//     selectedQuestions.forEach((q, index) => {
//         const questionElement = document.createElement("div");
//         questionElement.classList.add("question");

//         // Add question text
//         const questionText = document.createElement("p");
//         questionText.textContent = `${index + 1}. ${q.question}`;
//         questionElement.appendChild(questionText);

//         // Add options
//         q.options.forEach((option, optIndex) => {
//             const optionContainer = document.createElement("div");

//             const radioInput = document.createElement("input");
//             radioInput.type = "radio";
//             radioInput.name = `question${index}`;
//             radioInput.value = optIndex;

//             const label = document.createElement("label");
//             label.textContent = option;

//             optionContainer.appendChild(radioInput);
//             optionContainer.appendChild(label);
//             questionElement.appendChild(optionContainer);
//         });

//         quizContainer.appendChild(questionElement);
//     });

//     // Add event listener for submit button
//     document.getElementById("submitQuiz").addEventListener("click", () => {
//         calculateScore(selectedQuestions);
//     });
// }

// // Function to calculate the score
// function calculateScore(selectedQuestions) {
//     let score = 0;

//     selectedQuestions.forEach((q, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption && parseInt(selectedOption.value) === q.answer) {
//             score++;
//         }
//     });

//     // Display the score
//     document.getElementById("score").textContent = `Your score: ${score} / ${selectedQuestions.length}`;
// }

// // Initialize the quiz
// document.addEventListener("DOMContentLoaded", generateQuiz);
