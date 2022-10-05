const todasImagens = document.getElementsByTagName("img");
console.log(todasImagens);

const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);

const imagens = document.querySelectorAll("[src^='./img/imagem']");
console.log(imagens);

const primeiroH2 = document.querySelector(".animals-description h2");
console.log(primeiroH2);

const ultimoP = document.querySelectorAll("p");

console.log(ultimoP[--ultimoP.length]);
