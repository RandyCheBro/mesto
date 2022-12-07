export class Modal {
  _modalSelector
  constructor(modalSelector) {
    this._modalSelector = modalSelector;
  }

  open() {
    this._modalSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));

  }

  close() {
    this._modalSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._modalSelector.addEventListener("mousedown", (evt) => {
      if(evt.target.classList.contains("popup_is-opened")) {
        this.close();
      }
      if(evt.target.classList.contains("popup__close")) {
        this.close();
      };
    })
  }
}