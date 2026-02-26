const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const year = document.getElementById("year");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const sectionByHash = new Map(
  navLinks.map((link) => [link.getAttribute("href"), link])
);

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const setActiveLink = (hash) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
};

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

const sections = Array.from(
  document.querySelectorAll("section[id].page-section")
);

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.52,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

if (window.location.hash && sectionByHash.has(window.location.hash)) {
  setActiveLink(window.location.hash);
} else {
  setActiveLink("#home");
}
