const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
