const rio = new URL('../images/rio.jpg', import.meta.url);
const london = new URL('../images/london.jpg', import.meta.url);
const singapore = new URL('../images/Singapore.jpg', import.meta.url);
const newYork = new URL('../images/new-york.jpg', import.meta.url);
const sanktPetersburg = new URL('../images/sankt-petersburg.jpg', import.meta.url);
const paris = new URL('../images/paris.jpg', import.meta.url);

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
    link: rio,
    alt: "Рио-де-Жанейро",
  },
  {
    name: "Лондон",
    link: london,
    alt: "лондон",
  },
  {
    name: "Сингапур",
    link: singapore,
    alt: "сингапур",
  },
  {
    name: "Нью-Йорк",
    link: newYork,
    alt: "Нью-Йорк",
  },
  {
    name: "Санкт-Петербург",
    link: sanktPetersburg,
    alt: "Санкт-Петербург",
  },
  {
    name: "Париж",
    link: paris,
    alt: "Париж",
  },
];