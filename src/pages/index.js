import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Modal } from "../components/Modal.js";
import { ModalWithImage } from "../components/ModalWithImage.js";
import { ModalWithForm } from "../components/ModalWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
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
    const cardElement = card.create();
    cardList.addItem(cardElement);
  })
}, elementList)
cardList.renderItems(elements);


const modalImage = new ModalWithImage(modalCardImage, modalCardName, modalPreviewImage)
modalImage.setEventListeners();


const modalAddingCard = new ModalWithForm({
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard({
      link: formData['image-link'],
      name: formData['image-name']
    }));
    modalAddingCard.close();
  }
}, modalAddCard)
modalAddingCard.setEventListeners();


const profileInfo = new UserInfo({nameSelector: popupTitle, jobSelector: popupSubTitle});

const modalEditingProfile = new ModalWithForm({
  handleFormSubmit: (formData) => {
    profileInfo.setUserInfo(formData["profile-name"], formData["profile-job"])
    modalEditingProfile.close();
  }
}, modalEditProfile)
modalEditingProfile.setEventListeners();


function openModalEditingProfile() {
  modalEditingProfile.open()
  formValidatorEditingProfile.resetValidation();
  const {name, description} = profileInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileJob.value = description;
}

function openModalAddingProfile() {
  formValidatorAddingCard.resetValidation();
  modalAddingCard.open();
}

function openModalCard(photoData) {
  modalImage.open(photoData)
}


const createCard = (element) => {
  const card = new Card(templateSelector, element, openModalCard);
  const cardElement = card.create();
  return cardElement;
}

btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', openModalAddingProfile);

const formValidatorEditingProfile = new FormValidator(validation, formEditingProfile);
formValidatorEditingProfile.enableValidation();

const formValidatorAddingCard = new FormValidator(validation, formAddingCard);
formValidatorAddingCard.enableValidation();

