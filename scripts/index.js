const popupOpen = document.querySelector('.profile__edit-button');
const popupEle = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const formElementName = document.querySelector('.popup__input_name');
const formElementJob = document.querySelector('.popup__input_job');
const formSubmit = document.querySelector('.popup__submit');
const popupTitle = document.querySelector('.profile__name');
const popupSubTitle = document.querySelector('.profile__job');


function openPopup() {
  popupEle.classList.add('popup_is-opened');
  formElementName.value = popupTitle.textContent;
  formElementJob.value = popupSubTitle.textContent;
}

function closePopup() {
  popupEle.classList.remove('popup_is-opened');
}


function formSubmitHandler(event) {
  event.preventDefault();
  popupTitle.textContent = formElementName.value;
  popupSubTitle.textContent = formElementJob.value;
  closePopup();
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
/*popupEle.addEventListener('click', function (event) {
  console.log('кликнули по:', event.target);
  if (event.target === event.currentTarget) {
    closePopup();
  }
});*/
formElement.addEventListener('submit', formSubmitHandler);