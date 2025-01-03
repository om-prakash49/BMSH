$(document).ready(function () {
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true, // Initially, arrows are enabled
      prevArrow:
          '<button class="slick-prev bg-white rounded-full w-10 h-10  items-center justify-center text-black shadow-md hidden lg:flex"><</button>',
      nextArrow:
          '<button class="slick-next bg-white rounded-full w-10 h-10  items-center justify-center text-black shadow-md hidden lg:flex">></button>',
      autoplay: true, // Enable auto-slide
      autoplaySpeed: 3000, // Adjust the time (in ms) for auto-slide
      responsive: [
          {
              breakpoint: 1440, // For screens <1024px (lg breakpoint)
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false, // Show arrows for smaller screens
                  autoplay: true, // Disable auto-slide for smaller screens
              },
          },
          {
              breakpoint: 1024, // For screens <1024px (lg breakpoint)
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false, // Show arrows for smaller screens
                  autoplay: true, // Disable auto-slide for smaller screens
              },
          },
          {
              breakpoint: 768, // For screens <768px
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  autoplay: true,
              },
          },
          {
              breakpoint: 576, // For extra-small screens
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  autoplay: true,
              },
          },
      ],
  });
});
