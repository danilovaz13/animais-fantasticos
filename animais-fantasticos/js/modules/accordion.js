export default function initAccordion() {
  const activeClass = "ativo";
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  function activeAccordion() {
    //essa código abaixo, adiciona um class no elemento abaixo do dt
    this.nextElementSibling.classList.toggle(activeClass);
    //esse código abaixo adiciona uma class diretamente no dts
    this.classList.toggle(activeClass);
    //console.log(event.currentTarget); esse código é o msmo que colocar o this, siginifica seleciona o elemento.
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
