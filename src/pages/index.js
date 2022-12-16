import './index.css';
import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
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
  popupTitle,
  popupSubTitle,
  elementList,
  templateSelector,
  modalEditProfile,
  modalAddCard,
  modalPreviewImage,
  quantityLike,
  modalConfirm,
  formConfirm
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '6a0db938-2403-4f98-8704-25b1d87eef40',
    'Content-Type': 'application/json'
  }
})
console.log(api.getUserInfo())
console.log(api.getInitialCards())

const cardList = new Section({elements,
  renderer: (elementData => {
    cardList.addItem(createCard(elementData));
  })
}, elementList)
cardList.renderItems();


const modalImage = new ModalWithImage(modalPreviewImage)
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

const profileInfo = new UserInfo({ nameSelector: popupTitle, jobSelector: popupSubTitle });

const modalEditingProfile = new ModalWithForm({
  handleFormSubmit: (formData) => {
    profileInfo.setUserInfo({
      name: formData["profile-name"],
      job: formData["profile-job"]
    })
    modalEditingProfile.close();
  }
}, modalEditProfile)
modalEditingProfile.setEventListeners();

const formValidatorEditingProfile = new FormValidator(validation, formEditingProfile);
formValidatorEditingProfile.enableValidation();

const formValidatorAddingCard = new FormValidator(validation, formAddingCard);
formValidatorAddingCard.enableValidation();

function openModalEditingProfile() {
  modalEditingProfile.open()
  formValidatorEditingProfile.resetValidation();
  const { name, description } = profileInfo.getUserInfo();
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


function createCard(element) {
  const card = new Card(templateSelector, element, openModalCard);
  return card.create();
}


btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', openModalAddingProfile);
