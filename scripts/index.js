/* const popupOpen = document.querySelector('.profile__edit-button'); */
/* const popupClose = document.querySelectorAll('.popup__close');
const popupEle = document.querySelectorAll('.popup');*/

const formElement = document.querySelector('.popup__form');
const formElementName = document.querySelector('.popup__input_text_name');
const formElementJob = document.querySelector('.popup__input_text_job');
const formSubmit = document.querySelector('.popup__submit');
const popupTitle = document.querySelector('.profile__name');
const popupSubTitle = document.querySelector('.profile__job'); 
{ //массив из коробки
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
}
/* Функционал 5 ПР */
  const modalBtns = document.querySelectorAll('.modal-open');
  const modals = document.querySelectorAll('.popup');
  const likes = document.querySelectorAll('.element__like')
  

  function openModal(elem) {
    elem.classList.add('popup_is-opened');
  }

  function closeModal(evt) {
    if (evt.target.classList.contains('popup__close') || 
    evt.target.classList.contains('popup__submit')) {
      evt.target.closest('.popup').classList.remove('popup_is-opened')
    }
  }
  
  function formSubmitHandler(evt) {
    evt.preventDefault();
    popupTitle.textContent = formElementName.value;
    popupSubTitle.textContent = formElementJob.value;
    closeModal(evt);
  }

  modalBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      let data = evt.target.dataset.modalOpen;
      modals.forEach(modal => {
        if (modal.dataset.modal == data) {
          openModal(modal)
        }
      })
    })
  })
  
  modals.forEach(modal => {
    modal.addEventListener('click', evt => closeModal(evt));
  })
  
  formElement.addEventListener('submit', formSubmitHandler);

  likes.forEach(item => {/* Добавление и удаления лайка */
    item.addEventListener('click', () => {
      if (!item.classList.contains('element__like_active')) {
        item.classList.add('element__like_active')
      } else {item.classList.remove('element__like_active')}
    })
  })
  
  
  
  
  
  
  
  




/*   Работа с Попапом в 4ПР 
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
popupEle.addEventListener('click', function (event) {
  console.log('кликнули по:', event.target);
  if (event.target === event.currentTarget) {
    closePopup();
  }
});
formElement.addEventListener('submit', formSubmitHandler); */