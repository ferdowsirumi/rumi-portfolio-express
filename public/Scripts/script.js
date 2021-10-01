
function myfunction() {
  var x = document.getElementById("menubar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  showGoToTopButton();
  // animateBlocks();
}
function showGoToTopButton() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 500) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  
  var myform = $("form#myform");
  myform.submit(function (event) {
    event.preventDefault();

    var template_params = {
      "reply_to": $("#from_email").val(),
      "from_name": $("#from_name").val(),
      "to_name": "Ferdowsi Rumi",
      "message_html": $("#message_html_value").val()
    }
    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "template_8r23TpKK";
    myform.find("button").text("Sending...");
    emailjs.send(service_id, template_id, template_params)
      .then(function () {

        alert("Thank you so much for your email. It's on the way!");
        myform.find("button").text("Send");
      }, function (err) {
        alert("Send email failed!\r\n My site having some problem. Will fix it soon. :\n " + JSON.stringify(err));
        myform.find("button").text("Send");
      });

    return false;
  });
});