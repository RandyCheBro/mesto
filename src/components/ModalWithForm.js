import { Modal } from "./Modal.js";

export class ModalWithForm extends Modal {
 
  constructor({ handleFormSubmit }, modalSelector) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._modalSelector.querySelector(".popup__form");
    this._inputList = this._modalForm.querySelectorAll(".popup__input");
    this._modalSubmitBtn = this._modalForm.querySelector(".popup__submit");
    this._defaultBtnTextContent = this._modalSubmitBtn.textContent;
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

  renderLoading(isLoading, text) {
    if(isLoading) {
      this._modalSubmitBtn.textContent = text;
      console.log(this._modalSubmitBtn.textContent)
    } else {
      this._modalSubmitBtn.textContent = this._defaultBtnTextContent;
      console.log(this._modalSubmitBtn.textContent)
    }
  }
}