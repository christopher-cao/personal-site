var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
  console.log("window y offset: " + window.pageYOffset);
  console.log("nystories: " + nystories);
 var opac = (window.pageYOffset / nystories);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(static/lake_22.jpg) no-repeat";
  }
}