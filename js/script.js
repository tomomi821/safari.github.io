// export * from "./swiper.js";
// export * from "./image.js";
// export * from "./safari.js";
"use strict";

let introduction = document.querySelector(".c_introduction");
const lists = [
  {
    img: "animal_01.png",
  },
  {
    img: "animal_02.png",
  },
  {
    img: "animal_03.png",
  },
  {
    img: "animal_04.png",
  },
];
for (let i = 0; i < lists.length; i++) {
  const { img } = lists[i];
  const content = `<li class="c_introduction__item" role="listitem"><a class="c_introduction__link" href="#"><img class="c_introduction__image" src="img/${img}" alt=""/></a></li>`;
  introduction.insertAdjacentHTML("beforeend", content);
}
let hamburger = document.getElementById("c_hamburger");
let headerNav = document.getElementById("c_headerNav");
let check = document.getElementById("check");
let formButton = document.querySelector(".c_button__text");
let inquiry = document.getElementById("inquiry");
let textArea = document.querySelector(".--textArea");
let selectItem = document.querySelector(".--select");
let select = document.getElementById("selects");
let selectInner = document.querySelector(".c_form__selectInner");
let pageHeight = document.documentElement.scrollHeight;
let viewHeight = document.documentElement.clientHeight;
let bar = document.getElementById("bar");
hamburger.addEventListener(
  "click",
  function () {
    this.classList.toggle("js_active");
    headerNav.classList.toggle("js_active");
  },
  false
);
check.addEventListener(
  "change",
  function () {
    if (formButton.disabled === true) {
      formButton.disabled = false;
    } else {
      formButton.disabled = true;
    }
  },
  false
);
inquiry.addEventListener(
  "keyup",
  function () {
    if (inquiry.value.length < 1 || inquiry.value.length > 10) {
      inquiry.classList.add("js-error");
      textArea.classList.add("js-error");
    } else {
      inquiry.classList.remove("js-error");
      textArea.classList.remove("js-error");
    }
  },
  false
);
select.addEventListener(
  "change",
  function () {
    if (select.options[0].selected === true) {
      selectItem.classList.add("js-error");
      selectInner.classList.add("js-error");
    } else {
      selectItem.classList.remove("js-error");
      selectInner.classList.remove("js-error");
    }
  },
  false
);
formButton.addEventListener(
  "click",
  function (e) {
    if (inquiry.value.length < 1 || inquiry.value.length > 10) {
      e.preventDefault();
      inquiry.classList.add("js-error");
      selectItem.classList.add("js-error");
      textArea.classList.add("js-error");
      selectInner.classList.add("js-error");
    } else {
      inquiry.classList.remove("js-error");
      textArea.classList.remove("js-error");
      selectItem.classList.remove("js-error");
      selectInner.classList.remove("js-error");
    }
  },
  false
);
window.addEventListener(
  "scroll",
  function () {
    let scrolled = window.scrollY;
    let percent = (scrolled / (pageHeight - viewHeight)) * 100;
    bar.style.width = `${percent}%`;
  },
  false
);
const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
