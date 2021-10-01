$(document).ready(function () {
  var mobileMenuOpen = false;
  var screenWidth =$(window).width();
  $('#mobileMenu').click(function(){
    console.log("MobileMenu clicked");
    $("#navBar").removeClass("bg-transparent");

    $("#navBar").addClass("navBlack");
    mobileMenuOpen = !mobileMenuOpen;
  });


  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    var pos = 150;
    var winTop = $(window).scrollTop();
    var screenWidth =$(window).width();

    if (pos < winTop) {
      $("#navBar").removeClass("bg-transparent");

      $("#navBar").addClass("navBlack");
      console.log("pos", winTop);
    }
    if (winTop < pos  && !mobileMenuOpen) {
        $("#navBar").removeClass("navBlack");

        $("#navBar").addClass("bg-transparent");
    }

    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})
