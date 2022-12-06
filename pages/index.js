import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {Modal} from "../components/Modal.js";
import {ModalWithImage} from "../components/ModalWithImage.js";
import {ModalWithForm} from "../components/ModalWithForm.js";
import {
  elements,
  validation,
  formEditingProfile,
  inputProfileName,
  inputProfileJob,
  btnEditingProfile,
  btnAddingCard,
  formAddingCard,
  inputCardName,
  inputCardLink,
  popupTitle,
  popupSubTitle,
  modalCardImage,
  modalCardName,
  modals,
  elementList,
  templateSelector,
  modalEditProfile,
  modalAddCard,
  modalPreviewImage
} from "../utils/constants.js";

const cardList = new Section({
  renderer: (element => {
    const card = new Card(templateSelector, element, openModalCard);
    const CardElement = card.create();
    cardList.addItem(CardElement);
  })
}, elementList)

cardList.renderItems(elements);

/* function openModal(item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
} */

/* function closeModal(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
} */

function openModalEditingProfile() {
  inputProfileName.value = popupTitle.textContent;
  inputProfileJob.value = popupSubTitle.textContent;
  openModal(modalEditProfile);
}

function openModalAddingProfile() {
  openModal(modalAddCard);
  formValidatorAddingCard.resetValidation();
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

const modalImage = new ModalWithImage(modalCardImage, modalCardName, modalPreviewImage)
modalImage.setEventListeners();

function openModalCard(photoData) {
  /* modalCardImage.src = photoData.link;
  modalCardImage.alt = photoData.alt;
  modalCardName.textContent = photoData.name; */
  modalImage.open(photoData)
  /* openModal(modalPreviewImage); */
}

btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', openModalAddingProfile);
formEditingProfile.addEventListener("submit", handleSubmitProfileForm);
formAddingCard.addEventListener("submit", handleSubmitCreateCard);

/* modals.forEach((modal) => {
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
} */

const createCard = (element) => {
  const card = new Card(templateSelector, element, openModalCard);
  const cardElement = card.create();
  return cardElement;
}

/* elements.forEach(function (item) {
  const cardElement = createCard(item);
  elementList.append(cardElement);
}); */

const formValidatorEditingProfile = new FormValidator(validation, formEditingProfile);
formValidatorEditingProfile.enableValidation();

const formValidatorAddingCard = new FormValidator(validation, formAddingCard);
formValidatorAddingCard.enableValidation();

