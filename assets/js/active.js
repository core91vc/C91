(function ($) {
    "use strict";

    // scrollup jQuery
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollTitle: 'Scroll to top of page',
        topDistance: '200', // Distance from top before showing element (px)
        topSpeed: 500, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up" aria-hidden="true"></i><span class="sr-only">Scroll to top</span>',
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });

    $('#scrollUp').attr('aria-label', 'Scroll to top of page');
      
    // onepage-nav
    $('#onepage-nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 2000,
  });


    
})(jQuery);	