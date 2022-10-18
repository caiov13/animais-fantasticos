const menu = document.querySelector(".menu");

const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

const faq = document.querySelector(".faq");
const dt = faq.querySelector("dt");

const dd = dt.nextElementSibling;

const animais = document.querySelector(".animais");

faq.innerHTML = "";
