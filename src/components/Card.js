class Card {
  constructor(template, cardArg) {
    this._template = template;
    this._name = cardArg.data.name;
    this._link = cardArg.data.link;
    this._id = cardArg.data._id;
    this._userId = cardArg.userId;
    this._ownerId = cardArg.data.ownerId ?? cardArg.data.owner._id;
    this._likes = cardArg.data.likes;
    this._isLiked = false;
    this._handleDeleteIconClick = cardArg.handleDeleteIconClick;
    this._handleLikeClick = cardArg.handleLikeClick;
    this._handleCardClick = cardArg.handleCardClick;

    this._element = this._getElementFromTemplate();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementLikeButton = this._element.querySelector('.element__like-button');
    this._elementTrashButton = this._element.querySelector('.element__trash-button');
    this._elementLikeAmount = this._element.querySelector('.element__like-amount');
    this.deletePlace = this.deletePlace.bind(this);
    this.likePlace = this.likePlace.bind(this);
    this._zoomImagePlace = this._zoomImagePlace.bind(this);
  }

  _getElementFromTemplate() {
    return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  }

  _addEventlisteners() {
    this._elementTrashButton?.addEventListener('click', () => this._handleDeleteIconClick(this));
    this._elementLikeButton.addEventListener('click', () => this._handleLikeClick(this));
    this._elementImage.addEventListener('click', this._zoomImagePlace);
  }

  deletePlace() {
    this._element.remove();
  }

  likePlace(numberLikes) {
    this._elementLikeButton.classList.toggle('element__like-button_is-active');
    this._isLiked = !this._isLiked;
    this._elementLikeAmount.textContent = numberLikes;
  }

  _zoomImagePlace() {
    this._handleCardClick(this._name, this._link);
  }

  getElement() {
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementLikeAmount.textContent = this._likes.length;
    if (this._userId !== this._ownerId) {
      this._elementTrashButton.remove();
    }

    this._addEventlisteners();

    return this._element;
  }
}

export default Card;
