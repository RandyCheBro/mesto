const popupOpen = document.querySelector(".profile__edit-button");
const popupEle = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupCloseOutside = document.querySelector(".popup__container");

function openPopup() {
  popupEle.classList.add("popup_is-opened");
}

function closePopup() {
  popupEle.classList.remove("popup_is-opened");
}

popupOpen.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
popupCloseOutside.addEventListener("click", function (event) {
  console.log("кликнули по:", event.target);
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__name");
const jobInput = document.querySelector(".popup__job");

function formSubmitHandler () {
  evt.preventDefault();
}