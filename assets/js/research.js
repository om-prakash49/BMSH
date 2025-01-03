$(document).ready(function () {
    $(".research").slick({
        infinite: true,
        slidesToShow: 4, // Default number of slides
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false, // Enable auto-slide
        autoplaySpeed: 3000, // Auto-slide interval in milliseconds
        responsive: [
            {
                breakpoint: 1440, // For large screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 576, // For extra-small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
});
