import Popup from './Popup.js';
import FormValidator from './FormValidator.js';

class PopupWithForm extends Popup {
  constructor(popupElement, submitFormHandler, formValidationConfig) {
    super(popupElement);
    this._submitFormHandler = submitFormHandler;
    this._popupForm = this._popupElement.querySelector('.popup__form');

    this._formValidator = new FormValidator(formValidationConfig, this._popupForm);
  }

  setListeners() {
    super.setListeners();
    this._popupForm.addEventListener('submit', (evt) => this._submitForm(evt));
  }

  _submitForm(evt) {
    evt.preventDefault();

    const data = {};
    const inputs = this._popupElement.querySelectorAll('.popup__input');
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    this._submitFormHandler(data);
    this.closePopup();

    this._popupForm.reset();
  }

  openPopup(data) {
    if (data) {
      for (const property in data) {
        const input = this._popupElement.querySelector(`.popup__input[name=${property}]`);
        input.value = data[property];
      }
    }
    this._formValidator.enableValidation();

    super.openPopup();
  }
}

export default PopupWithForm;
