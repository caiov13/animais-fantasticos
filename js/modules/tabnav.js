export default function initTabNav() {
  const animalsImage = document.querySelectorAll(".js-tabmenu li");
  const animalsDescription = document.querySelectorAll(
    ".js-tabcontent section"
  );

  if (animalsImage.length && animalsDescription.length) {
    animalsDescription[0].classList.add("ativo");

    function activeTab(index) {
      animalsDescription.forEach((section) => {
        section.classList.remove("ativo");
      });
      animalsDescription[index].classList.add("ativo");
    }

    animalsImage.forEach((image, index) => {
      image.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
