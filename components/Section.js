export class Section {
  /* _renderedItems */
  _container
  _renderer
  constructor({ renderer }, containerSelector) {
    /* this._renderedItems = data.items; */
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems(items) {
    items.forEach((element) => {
      this._renderer(element);
    })
  }
}