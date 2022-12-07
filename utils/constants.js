export const formEditingProfile = document.forms["edit-profile"];
export const inputProfileName = document.querySelector(".popup__input_text_name");
export const inputProfileJob = document.querySelector(".popup__input_text_job");
export const btnEditingProfile = document.querySelector(".profile__edit-button");
export const btnAddingCard = document.querySelector(".profile__add-button");
export const formAddingCard = document.forms["add-card"];
export const inputCardName = document.querySelector(".popup__input_text_image-name");
export const inputCardLink = document.querySelector(".popup__input_text_image-link");
export const popupTitle = ".profile__name";
export const popupSubTitle = ".profile__job";
export const modalCardImage = document.querySelector(".popup__image");
export const modalCardName = document.querySelector(".popup__title-card");
export const modals = document.querySelectorAll(".popup");
export const elementList = ".elements__table";
export const templateSelector = ".element-template";
export const modalEditProfile = document.querySelector(".popup_type_editing-profile");
export const modalAddCard = document.querySelector(".popup_type_adding-card");
export const modalPreviewImage = document.querySelector(".popup_type_image-preview");

export const validation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};

export const elements = [
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