import { Modal } from "./Modal.js";

export class ModalWithForm extends Modal {
 
  constructor({ handleFormSubmit }, modalSelector) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._modalSelector.querySelector(".popup__form");
    this._inputList = this._modalForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};

    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    })

    return formValues;
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