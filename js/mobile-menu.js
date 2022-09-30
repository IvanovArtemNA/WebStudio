(() => {
    const menuBtnRef = document.querySelector("[data-mobile__menu-open]");
    /*closeModalBtn: document.querySelector("[data-mobile__menu-close]"),*/
    const mobileMenuRef = document.querySelector("[data-mobile__menu]");
  

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        /*refs.openModalBtn.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);*/

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        /*function toggleModal() {
          refs.modal.classList.toggle("is-open");*/
        
        mobileMenuRef.classList.toggle("is-open");
    });
})();