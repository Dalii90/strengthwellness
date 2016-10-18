(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('#comment').trigger('autoresize');
    $('.SW-collage').collagePlus(
    {
        // change this to adjust the height of the rows
        'targetHeight' : 100,
        // change this to try different effects
        // valid effets = effect-1 to effect-6
        'effect' : "effect-1"
    }
);

  }); // end of document ready
})(jQuery); // end of jQuery name space