const popupOpen = document.querySelector(".profile__edit-button");
const popupEle = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

function openPopup() {
  popupEle.classList.add(".popup_is-opened");
}

function closePopup() {
  popupEle.classList.remove(".popup_is-opened");
}

popupOpen.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);