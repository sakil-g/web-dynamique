//Caroussel
var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  //Animations services

  $( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.

    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionWhere = $('#services').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.

        if (Scroll >= SectionWhere) { 
            AOS.init();
        } 
    });
});
