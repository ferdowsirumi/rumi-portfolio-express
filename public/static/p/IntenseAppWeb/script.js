function myfunction() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



function myfunction() {
  document.getElementById("footerSize").style.color = "#F6BF7D";
}

function myfunction2() {
  document.getElementById("footerSize").style.color = "white";
}

function myfunction3() {
  document.getElementById("footerSize1").style.color = "#F6BF7D";
}

function myfunction4() {
  document.getElementById("footerSize1").style.color = "white";
}



//Register onscroll event and call a function
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  showGoToTopButton();
  animateBlocks();
}
function showGoToTopButton() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display= "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function animateBlocks() {
  var y = window.scrollY;
  console.log('scrolly : ', y);

  //Scroll Growing box
  if (y >= 1100) {
    document.getElementById('growing').style.visibility = 'visible';
    document.getElementById('growing').style.animation = 'myanim2 5s 5';
  }

  //Scroll image box 
  if (y >= 1675) {
    document.getElementById('img-box').style.visibility = 'visible';
    document.getElementById('img-box').style.animation = 'myanim3 5s 5';
  }
  
}  









