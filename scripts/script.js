const popupOpen = document.querySelector('.profile__edit-button');
const popupEle = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupCloseOutside = document.querySelector('.popup__container');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const formSubmit = document.querySelector('.popup__submit');
const popupTitle = document.querySelector('.profile__name');
const popupSubTitle = document.querySelector('.profile__job');


function openPopup() {
  popupEle.classList.add('popup_is-opened');
}

function closePopup() {
  popupEle.classList.remove('popup_is-opened');
}


function formSubmitHandler(event) {
  event.preventDefault();
  popupTitle.textContent = nameInput.value;
  popupSubTitle.textContent = jobInput.value;
  closePopup();
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupCloseOutside.addEventListener('click', function (event) {
  console.log('кликнули по:', event.target);
  if (event.target === event.currentTarget) {
    closePopup();
  }
});
formElement.addEventListener('submit', formSubmitHandler);