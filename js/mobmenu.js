(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-mobmenu"),
    closeMenuBtn: document.querySelector(".mobmenu-close"),
    menu: document.querySelector(".mobmenu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
