export default function initAccordion() {
  const faqTitle = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (faqTitle.length) {
    faqTitle[0].classList.add(activeClass);
    faqTitle[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    faqTitle.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
