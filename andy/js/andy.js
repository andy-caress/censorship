// SLIDESHOW 1
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // x[i].style.zIndex = "0";
  }
  x[slideIndex-1].style.display = "block";
  // x[slideIndex-1].style.zIndex = "999";
}

$('.slide1').click(function() {
  plusDivs(+1);
  }
);

$('.fw1').click(function() {
  plusDivs(+1);
  }
);

$('.bw1').click(function() {
  plusDivs(-1);
  }
);

// SLIDESHOW 2
// ---------------------------------------------
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // x[i].style.zIndex = "0";
  }
  x[slideIndex2-1].style.display = "block";
  // x[slideIndex-1].style.zIndex = "999";
}

$('.slide2').click(function() {
  plusDivs2(+1);
  }
);

$('.fw2').click(function() {
  plusDivs2(+1);
  }
);

$('.bw2').click(function() {
  plusDivs2(-1);
  }
);

// SLIDESHOW 3
// ---------------------------------------------
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("slide3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // x[i].style.zIndex = "0";
  }
  x[slideIndex3-1].style.display = "block";
  // x[slideIndex-1].style.zIndex = "999";
}

$('.slide3').click(function() {
  plusDivs3(+1);
  }
);

$('.fw3').click(function() {
  plusDivs3(+1);
  }
);

$('.bw3').click(function() {
  plusDivs3(-1);
  }
);
