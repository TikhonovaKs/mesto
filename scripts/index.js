import Card from './Card.js';
import FormValidator from './FormValidator.js';

// выборка DOM элементов главная страница:
const popupsList = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__job');
const profileAddCardButton = document.querySelector('.profile__add-button');
// выборка DOM элементов для попапа Profile:
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameProfileInput = popupProfile.querySelector('.popup__input_data_name');
const jobProfileInput = popupProfile.querySelector('.popup__input_data_job');
// выборка DOM  элементов для попапа добавления новой карточки:
const popupCard = document.querySelector('.popup_type_card');
const popupPlaceNameInput = popupCard.querySelector('.popup__input_data_place');
const popupPlaceLinkInput = popupCard.querySelector('.popup__input_data_link');
const popupPlaceSaveButton = popupCard.querySelector('.popup__button-save');

const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type_error',
  buttonSelector: '.popup__button-save',
  buttonDisabledClass: 'button-save_inactive',
};

/**
 * Open current popup
 * @param {*} currentPopup
 */
const openPopup = function (currentPopup) {
  currentPopup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
};

/**
 * Close current popup
 * @param {*} currentPopup
 */
const closePopup = function (currentPopup) {
  currentPopup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
};

// Close popup by overlay or cross button
popupsList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  });
});

/**
 * Close popup by key esc
 * @param {*} evt
 */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup, formValidationConfig);
  }
}

/**
 * Open Profile popup
 */
const openPopupProfile = function () {
  const nameTitleValue = nameTitle.textContent;
  nameProfileInput.value = nameTitleValue;

  const jobTitleValue = jobTitle.textContent;
  jobProfileInput.value = jobTitleValue;

  openPopup(popupProfile);
  //toggleButton(popupProfileForm, formValidationConfig);
};
profileEditButton.addEventListener('click', openPopupProfile);

/**
 * Save inputs of Profile popup
 * @param {*} evt
 */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameProfileInput.value;
  nameTitle.textContent = nameValue;

  const jobValue = jobProfileInput.value;
  jobTitle.textContent = jobValue;

  const currentPopup = evt.currentTarget.closest('.popup');
  closePopup(currentPopup);
}
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

// Открытие формы добавления новой карточки:

/**
 * Open the form for adding a new card
 */
const openPopupAddCard = function () {
  openPopup(popupCard);
  //toggleButton(popupCardForm, formValidationConfig);
};
profileAddCardButton.addEventListener('click', openPopupAddCard);

/**
 * Add a new element in the list
 * @param {*} place
 */
function addPlace(place) {
  const card = new Card(config.selectorTemplatePlace, place, openPopup);
  const element = card.getElement();
  placeList.append(element);
  //добавить полученный placeElement в начало списка cardsContainer
}

/**
 * Handle the events of adding new elements
 * @param {*} evt
 */
function handleAddPlace(evt) {
  evt.preventDefault();

  const placeInputValue = popupPlaceNameInput.value;
  const linkInputValue = popupPlaceLinkInput.value;
  const place = {};
  place.name = placeInputValue;
  place.link = linkInputValue;
  addPlace(place);
  evt.target.closest('form').reset();

  const currentPopup = evt.currentTarget.closest('.popup');
  closePopup(currentPopup);
}
popupPlaceSaveButton.addEventListener('click', handleAddPlace);

const config = {
  selectorPlaceList: '.elements',
  selectorTemplatePlace: '.place-template',
};

const placeList = document.querySelector(config.selectorPlaceList);

//
for (const item of initialCards) {
  const card = new Card(config.selectorTemplatePlace, item, openPopup);
  const element = card.getElement();
  placeList.append(element);
}

/**
 * Activate form validation
 */
const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));

formList.forEach((form) => {
  const formValidation = new FormValidator(formValidationConfig, form);
  formValidation.enableValidation();
});
