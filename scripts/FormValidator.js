class FormValidator {
  constructor(formValidationConfig, form) {
    this._config = formValidationConfig;
    this._form = form;

    this._disableSubmit = this._disableSubmit.bind(this);
    this._handleFormInput = this._handleFormInput.bind(this);
    this._toggleButton = this._toggleButton.bind(this);
  }

  /**
   * Активировать валидацию формы
   */
  enableValidation() {
    this._form.addEventListener('submit', this._disableSubmit);

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

  /**
   * Обработать ввод в Input
   * @param {*} event событие input
   */
  _handleFormInput(event) {
    const input = event.target; //event.target - ссылка на элемент, на котором сработало это событие
    // добавляем класс нашему инпуту (когла все валидно удаляем класс, когда не валидно оставляем):

    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    console.log(errorElement);

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
    const buttonSubmit = this._form.querySelector(this._config.buttonSelector);
    const isFormValid = this._form.checkValidity(); //проверка всей формы на валидность

    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle('button-save_inactive', !isFormValid);
  }

  /**
   * Добавить обработчики событий инпутам формы
   */
  _addInputListners() {
    const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    const that = this;
    inputList.forEach(function (item) {
      item.addEventListener('input', (event) => {
        that._handleFormInput(event);
        that._toggleButton();
      });
    });
  }
}

export default FormValidator;
