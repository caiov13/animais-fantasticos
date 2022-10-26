function initTabNav() {
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
initTabNav();

function initAccordion() {
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
initAccordion();

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();
