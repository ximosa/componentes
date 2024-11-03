const theme = async(from) => {
  await ui("theme", from);
};
const mode = () => {
  let newMode = ui("mode") == "dark" ? "light" : "dark";
  ui("mode", newMode);
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}
