document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".priority-slider-wrapper");
    const slider = document.querySelector(".priority-cards");
    const cards = document.querySelectorAll(".priority-card");

    // Variables
    const cardWidth = cards[0].offsetWidth + 24; // Add gap (24px in this case)
    let currentIndex = 0;

    // Duplicate cards for infinite loop effect
    slider.innerHTML += slider.innerHTML; // Double the cards
    const totalCards = slider.querySelectorAll(".priority-card").length;

    // Update slider width
    slider.style.width = `${cardWidth * totalCards}px`;

    // Auto-slider function
    function autoSlide() {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        slider.style.transition = "transform 0.5s ease-in-out";

        // Reset to the beginning for infinite loop effect
        if (currentIndex >= totalCards / 2) {
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
