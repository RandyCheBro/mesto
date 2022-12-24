import './index.css';
import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { ModalWithImage } from "../components/ModalWithImage.js";
import { ModalWithForm } from "../components/ModalWithForm.js";
import { ModalConfirm } from "../components/ModalConfirm.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  validation,
  formEditingProfile,
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
  modalConfirmSelector,
  modalAvatar,
  formAvatar,
  btnEditingAvatar,
  avatarSelector
} from "../utils/constants.js";


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '6a0db938-2403-4f98-8704-25b1d87eef40',
    'Content-Type': 'application/json'
  }
})

let userInfo


const cardList = new Section({
  renderer: (elementData => {
    cardList.addItem(createCard(elementData));
  })
}, elementList)


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo = userData;
    profileInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
      avatar: userData.avatar
    })
    cardList.renderItems(cards.reverse())
  })
  .catch((err) => console.log(err))


const modalImage = new ModalWithImage(modalPreviewImage)
modalImage.setEventListeners();

const modalEditingAvatar = new ModalWithForm({
  handleFormSubmit: (formData) => {
    modalEditingAvatar.renderLoading(true, "Сохранение...")
    api.changeAvatar({
      avatar: formData['avatar-link']
    })
      .then((data) => {
        btnEditingAvatar.src = data.avatar;
        modalEditingAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        modalEditingAvatar.renderLoading(false);
      })
  }
}, modalAvatar)
modalEditingAvatar.setEventListeners()


const modalAddingCard = new ModalWithForm({
  handleFormSubmit: (formData) => {
    modalAddingCard.renderLoading(true, "Создание...")
    api.addCard({
      name: formData['image-name'],
      link: formData['image-link']
    })
      .then((data) => {
        cardList.addItem(createCard(data));
        modalAddingCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        modalAddingCard.renderLoading(false);
      })
  }
}, modalAddCard)
modalAddingCard.setEventListeners();

const profileInfo = new UserInfo({ nameSelector: popupTitle, jobSelector: popupSubTitle, avatarSelector: avatarSelector });

const modalEditingProfile = new ModalWithForm({
  handleFormSubmit: (formData) => {
    modalEditingProfile.renderLoading(true, "Сохранение...");
    api.changeData({
      name: formData["profile-name"],
      about: formData["profile-job"]
    })
      .then((data) => {
        profileInfo.setUserInfo({
          name: data.name,
          job: data.about,
          avatar: userInfo.avatar
        })
        modalEditingProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        modalEditingProfile.renderLoading(false);
      })
  }
}, modalEditProfile)
modalEditingProfile.setEventListeners();



const formValidatorEditingProfile = new FormValidator(validation, formEditingProfile);
formValidatorEditingProfile.enableValidation();

const formValidatorAddingCard = new FormValidator(validation, formAddingCard);
formValidatorAddingCard.enableValidation();

const formValidatorAvatar = new FormValidator(validation, formAvatar);
formValidatorAvatar.enableValidation();

function openModalEditingProfile() {
  modalEditingProfile.open()
  formValidatorEditingProfile.resetValidation();
  const data = profileInfo.getUserInfo();
  modalEditingProfile.setInputValues(data);
}

function openModalAddingProfile() {
  formValidatorAddingCard.resetValidation();
  modalAddingCard.open();
}

function openModalCard(photoData) {
  modalImage.open(photoData)
}

function openModalAvatar() {
  formValidatorAvatar.resetValidation()
  modalEditingAvatar.open()
}

const modalConfirm = new ModalConfirm(modalConfirmSelector)
modalConfirm.setEventListeners()


function createCard(element) {
  const card = new Card(userInfo, element, templateSelector, openModalCard,
    (card) => {
      modalConfirm.open(
        () => {
          api.deleteCard(card._cardId).then(() => {
            card.delete()
          })
            .catch((err) => console.log(err))
          modalConfirm.close()
        }
      )
    },
    async (card) => {
      try {
        const res = await api.addLike(card._cardId);
        card.likeItem(res);
      } catch (err) {
        console.log(err);
      }
    },
    async (card) => {
      try {
        const res = await api.deleteLike(card._cardId);
        card.likeItem(res);
      } catch (err) {
        console.log(err);
      }
    }
  )
  return card.create();
}


btnEditingAvatar.addEventListener('click', openModalAvatar)
btnEditingProfile.addEventListener('click', openModalEditingProfile)
btnAddingCard.addEventListener('click', openModalAddingProfile);
