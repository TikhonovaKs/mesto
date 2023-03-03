class Card {
  constructor(template, place, openPopup) {
    this._template = template;
    this._name = place.name;
    this._link = place.link;
    this._openPopup = openPopup;

    this._deletePlace = this._deletePlace.bind(this); // при помощи bind привязать контекст
    this._zoomImagePlace = this._zoomImagePlace.bind(this);
  }

  _getElementFromTemplate() {
    return document.querySelector(this._template).content.children[0].cloneNode(true);
  }

  _addEventlisteners() {
    this._element.querySelector('.element__trash-button').addEventListener('click', this._deletePlace);
    this._element.querySelector('.element__like-button').addEventListener('click', this._likePlace);
    this._element.querySelector('.element__image').addEventListener('click', this._zoomImagePlace);
  }

  _deletePlace() {
    this._element.remove();
  }

  _likePlace(evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  }

  _zoomImagePlace() {
    const popupZoomImage = document.querySelector('.popup_type_image');
    const popupZoomImageElement = popupZoomImage.querySelector('.popup__picture');
    const popupZoomImageName = popupZoomImage.querySelector('.popup__picture-title');

    popupZoomImageElement.src = this._link;
    popupZoomImageElement.alt = this._name;
    popupZoomImageName.textContent = this._name;
    this._openPopup(popupZoomImage);
  }

  getElement() {
    this._element = this._getElementFromTemplate();

    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;

    this._addEventlisteners();

    return this._element;
  }
}

export default Card;
