// Carousel Logic
$(document).ready(function () {
    $('.doctors').slick({
      infinite: true, 
      slidesToShow: 3, 
      slidesToScroll: 1, 
      dots: false, 
      arrows: true,
      prevArrow:
        '<button class="slick-prev bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-black shadow-md hover:bg-gray-200"><</button>',
      nextArrow:
        '<button class="slick-next bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-black shadow-md hover:bg-gray-200">></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Show 2 slides for medium devices
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Show 1 slide for small devices
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  