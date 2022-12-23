export class Card {

  constructor(userInfo, elementData, selector, openModalCard, onRemove, addLike, deleteLike) {
    this._myId = userInfo._id
    this._ownerId = elementData.owner._id;
    this.elementData = elementData;
    this._cardId = elementData._id;
    this._likes = elementData.likes
    this._selector = selector;
    this._openModalCard = openModalCard;
    this._onRemove = onRemove;
    this._addLike = addLike;
    this._deleteLike = deleteLike;

    this.delete = this.delete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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
    this._cardQuantityLike = this._card.querySelector(".element__quantity-like");

    this._cardImage.src = this.elementData.link;
    this._cardImage.alt = this.elementData.name;
    this._cardName.textContent = this.elementData.name;
    this._cardQuantityLike.textContent = this._likes.length;
    this._setEventListeners();
    this._showDeletion();
    this._showLike();
    return this._card;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._openModalCard(this.elementData));
    this._cardBtnRemove.addEventListener('click', this.handleRemove);
    this._cardLike.addEventListener('click', () => this._handleLike());
  }

  likeItem(data) {
    this._likes = data.likes;
    this._showLike()
    this._cardQuantityLike.textContent = this._likes.length;
  }

  _handleLike() {
    if (this._likes.some((key) => key._id === this._myId)) {
      this._deleteLike(this);
    } else {
      this._addLike(this);
    }
  }

  delete() {
    this._card.remove()
  }

  handleRemove() {
    this._onRemove(this);
  }

  _showDeletion() {
    if (this._ownerId === this._myId) {
      this._cardBtnRemove.classList.remove('element__trash_hidden');
    }
  }

  _showLike() {
    if (this._likes.some((key) => key._id === this._myId)) {
      this._cardLike.classList.add('element__like_active');
    } else {
      this._cardLike.classList.remove('element__like_active');
    }
  }
}