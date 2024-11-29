// Display information for each hotspot
document.querySelectorAll('.hotspot').forEach((hotspot) => {
    hotspot.addEventListener('click', () => {
        alert(hotspot.getAttribute('data-info'));
    });
});
