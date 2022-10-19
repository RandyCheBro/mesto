const formEditingProfile = document.querySelector(".popup__form_aditing_profile");
const inputProfileName = document.querySelector(".popup__input_text_name");
const inputProfileJob = document.querySelector(".popup__input_text_job");
const btnEditingProfile = document.querySelector(".profile__edit-button");
const btnAddingCard = document.querySelector(".profile__add-button");
const formAddingCard = document.querySelector(".popup__form_adding_card");
const inputCardName = document.querySelector(".popup__input_text_image-name");
const inputCardLink = document.querySelector(".popup__input_text_image-link");
const popupTitle = document.querySelector(".profile__name");
const popupSubTitle = document.querySelector(".profile__job");
const modalCloseBtns = document.querySelectorAll(".popup__close");
const modalCardImage = document.querySelector(".popup-card__image");
const modalCardName = document.querySelector(".popup-card__title");
const modals = document.querySelectorAll(".popup");
const elementList = document.querySelector(".elements__table");
const elementTemplate = document.querySelector(".element-template").content;

function openModal(item) {
  item.classList.add("popup_is-opened");
}

function closeModal(item) {
  item.classList.remove("popup_is-opened");
}

function openModalEditingProfile() {
  const popup = document.querySelector(".popup_editing_profile");
  inputProfileName.value = popupTitle.textContent;
  inputProfileJob.value = popupSubTitle.textContent;
  openModal(popup);
}

function openModalAddingCard() {
  const popup = document.querySelector(".popup_adding_card");
  inputCardName.value = "";
  inputCardLink.value = "";
  openModal(popup);
}

btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', openModalAddingCard);

modalCloseBtns.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
})

function handlerSubmitProfileForm(evt) {
  evt.preventDefault();
  const popup = formEditingProfile.closest(".popup")
  popupTitle.textContent = inputProfileName.value;
  popupSubTitle.textContent = inputProfileJob.value;
  closeModal(popup);
}

function handlerSubmitCreateCard(evt) {
  evt.preventDefault();
  const newNameCard = inputCardName.value
  const newLinkCard = inputCardLink.value
  const popup = formAddingCard.closest(".popup")
  const newCard = createCard({
    link: newLinkCard,
    alt: newNameCard,
    name: newNameCard
});
  elementList.prepend(newCard);
  closeModal(popup);
}

function openModalCard(photoData) {
  modalCardImage.src = photoData.link; 
  modalCardImage.alt = photoData.alt; 
  modalCardName.textContent = photoData.name;
  const popup = document.querySelector(".popup_opening_card");
  openModal(popup);
}

formEditingProfile.addEventListener("submit", handlerSubmitProfileForm);
formAddingCard.addEventListener("submit", handlerSubmitCreateCard);

/* Работа с Темплэйт Элементами */
const removeItem = (element) => {
  element.remove();
}

const createCard = (element) => {
  const card = elementTemplate.cloneNode(true).querySelector(".element");
  const cardImage = card.querySelector(".element__image");
  const cardName = card.querySelector(".element__title");
  const cardBtnRemove = card.querySelector(".element__trash");
  const cardLike = card.querySelector(".element__like");
 
  cardImage.src = element.link;
  cardImage.alt = element.alt;
  cardName.textContent = element.name;

  cardImage.addEventListener('click', () => openModalCard(element));
  cardBtnRemove.addEventListener('click', () => removeItem(card));
  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  })
  return card;
}

elements.forEach(function (item) {
  const cardElement = createCard(item);
  elementList.append(cardElement);
});
