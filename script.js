
const year = document.getElementById("year");
const topButton = document.getElementById("topButton");

// Tahun otomatis di footer
year.textContent = new Date().getFullYear();

// Tombol kembali ke atas
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
}, { passive: true });

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
