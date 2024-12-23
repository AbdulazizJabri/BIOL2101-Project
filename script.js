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

// ========================================================================================================
// ========================================================================================================

const microbiomeData = {
    nasal: {
        title: "Nasal Microbiome",
        microbes: [
            {
                name: "Staphylococcus aureus",
                info: "Spherical bacteria - Harmful. Can cause infections when immunity is compromised.",
                img: "Staphylococcus aureus.jpg"
            },
            {
                name: "Staphylococcus epidermidis",
                info: "Spherical bacteria - Mostly Beneficial. Protects against harmful pathogens by occupying space.",
                img: "Staphylococcus epidermidis.jpg"
            },
            {
                name: "Corynebacterium species",
                info: "Rod-shaped bacteria - Mostly Beneficial. Helps maintain skin and mucosal health.",
                img: "Corynebacterium species.jpg"
            },
            {
                name: "Propionibacterium acnes",
                info: "Rod-shaped bacteria - Mostly Beneficial. Linked to skin health but can cause acne in excess.",
                img: "Propionibacterium acnes.jpg"
            },
        ],
    },
    skin: {
        title: "Skin Microbiome",
        microbes: [
            {
                name: "Staphylococcus epidermidis",
                info: "Spherical bacteria - Mostly Beneficial. Plays a role in wound healing and immune defense.",
                img: "Staphylococcus epidermidis.jpg"
            },
            {
                name: "Cutibacterium acnes",
                info: "Rod-shaped bacteria - Mostly Beneficial. Balances skin pH but may contribute to acne when overgrown.",
                img: "Cutibacterium acnes.jpg"
            },
            {
                name: "Staphylococcus aureus",
                info: "Spherical bacteria - Harmful. Can cause skin infections like boils and abscesses.",
                img: "Staphylococcus aureus.jpg"
            },
            {
                name: "Corynebacterium species",
                info: "Rod-shaped bacteria - Mostly Beneficial. Contributes to body odor production but otherwise harmless.",
                img: "Corynebacterium species.jpg"
            },
        ],
    },
    mouth: {
        title: "Mouth Microbiome",
        microbes: [
            {
                name: "Streptococcus mutans",
                info: "Spherical bacteria - Harmful. Produces acids that lead to tooth decay.",
                img: "Streptococcus mutans.jpg"
            },
            {
                name: "Streptococcus salivarius",
                info: "Spherical bacteria - Beneficial. Produces enzymes that protect against harmful microbes.",
                img: "Streptococcus salivarius.jpg"
            },
            {
                name: "Fusobacterium nucleatum",
                info: "Rod-shaped bacteria - Harmful. Linked to gum disease and bad breath.",
                img: "Fusobacterium nucleatum.jpg"
            },
            {
                name: "Porphyromonas gingivalis",
                info: "Rod-shaped bacteria - Harmful. Major contributor to periodontal disease.",
                img: "Porphyromonas gingivalis.jpg"
            },
        ],
    },
    gut: {
        title: "Gut Microbiome",
        microbes: [
            {
                name: "Bacteroides species",
                info: "Rod-shaped bacteria - Beneficial. Breaks down complex carbohydrates in the diet.",
                img: "Bacteroides species.jpg"
            },
            {
                name: "Firmicutes",
                info: "Rod-shaped bacteria - Beneficial. Important for calorie extraction and gut health.",
                img: "Firmicutes.jpg"
            },
            {
                name: "Escherichia coli",
                info: "Rod-shaped bacteria - Mostly Beneficial. Aids digestion but some strains can cause diarrhea.",
                img: "Escherichia coli.jpg"
            },
            {
                name: "Faecalibacterium prausnitzii",
                info: "Rod-shaped bacteria - Beneficial. Anti-inflammatory and crucial for gut health.",
                img: "Faecalibacterium prausnitzii.jpg"
            },
        ],
    },
    respiratory: {
        title: "Respiratory Microbiome",
        microbes: [
            {
                name: "Staphylococcus species",
                info: "Spherical bacteria - Mixed. Some strains are harmless, others cause respiratory infections.",
                img: "Staphylococcus species.jpg"
            },
            {
                name: "Corynebacterium species",
                info: "Rod-shaped bacteria - Mostly Beneficial. Inhibits growth of harmful pathogens.",
                img: "Corynebacterium species.jpg"
            },
            {
                name: "Moraxella species",
                info: "Rod-shaped bacteria - Mixed. Can be a normal commensal but also linked to respiratory infections.",
                img: "Moraxella species.jpg"
            },
            {
                name: "Haemophilus influenzae",
                info: "Rod-shaped bacteria - Mixed. Beneficial in small numbers, but can cause pneumonia or bronchitis.",
                img: "Haemophilus influenzae.jpg"
            },
        ],
    },
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
                image.src = `images/${microbe.img}`;
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

window.addEventListener("resize", () => {
    const bodyContainer = document.querySelector(".body-container");
    const infoBox = document.getElementById("info-box");

    if (window.innerWidth < 600) {
        infoBox.style.position = "static";
        bodyContainer.style.flexDirection = "column";
    } else {
        infoBox.style.position = "absolute";
        bodyContainer.style.flexDirection = "row";
    }
});
