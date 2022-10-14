const links = document.querySelectorAll("a[href^='#']");

function handleLink(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

const corpo = document.querySelectorAll("body *");

function handleElement(event) {
  console.log(event.currentTarget);
}

function handleBody(event) {
  event.currentTarget.remove();
}

function handleKeyBoard(event) {
  if (event.key === "t") {
    document.body.style.fontSize = "32px";
  }
}

corpo.forEach((elemento) => {
  elemento.addEventListener("click", handleBody);
});

window.addEventListener("keydown", handleKeyBoard);
