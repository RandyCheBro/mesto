export class Card {
  _element;
  _selector
  _template;
  _card;
  _cardImage;
  _cardName;
  _cardBtnRemove;
  _cardLike;
  _openModalCard

  constructor(selector, element, openModalCard) {
    this._selector = selector;
    this._element = element;
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
  
    this._cardImage.src = this._element.link;
    this._cardImage.alt = this._element.name;
    this._cardName.textContent = this._element.name;
    this._setEventListeners();
    
    return this._card;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openModalCard(this._element));
    this._cardBtnRemove.addEventListener('click', this._removeItem);
    this._cardLike.addEventListener('click', this._likeItem);
  }

  _likeItem(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _removeItem(evt) {
    evt.target.closest(".element").remove();
  }

}