document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let advantages = document.getElementById("advantages");
  let burger = document.querySelector(".header__burger");
  let navItems = document.querySelectorAll(".header__item a"); // Выбираем все элементы списка

  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY || window.pageYOffset;
    const rect = advantages.getBoundingClientRect();

    scrollY >= 30
      ? rect.top < 0
        ? (header.classList.remove("header--scrolled"),
          header.classList.add("header--scrolled-green"))
        : (header.classList.remove("header--scrolled-green"),
          header.classList.add("header--scrolled"))
      : header.classList.remove("header--scrolled", "header--scrolled-green");
  });

  // Функция для добавления класса header--active
  function toggleActiveClass() {
    header.classList.toggle("header--active");
  }

  // Обработчик клика на бургер
  burger.addEventListener("click", toggleActiveClass);

  // Обработчики клика для элементов списка
  navItems.forEach(function (item) {
    item.addEventListener("click", toggleActiveClass);
  });
});
