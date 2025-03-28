document.addEventListener("DOMContentLoaded", function () {
  Splide.defaults = {
    type: "loop",
  };

  var reviewsSlider = new Splide("#reviewsSlider", {
    pagination: false,
    perPage: 3,
    gap: "24px",
  });
  reviewsSlider.mount();

  var articlesSlider = new Splide("#articlesSlider", {
    pagination: false,
    perPage: 4,
    gap: "16px",
  });
  articlesSlider.mount();
});
