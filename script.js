// scroll-animate.js
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // যখন div স্ক্রিনে আসবে তখন visible হবে
        entry.target.classList.add("visible");
      } else {
        // যখন div স্ক্রিন থেকে চলে যাবে তখন আবার hidden হবে
        entry.target.classList.remove("visible");
      }
    });
  }, {
    root: null,          // viewport
    threshold: 0,        // একেবারে দেখা দিলেই trigger
    rootMargin: "0px 0px -20% 0px" // নিচে ২০% ফাঁকা থাকলেই trigger হবে
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
