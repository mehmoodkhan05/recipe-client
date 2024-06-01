(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $(".logo, .text-heading, .text-subHeading, .nav-text").toggleClass(
      "d-none"
    );
    $(".sidebar_header-content").toggleClass("pt-4");
  });

//   $(document).ready(function () {
//     const cardContainer = $("#cardContainer");
//     const cardTemplate = $("#cardTemplate");

//     for (let i = 0; i < 3; i++) {
//       const clone = cardTemplate.clone();
// 	  clone.removeClass('card-template');
//       clone.css("display", "flex");
//       cardContainer.append(clone);
//     }
//   });
})(jQuery);
