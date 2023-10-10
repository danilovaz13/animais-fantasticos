import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const eventos = ["click", "touchstart"];
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");

    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
