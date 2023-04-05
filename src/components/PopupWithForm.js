import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupElement, submitFormHandler) {
    super(popupElement);
    this._submitFormHandler = submitFormHandler;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupInput = this._popupElement.querySelectorAll('.popup__input');
  }

  setListeners() {
    super.setListeners();
    this._popupForm.addEventListener('submit', (evt) => this._submitForm(evt));
  }

  _submitForm(evt) {
    evt.preventDefault();

    const data = this._getInputValues();
    this._submitFormHandler(data);
    this.close();
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
        input.value = data[property];
      }
    }
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

}

export default PopupWithForm;
