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
  if (popup) {
    for (const pop of popup) {
      pop.style.top = "-100%";
    }
  }
});

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
