import { Modal } from "./Modal.js";

export class ModalWithForm extends Modal {
  _handleFormSubmit
  _modalForm
  constructor({ handleFormSubmit }, modalSelector) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._modalSelector.querySelector(".popup__form");
  }

  _getInputValues() {
    this._InputList = this._modalForm.querySelectorAll(".popup__input");
    this._formValues = {};

    this._InputList.forEach(input => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._modalForm.reset()
  }
}