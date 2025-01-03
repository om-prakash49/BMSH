document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".priority-slider-wrapper");
    const slider = document.querySelector(".priority-cards");
    const cards = document.querySelectorAll(".priority-card");

    // Variables
    let cardWidth = cards[0].offsetWidth + 24; // Add gap (24px in this case)
    let visibleCards = 1; // Default to 1 visible card
    let currentIndex = 0;

    // Update slider dimensions and settings based on screen size
    function updateSliderSettings() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1280) {
            // For `xl` screens
            visibleCards = 2;
        } else if (screenWidth >= 1024) {
            // For `lg` screens
            visibleCards = 1;
        }

        cardWidth = sliderWrapper.offsetWidth / visibleCards;
        slider.style.width = `${cardWidth * cards.length * 2}px`; // Double the width for infinite scrolling
    }

    // Duplicate cards for infinite loop effect
    slider.innerHTML += slider.innerHTML; // Double the cards

    // Update slider settings on page load and resize
    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);

    // Auto-slider function
    function autoSlide() {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";

        // Reset to the beginning for infinite loop effect
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                currentIndex = 0;
                slider.style.transform = `translateX(0)`;
            }, 500); // Match transition duration
        }
    }

    // Start auto-slider
    setInterval(autoSlide, 3000); // Slides every 3 seconds
});
