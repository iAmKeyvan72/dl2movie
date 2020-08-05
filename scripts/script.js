const acc = document.getElementsByClassName("accordion-header");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const showMore = document.getElementById("more-trigger");
const filmDescription = document.getElementById("film-description");
showMore.addEventListener("click", (event) => {
  filmDescription.style.height = "100%";
  showMore.style.display = "none";
});

const menuTrigger = document.getElementById("menu-trigger");
const mobileMenu = document.getElementById("nav-links-sidebar");
const maskOverlay = document.getElementById("mask");
menuTrigger.addEventListener("click", (event) => {
  mobileMenu.style.right = "0";
  maskOverlay.style.display = "block";
});

maskOverlay.addEventListener("click", (event) => {
  mobileMenu.style.right = "-85%";
  maskOverlay.style.display = "none";
});
