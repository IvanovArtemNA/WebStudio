const orderFormEl = document.querySelector('.js-modal__form');
const submitBtnEl = document.querySelector('.modal__submit-button');
const backdropEl = document.querySelector('.backdrop');
const userData = {};

const fillContactFormElements = () => {
  const userDataFormLs = JSON.parse(localStorage.getItem('userData'));

  for (const prop in userDataFormLs) {
    if (userDataFormLs.hasOwnProperty(prop)) {
      orderFormEl.elements[prop].value = userDataFormLs[prop];
    }
  }
};

fillContactFormElements();

const onOrderFormElChange = event => {
  const name = event.target.name;
  const value = event.target.value;

  userData[name] = value;

  localStorage.setItem('userData', JSON.stringify(userData));
};

const onOrderFormElSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('userData');

  onSubmitBtnClick();
};

const onSubmitBtnClick = () => {
  backdropEl.classList.add('is-hidden');
  swal('', 'Наш менеджер зв`яжеться з вами протяом 5 хвилин', 'success');
};

orderFormEl.addEventListener('change', onOrderFormElChange);
orderFormEl.addEventListener('submit', onOrderFormElSubmit);

// Работа с disabled

const inputCheckEl = document.querySelectorAll("input[type='checkbox']");
const btnFormSubmitEl = document.querySelector('button[disabled]');

const onOrderFormElInput = () => {
  if (boxChecked()) {
    btnFormSubmitEl.classList.remove('disabled');
    btnFormSubmitEl.disabled = false;
  } else {
    btnFormSubmitEl.classList.add('disabled');
    btnFormSubmitEl.disabled = true;
  }
};

orderFormEl.addEventListener('input', onOrderFormElInput);

const boxChecked = () => document.querySelectorAll('input:checked').length === inputCheckEl.length;
