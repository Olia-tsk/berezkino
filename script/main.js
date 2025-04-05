document.addEventListener("DOMContentLoaded", function () {
  Splide.defaults = {
    type: "loop",
    padding: { left: 10, right: 10 },
  };
  if (document.getElementById("reviewsSlider")) {
    var reviewsSlider = new Splide("#reviewsSlider", {
      pagination: false,
      perPage: 3,
      gap: "24px",
      breakpoints: {
        1250: {
          perPage: 2,
        },
        876: {
          perPage: 1,
        },
      },
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
