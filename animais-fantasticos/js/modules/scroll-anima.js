export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = innerHeight * 0.6;
    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade;

      if (isSectionVisible < 0) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animarScroll();
    window.addEventListener("scroll", this.animarScroll);
  }
}
