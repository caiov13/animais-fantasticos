const menu = document.querySelectorAll(".menu a");

menu.forEach((texto) => {
  texto.classList.add("ativo");
});

menu.forEach((texto) => {
  texto.classList.remove("ativo");
});

menu[0].classList.add("ativo");

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

const link = document.querySelector("a[href^='http']");
link.setAttribute("href", "https://www.youtube.com");
