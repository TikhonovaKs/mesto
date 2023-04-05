import Popup from './Popup.js';

class PopupWithSubmit extends Popup {
  constructor(popupElement) {
    super(popupElement);
    

    this._onOkButtonleClick = this._onOkButtonleClick.bind(this);
    this._buttonSubmit = this._popupElement.querySelector('.popup__button-save');
  }

  setListeners() {
    super.setListeners();
    this._buttonSubmit.addEventListener('click', this._onOkButtonleClick);
  }

  _onOkButtonleClick() {
    this.close();
    this._successCallback();
  }

  open(successCallback) {
    this._successCallback = successCallback;
    super.open();
  }
}

export default PopupWithSubmit;
