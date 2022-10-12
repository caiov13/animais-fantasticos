const primeiraImagem = document.querySelector("img");

console.log(primeiraImagem.offsetTop);

function somaImagens() {
  const todasImagens = document.querySelectorAll("img");
  let soma = 0;
  todasImagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

const menu = document.querySelector(".menu");

const menuMobile = window.matchMedia("(max-width: 720px)");

if (menuMobile.matches) {
  menu.classList.add("menu-mobile");
} else {
  console.log("Usuário de desktop");
}
