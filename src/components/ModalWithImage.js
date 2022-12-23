import { Modal } from "./Modal.js";

export class ModalWithImage extends Modal {

  constructor(modalSelector) {
    super(modalSelector);
    this._modalCardImage = this._modalSelector.querySelector(".popup__image");
    this._modalCardName = this._modalSelector.querySelector(".popup__title-card");
  }

  open({ name, link }) {
    this._modalCardImage.src = link;
    this._modalCardImage.alt = name;
    this._modalCardName.textContent = name;
    super.open();
  }
}