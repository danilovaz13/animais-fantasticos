export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = innerHeight * 0.6;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade;

      if (isSectionVisible < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animarScroll();

    window.addEventListener("scroll", animarScroll);
  }
}
