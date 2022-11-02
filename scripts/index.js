const formEditingProfile = document.forms["edit-profile"];
const inputProfileName = document.querySelector(".popup__input_text_name");
const inputProfileJob = document.querySelector(".popup__input_text_job");
const btnEditingProfile = document.querySelector(".profile__edit-button");
const btnAddingCard = document.querySelector(".profile__add-button");
const formAddingCard = document.forms["add-card"];
const inputCardName = document.querySelector(".popup__input_text_image-name");
const inputCardLink = document.querySelector(".popup__input_text_image-link");
const popupTitle = document.querySelector(".profile__name");
const popupSubTitle = document.querySelector(".profile__job");
const modalCardImage = document.querySelector(".popup__image");
const modalCardName = document.querySelector(".popup__title-card");
const modals = document.querySelectorAll(".popup");
const elementList = document.querySelector(".elements__table");
const elementTemplate = document.querySelector(".element-template").content;
const modalEditProfile = document.querySelector(".popup_type_editing-profile");
const modalAddCard = document.querySelector(".popup_type_adding-card");
const modalPreviewImage = document.querySelector(".popup_type_image-preview");

function openModal(item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

function openModalEditingProfile() {
  inputProfileName.value = popupTitle.textContent;
  inputProfileJob.value = popupSubTitle.textContent;
  openModal(modalEditProfile);
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  popupTitle.textContent = inputProfileName.value;
  popupSubTitle.textContent = inputProfileJob.value;
  closeModal(modalEditProfile);
}

function handleSubmitCreateCard(evt) {
  evt.preventDefault();
  const newNameCard = inputCardName.value
  const newLinkCard = inputCardLink.value
  const newCard = createCard({
    link: newLinkCard,
    alt: newNameCard,
    name: newNameCard
  });
  evt.target.reset();
  elementList.prepend(newCard);
  closeModal(modalAddCard);
}

function openModalCard(photoData) {
  modalCardImage.src = photoData.link;
  modalCardImage.alt = photoData.alt;
  modalCardName.textContent = photoData.name;
  openModal(modalPreviewImage);
}

btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', () => openModal(modalAddCard));
formEditingProfile.addEventListener("submit", handleSubmitProfileForm);
formAddingCard.addEventListener("submit", handleSubmitCreateCard);

modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if(evt.target.classList.contains("popup_is-opened")) {
      closeModal(modal);
    }
    if(evt.target.classList.contains("popup__close")) {
      closeModal(modal);
    };
  });
});

const handleEscape = (evt) => {
  if(evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  };
}

const removeItem = (evt) => {
  evt.target.closest(".element").remove();
}

const likeItem = (evt) => {
  evt.target.classList.toggle('element__like_active');
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
  cardBtnRemove.addEventListener('click', removeItem);
  cardLike.addEventListener('click', likeItem);
  return card;
}

elements.forEach(function (item) {
  const cardElement = createCard(item);
  elementList.append(cardElement);
});
