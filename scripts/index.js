// выборка DOM элементов
const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__button-close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
const nameInput = popupElement.querySelector('.popup__input_data_name');
const jobInput = popupElement.querySelector('.popup__input_data_job');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__job');

const openPopup = function () {
  const nameTitleValue = nameTitle.textContent;
  nameInput.value = nameTitleValue;

  const jobTitleValue = jobTitle.textContent;
  jobInput.value = jobTitleValue;
  popupElement.classList.add('popup_is-opened');
};

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  nameTitle.textContent = nameValue;

  const jobValue = jobInput.value;
  jobTitle.textContent = jobValue;

  closePopup();
}

// регистрация обработчиков событий по клику
profileEditButtonElement.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
