$('.gallery').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="bi bi-chevron-compact-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="bi bi-chevron-compact-right"></i></button>',
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
  ]
});