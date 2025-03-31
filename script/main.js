document.addEventListener("DOMContentLoaded", function () {
  Splide.defaults = {
    type: "loop",
  };
  if (document.getElementById("reviewsSlider")) {
    var reviewsSlider = new Splide("#reviewsSlider", {
      pagination: false,
      perPage: 3,
      gap: "24px",
    });
    reviewsSlider.mount();
  }

  if (document.getElementById("articlesSlider")) {
    var articlesSlider = new Splide("#articlesSlider", {
      pagination: false,
      perPage: 4,
      gap: "16px",
    });
    articlesSlider.mount();
  }
});
