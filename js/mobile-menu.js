(() => {
  const menuBtnRef = document.querySelector('[data-mobile__menu-open]');
  const mobileMenuRef = document.querySelector('[data-mobile__menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
