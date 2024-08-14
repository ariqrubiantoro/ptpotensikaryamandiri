const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

window.onscroll = function () {
  scrollFunction();
};

var nfsw = document.getElementById("navbar");

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    nfsw.classList.add("shadow-g");
    nfsw.classList.remove("delta");
  } else {
    nfsw.classList.add("delta");
    nfsw.classList.remove("shadow-g");
  }
}

var typed3 = new Typed("#element", {
  strings: [
    "<p style='text-align:center'>Web Designer</p>",
    "<p style='text-align:center'>Mobile App Design<br>&amp;<br>Development</p>",
    "<p style='text-align:center'>Graphic Design</p>",
  ],
  typeSpeed: 10,
  backSpeed: 20,
  backDelay: 2000,
  startDelay: 0,
  smartBackspace: true, // this is a default
  loop: true,
});

const toggleButton = document.getElementById("toggleButton");
const logoImage = document.getElementById("animasilogo");
const cahayaAnimation = document.getElementById("animasicahaya");

let isAnimationOn = false;

toggleButton.addEventListener("click", () => {
  isAnimationOn = !isAnimationOn;
  if (isAnimationOn) {
    logoImage.classList.add("animate-animasilogo");
    cahayaAnimation.classList.add("animate-cahaya");
    toggleButton.textContent = "Hentikan";
  } else {
    logoImage.classList.remove("animate-animasilogo");
    cahayaAnimation.classList.remove("animate-cahaya");
    toggleButton.textContent = "Gerakkan";
  }
});
