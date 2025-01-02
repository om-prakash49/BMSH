document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".research");
    const slides = Array.from(sliderContainer.children);
    const slideWidth = sliderContainer.offsetWidth / 4; // Width for 4 cards per row
    let currentIndex = 0;

    // Clone slides for infinite loop
    slides.forEach((slide) => {
        sliderContainer.appendChild(slide.cloneNode(true));
    });

    // Set container styles for smooth scrolling
    sliderContainer.style.display = "flex";
    sliderContainer.style.transition = "transform 0.5s ease-in-out";
    sliderContainer.parentElement.style.overflow = "hidden"; // Hide overflow content

    function autoSlide() {
        currentIndex++;
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Reset to the beginning for infinite effect
        if (currentIndex >= slides.length) {
            setTimeout(() => {
                sliderContainer.style.transition = "none";
                currentIndex = 0;
                sliderContainer.style.transform = `translateX(0)`;
                setTimeout(() => {
                    sliderContainer.style.transition = "transform 0.5s ease-in-out";
                }, 50); // Reapply transition after resetting
            }, 500); // Match transition duration
        }
    }

    // Start the auto slider
    setInterval(autoSlide, 3000); // Slide every 3 seconds
});
