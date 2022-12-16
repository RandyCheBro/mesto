export class Modal {
 
  constructor(modalSelector) {
    this._modalSelector = document.querySelector(modalSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._modalSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);

  }

  close() {
    this._modalSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._modalSelector.addEventListener("mousedown", (evt) => {
      if(evt.target.classList.contains("popup_is-opened") || 
      evt.target.classList.contains("popup__close")) {
        this.close();
      }
    })
  }
}