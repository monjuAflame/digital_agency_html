(function ($) {
  "use strict";

  function owlInit() {
    let careoxowlCarousel = $(".hero-section__carousel");
    if (careoxowlCarousel.length) {
      careoxowlCarousel.each(function () {
        let elm = $(this);

        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }
  function aosInit() {
    AOS.init({
      easing: "ease-in-out-sine",
    });
  }

  $(window).on("load", function () {
    owlInit();
    aosInit();
  });
})(jQuery);
