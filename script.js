document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");
  let advantages = document.getElementById("advantages");
  let burger = document.querySelector(".header__burger");
  let navItems = document.querySelectorAll(".header__item a"); // Выбираем все элементы списка
  let modal = document.getElementById("myModal"); // Получаем модальное окно
  let callButton = document.querySelector(".modern-bakery__call-button"); // Получаем кнопку "Demander un appel"
  let callButtonHeader = document.querySelector(".header__call-button"); // Получаем кнопку "Demander un appel"
  let closeButton = document.querySelector(".close"); // Получаем кнопку закрытия модального окна


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

  callButtonHeader.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  callButton.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Закрытие модального окна при клике на кнопку закрытия
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Закрытие модального окна при клике вне его области
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });


});

function showMessage() {
  alert("Votre demande d'appel a été envoyée!");
}

