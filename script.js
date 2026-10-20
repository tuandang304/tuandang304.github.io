const root = document.documentElement;

// Theme toggle (dark by default, choice remembered per browser)
document.getElementById("themeToggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Soft glow that follows the mouse
const spot = document.querySelector(".spotlight");
addEventListener("pointermove", (e) => {
  spot.style.setProperty("--x", e.clientX + "px");
  spot.style.setProperty("--y", e.clientY + "px");
});

// Highlight the sidebar link of the section in view
const links = [...document.querySelectorAll(".toc a")];
const byId = Object.fromEntries(links.map((a) => [a.hash.slice(1), a]));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      links.forEach((a) => a.classList.remove("active"));
      byId[en.target.id]?.classList.add("active");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

// Certificate filters
const filterBtns = document.querySelectorAll(".filters button");
filterBtns.forEach((btn) => btn.addEventListener("click", () => {
  filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
  const f = btn.dataset.filter;
  document.querySelectorAll(".gallery figure").forEach((fig) => {
    fig.classList.toggle("hide", f !== "all" && fig.dataset.cat !== f);
  });
}));

// Lightbox for project, award and certificate images
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".media:not(.avatar) img, .gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    if (img.parentElement.classList.contains("missing")) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
  });
});
lightbox.addEventListener("click", () => { lightbox.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lightbox.hidden = true; });

document.getElementById("year").textContent = new Date().getFullYear();
