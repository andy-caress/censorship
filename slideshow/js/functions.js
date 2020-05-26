// ADVANCE SLIDES
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    // x[i].style.zIndex = "0";
  }
  x[slideIndex-1].style.display = "block";
  // x[slideIndex-1].style.zIndex = "999";
}

// $('.slide').click(function() {
//   plusDivs(+1);
//   }
// );

$('.fw').click(function() {
  plusDivs(+1);
  }
);

$('.bw').click(function() {
  plusDivs(-1);
  }
);
