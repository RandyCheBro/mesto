/* const popupOpen = document.querySelector('.profile__edit-button'); */
/* const popupClose = document.querySelectorAll('.popup__close');
const popupEle = document.querySelectorAll('.popup');*/
/* const formSubmit = document.querySelector(".popup__submit"); */

const formEditingProfile = document.querySelector(".popup__form");
const inputProfileName = document.querySelector(".popup__input_text_name");
const inputProfileJob = document.querySelector(".popup__input_text_job");
const formAddingCard = document.querySelector(".popup__form_adding_card");
const inputCardName = document.querySelector(".popup__input_text_image-name");
const inputCardLink = document.querySelector(".popup__input_text_image-link");
const popupTitle = document.querySelector(".profile__name");
const popupSubTitle = document.querySelector(".profile__job");

/* Функционал 5 ПР */
const modalBtns = document.querySelectorAll(".modal-open");
const modals = document.querySelectorAll(".popup");

function openModal(elem) {
  elem.classList.add("popup_is-opened");
  inputProfileName.value = popupTitle.textContent;
  inputProfileJob.value = popupSubTitle.textContent;
  inputCardName.value = popupTitle.textContent;//удалить/отредактировать
  inputCardLink.value = popupSubTitle.textContent;//удалить/отредактировать
}

function closeModal(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup__submit")
  ) {
    evt.target.closest(".popup").classList.remove("popup_is-opened");
  }
}


function formSubmitProfileHandler(evt) {
  evt.preventDefault();
  popupTitle.textContent = inputProfileName.value;
  popupSubTitle.textContent = inputProfileJob.value;
  closeModal(evt);
}

function formSubmitCardHandler(evt) {
  evt.preventDefault();
  const newNameCard = inputCardName.value
  const newLinkCard = inputCardLink.value
  
  const newCard = createCard({
    src: newLinkCard,
    alt: newNameCard,
    textContent: newNameCard
});
  
  elementList.prepend(newCard);
  closeModal(evt);
}

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    let data = evt.target.dataset.modalOpen;
    modals.forEach((modal) => {
      if (modal.dataset.modal == data) {
        openModal(modal);
      }
    });
  });
});
modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => closeModal(evt));
});

formEditingProfile.addEventListener("submit", formSubmitProfileHandler);
formAddingCard.addEventListener("submit", formSubmitCardHandler);

/* Работа с Темплэйт Элементами */
const elementList = document.querySelector(".elements__table");
const elementTemplate = document.querySelector(".element-template").content;

const removeItem = (element) => {
  element.remove();
}

const createCard = (element) => {
  const card = elementTemplate.cloneNode(true).querySelector(".element");
  const cardLink = card.querySelector(".element__image");
  const cardAlt = card.querySelector(".element__image");
  const cardName = card.querySelector(".element__title");
  const cardBtnRemove = card.querySelector(".element__trash");
  const cardLike = card.querySelector(".element__like");
 
  cardLink.src = element.link;
  cardAlt.alt = element.alt;
  cardName.textContent = element.name;
  
  cardBtnRemove.addEventListener('click', () => removeItem(card));
  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  })
  return card;
}

const elements = [
  {
    name: "Рио-де-Жанейро",
    link: "./images/rio.jpg",
    alt: "Рио-де-Жанейро",
  },
  {
    name: "Лондон",
    link: "./images/london.jpg",
    alt: "лондон",
  },
  {
    name: "Сингапур",
    link: "./images/Singapore.jpg",
    alt: "сингапур",
  },
  {
    name: "Нью-Йорк",
    link: "./images/new-york.jpg",
    alt: "Нью-Йорк",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/sankt-petersburg.jpg",
    alt: "Санкт-Петербург",
  },
  {
    name: "Париж",
    link: "./images/paris.jpg",
    alt: "Париж",
  },
];

elements.forEach(function (item) {
  const cardElement = createCard(item);
  elementList.append(cardElement);
});





/*   Работа с Попапом в 4ПР 
function openPopup() {
  popupEle.classList.add('popup_is-opened');
  inputProfileName.value = popupTitle.textContent;
  inputProfileJob.value = popupSubTitle.textContent;
}

function closePopup() {
  popupEle.classList.remove('popup_is-opened');
}


function formSubmitHandler(event) {
  event.preventDefault();
  popupTitle.textContent = inputProfileName.value;
  popupSubTitle.textContent = inputProfileJob.value;
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
formEditingProfile.addEventListener('submit', formSubmitHandler); */

/* elements.forEach(function (item) {
  const elementItem = elementTemplate.cloneNode(true);
  elementItem.querySelector(".element__image").src = item.link;
  elementItem.querySelector(".element__image").alt = item.alt;
  elementItem.querySelector(".element__title").textContent = item.name;
 
  elementItem.querySelector(".element__like").addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  })
  
  elementList.append(elementItem);
}); */