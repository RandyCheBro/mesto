export class Section {
 
  constructor({ elements, renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._elements = elements;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._elements.forEach((element) => {
      this._renderer(element);
    })
  }
}