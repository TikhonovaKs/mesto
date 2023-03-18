class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;

    this._closeByEscape = this._closeByEscape.bind(this);
    this._closeByOverlayCross = this._closeByOverlayCross.bind(this);
    // this.setListeners();
  }

  _closeByEscape(evt) {
    if (evt.key === 'Escape') {
      //const openedPopup = this._popupElement.querySelector('.popup_is-opened');
      this.closePopup();
    }
  }

  _closeByOverlayCross(evt) {
    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button-close')) {
      this.closePopup();
    }
  }

  setListeners() {
    this._popupElement.addEventListener('keydown', this._closeByEscape);
    this._popupElement.removeEventListener('keydown', this._closeByEscape);
    this._popupElement.addEventListener('mousedown', this._closeByOverlayCross);
  }

  openPopup() {
    this._popupElement.classList.add('popup_is-opened');
  }

  closePopup() {
    this._popupElement.classList.remove('popup_is-opened');
  }
}

export default Popup;
