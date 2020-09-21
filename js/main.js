$(function () {
  $('.slider').slick({
    prevArrow: ` <button  class="slick-arrow slick-prev">
        <img src="images/arrow-prev.svg" alt="prev arrow" />
      </button>`,
    nextArrow: `
      <button class="slick-arrow slick-next">
        <img src="images/arrow-next.svg" alt="next arrow" />
      </button>`,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
