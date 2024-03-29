export class Section {

  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(elements) {
    elements.forEach((element) => {
      this._renderer(element);
    })
  }
}