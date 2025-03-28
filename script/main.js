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
});
