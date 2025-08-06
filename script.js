// Elements
const navbar = document.getElementById("navbar");
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const navList = document.getElementById("nav-links");
const sections = document.querySelectorAll(".section");

// 1) Header scroll effect
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// 2) Mobile menu toggle
toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// 3) Smooth fade‑in sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach((sec) => observer.observe(sec));

// 4) Scroll‑spy to highlight nav link
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (pageYOffset >= top) current = sec.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});
