export class Modal {
 
  constructor(modalSelector) {
    this._modal = document.querySelector(modalSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._modal.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);

  }

  close() {
    this._modal.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._modal.addEventListener("mousedown", (evt) => {
      if(evt.target.classList.contains("popup_is-opened") || 
      evt.target.classList.contains("popup__close")) {
        this.close();
      }
    })
  }
}