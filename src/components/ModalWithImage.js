import { Modal } from "./Modal.js";

export class ModalWithImage extends Modal {
  _modalCardImage
  _modalCardName

  constructor(modalCardImage, modalCardName, modalSelector) {
    super(modalSelector);
    this._modalCardImage = modalCardImage;
    this._modalCardName = modalCardName;
  }

  open(photoData) {
    this._modalCardImage.src = photoData.link;
    this._modalCardImage.alt = photoData.alt;
    this._modalCardName.textContent = photoData.name;
    super.open();
  }
}