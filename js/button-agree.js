() => {
  const menuBtnRef = document.querySelector('[data-check__agreement]');
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-checked');
  });
};
