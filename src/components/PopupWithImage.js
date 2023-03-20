import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);

    this._popupPicture = this._popupElement.querySelector('.popup__picture');
    this._popupPictureTitle = this._popupElement.querySelector('.popup__picture-title');
  }

  open(name, link) {
    this._popupPicture.src = link;
    this._popupPicture.alt = name;
    this._popupPictureTitle.textContent = name;

    super.open();
  }
}

export default PopupWithImage;
