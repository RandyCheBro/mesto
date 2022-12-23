import { Modal } from "./Modal.js";

export class ModalConfirm extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._modalForm = this._modalSelector.querySelector(".popup__form");
  }

  open(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
    super.open();
  }

  close() {
    super.close();
    this._handleFormSubmit = undefined;
  }

  setEventListeners() {
    super.setEventListeners();

    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    })
  }
}
