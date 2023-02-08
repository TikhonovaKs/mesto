const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',
  buttonSelector: '.popup__button-save',
  buttonDisabledClass: 'button-save_inactive',
};

/**
 * Отменить отправку формы на бэкэнд
 * @param {*} event
 */
function disableSubmit(event) {
  event.preventDefault();
}

/**
 * Активировать валидацию формы
 * @param {*} config конфиг
 */
function enableValidation(config) {
  const form = document.querySelector(config.formSelector);

  form.addEventListener('submit', disableSubmit);

  addInputListners(form, config);
  toggleButton(form, config);

  console.log(form);
}

/**
 * Обработать ввод в Input
 * @param {*} event событие input
 * @param {*} config конфиг
 */
function handleFormInput(event, config) {
  const input = event.target; //event.target - ссылка на элемент, на котором сработало это событие
  // добавляем класс нашему инпуту (когла все валидно удаляем класс, когда не валидно оставляем):

  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  console.log(errorElement);

  if (input.validity.valid) {
    input.classList.remove(config.errorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

/**
 * Переключить кнопку
 * @param {*} form
 * @param {*} config
 */
const toggleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity(); //проверка всей формы на валидность

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle('button-save_inactive', !isFormValid);
};

/**
 * Добавить обработчики событий инпутам формы
 * @param {*} form форма
 * @param {*} config конфиг
 */
function addInputListners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));

  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config);
      toggleButton(form, config);
    });
    // (event)=> - анонимная функция, которая вызывает handleFormInput с параметрами event и config
    //при возникновении события инпута
  });
}

enableValidation(formValidationConfig);
