import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupElement, submitFormHandler) {
    super(popupElement);
    this._submitFormHandler = submitFormHandler;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupInput = this._popupElement.querySelectorAll('.popup__input');
    this._popupButtonTitleLoad = this._popupElement.querySelector('.popup__button-title-load');
    this._popupButtonTitle = this._popupElement.querySelector('.popup__button-title');
  }

  setListeners() {
    super.setListeners();
    this._popupForm.addEventListener('submit', (evt) => this._submitForm(evt));
  }

  _submitForm(evt) {
    evt.preventDefault();
    this.renderLoading(true);
    const data = this._getInputValues();
    this._submitFormHandler(data);
    
  }

  _getInputValues() {
    const data = {};
    const inputs = this._popupInput;
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }

  open(data) {
    if (data) {
      for (const property in data) {
        const input = this._popupElement.querySelector(`.popup__input[name=${property}]`);
        if (input) input.value = data[property];
      }
    }
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._popupButtonTitle.classList.remove('popup__button-visible');
      this._popupButtonTitleLoad.classList.add('popup__button-visible');
    } else {
      this._popupButtonTitle.classList.add('popup__button-visible');
      this._popupButtonTitleLoad.classList.remove('popup__button-visible');
    }
  }
}

export default PopupWithForm;
