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
    $(".sidebar_header-content").toggleClass("pt-4 customImg");
    $(".components").toggleClass("customCSS");
  });
})(jQuery);
