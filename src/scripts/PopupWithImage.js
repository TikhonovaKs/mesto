import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupElement, name, link) {
    super(popupElement);
    this._name = name;
    this._link = link;
  }

  openPopup() {
    this._popupElement.querySelector('.popup__picture').src = this._link;
    this._popupElement.querySelector('.popup__picture').alt = this._name;
    this._popupElement.querySelector('.popup__picture-title').textContent = this._name;

    super.openPopup();
  }
}

export default PopupWithImage;
