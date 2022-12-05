export class Popup {
  _popupSelector
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);

  }

  close() {
    this._popupSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if(evt.target.classList.contains("popup_is-opened")) {
        this.close();
      }
      if(evt.target.classList.contains("popup__close")) {
        this.close();
      };
    })
  }
}