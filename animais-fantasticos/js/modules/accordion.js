export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    //essa código abaixo, adiciona um class no elemento abaixo do dt
    item.nextElementSibling.classList.toggle(this.activeClass);
    //esse código abaixo adiciona uma class diretamente no dts
    item.classList.toggle(this.activeClass);
    //console.log(event.currentTarget); esse código é o msmo que colocar o this, siginifica seleciona o elemento.
  }
  //adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  //iniciar funcão
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
