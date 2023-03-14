class FormValidator {
  constructor(formValidationConfig, form) {
    this._config = formValidationConfig;
    this._form = form;

    this._buttonSubmit = this._form.querySelector(this._config.buttonSelector);
    this._handleFormInput = this._handleFormInput.bind(this);
    this._toggleButton = this._toggleButton.bind(this);
  }

  /**
   * Активировать валидацию формы
   */
  enableValidation() {
    this._form.addEventListener('submit', this._disableSubmit);
   
    this._resetFormAddPlaceFields=this._resetFormAddPlaceFields.bind(this);
    this._form.addEventListener('reset', this._resetFormAddPlaceFields);
    this._addInputListners();
    this._toggleButton();
  }

  /**
   * Отменить отправку формы на бэкэнд
   * @param {*} event
   */
  _disableSubmit(event) {
    event.preventDefault();
  }
  _resetFormAddPlaceFields(event) {
    setTimeout(() => this._toggleButton(), 0)
  }
  /**
   * Обработать ввод в Input
   * @param {*} event событие input
   */
  _handleFormInput(event) {
    const input = event.target; //event.target - ссылка на элемент, на котором сработало это событие
    // добавляем класс нашему инпуту (когла все валидно удаляем класс, когда не валидно оставляем):

    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);

    if (input.validity.valid) {
      input.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    } else {
      input.classList.add(this._config.errorClass);
      errorElement.textContent = input.validationMessage;
    }
  }

  /**
   * Переключить кнопку
   */
  _toggleButton() {
    const isFormValid = this._form.checkValidity(); //проверка всей формы на валидность

    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(this._config.buttonDisabledClass, !isFormValid);
  }

  /**
   * Добавить обработчики событий инпутам формы
   */
  _addInputListners() {
    const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    
    inputList.forEach (item => {
      item.addEventListener('input', (event) => {
        this._handleFormInput(event);
        this._toggleButton();
      });
    });
  }

}
export default FormValidator;
