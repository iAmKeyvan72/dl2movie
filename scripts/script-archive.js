const categoryTrigger = document.getElementById("categories-trigger");
const categoryPopup = document.getElementById("categories-popup");
const countryTrigger = document.getElementById("countries-trigger");
const countryPopup = document.getElementById("countries-popup");
const popup = document.getElementsByClassName("popup");
const closePopup = document.getElementsByClassName("close-popup");
categoryTrigger.addEventListener("click", (event) => {
  maskOverlay.style.display = "block";
  categoryPopup.style.top = "40px";
});
countryTrigger.addEventListener("click", (event) => {
  maskOverlay.style.display = "block";
  countryPopup.style.top = "40px";
});
for (const close of closePopup) {
  close.addEventListener("click", (event) => {
    for (const pop of popup) {
      pop.style.top = "-100%";
    }
    maskOverlay.style.display = "none";
  });
}
