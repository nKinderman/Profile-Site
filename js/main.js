$(function(){

  // fadeIn #Home text
  $(document).ready(function(){
      $("#home-box").fadeIn(2500);
  });

  // Work around smooth scroll for singlePageNav inability to handle multiple
  // instances on the same page.
  $(document).ready(function(){
  // Add smooth scrolling to #about me link
  $("#about-me").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60 // offset fixed #navbar
      }, 1500, function(){

      });
    }
  });
});

  // singlePageNav #desktop-menu and #mobile-menu links
  $(document).ready(function () {
    $('#desktop-nav').singlePageNav({
    	offset: $('#navbar').outerHeight(),
    	speed: 1500,
    	filter: ':not(.external)',
    	//updateHash: true,
      currentClass: 'active'
    });
    $('#mobile-menu').singlePageNav({
    	offset: $('#navbar').outerHeight(),
    	speed: 1500,
    	filter: ':not(.external)',
    	//updateHash: true,
      currentClass: 'active'
    });
  });

  // Toggle #mobile-menu button
  $(document).ready(function(){
    $('#hamburger').click(function(){
      $('#toggle').slideToggle(600);
    });

    $('#mobile-menu a').click(function(){
      $('#toggle').slideToggle(600);
    });
  });

});
