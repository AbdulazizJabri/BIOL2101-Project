// Function to animate numbers
function animateValue(id, start, end, duration, isPercentage = false) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        document.getElementById(id).textContent = isPercentage ? `${value}%` : value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Start the animation on window load
window.onload = () => {
    animateValue("species-count", 0, 1000, 3000); // 1000+ Species in the Gut
    animateValue("microbes-count", 0, 500000000000, 3000); // 500 Trillion Microbes in Your Body
    animateValue("immunity-count", 0, 70, 3000, true); // 70% Immunity from Gut Health
};
