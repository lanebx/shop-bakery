document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let advantages = document.getElementById("advantages");
  

  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY || window.pageYOffset;
    const rect = advantages.getBoundingClientRect();

  
  scrollY >= 30
  ? rect.top < 0
    ? (header.classList.remove("header--scrolled"), header.classList.add("header--scrolled-green"))
    : (header.classList.remove("header--scrolled-green"), header.classList.add("header--scrolled"))
  : header.classList.remove("header--scrolled", "header--scrolled-green");

  });
})
