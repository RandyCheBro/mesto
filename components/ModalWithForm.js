import { Modal } from "./Modal.js";

export class ModalWithForm extends Modal {
  _handleSubmit
  
  constructor({ handleSubmit }, modalSelector) {
    super(modalSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {

  }
}