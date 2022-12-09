export class Card {
 
  constructor(selector, elementData, openModalCard) {
    this._selector = selector;
    this.elementData = elementData;
    this._openModalCard = openModalCard;
  }

  _getTemplate() {
    this._template = document.querySelector(this._selector).
    content.querySelector(".element");
  }

  create() {
    this._getTemplate()
    this._card = this._template.cloneNode(true);
    this._cardImage = this._card.querySelector(".element__image");
    this._cardName = this._card.querySelector(".element__title");
    this._cardBtnRemove = this._card.querySelector(".element__trash");
    this._cardLike = this._card.querySelector(".element__like");
  
    this._cardImage.src = this.elementData.link;
    this._cardImage.alt = this.elementData.name;
    this._cardName.textContent = this.elementData.name;
    this._setEventListeners();
    
    return this._card;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openModalCard(this.elementData));
    this._cardBtnRemove.addEventListener('click', () => this._removeItem());
    this._cardLike.addEventListener('click', this._likeItem);
  }

  _likeItem(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _removeItem() {
    this._card.remove();
  }

}