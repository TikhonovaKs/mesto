class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;

    this._closeByEscape = this._closeByEscape.bind(this);
    this._closeByOverlayCross = this._closeByOverlayCross.bind(this);
  }

  _closeByEscape(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _closeByOverlayCross(evt) {
    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button-close')) {
      this.close();
    }
  }

  setListeners() {
    this._popupElement.addEventListener('mousedown', this._closeByOverlayCross);
  }

  open() {
    this._popupElement.classList.add('popup_is-opened');
    this._popupElement.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    this._popupElement.classList.remove('popup_is-opened');
    this._popupElement.removeEventListener('keydown', this._closeByEscape);
  }

  // renderLoading(isLoading) {
  //   if (isLoading) {
  //     popup__button - title - load.classList.add('button-title_visible');
  //   } else {
  //     popup__button - title.classList.remove('button-title_visible');
  //   }
  // }
}

export default Popup;
