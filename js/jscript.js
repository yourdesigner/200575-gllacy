var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var overlay = document.querySelector(".feedback-overlay");
var login = popup.querySelector("[name=your-name]");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-show");
  overlay.style.display = "block";
  login.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  overlay.style.display = "none";
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
    }
  }
});