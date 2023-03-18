import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import { initialCards, formValidationConfig, config } from './constants.js';
import '../pages/index.css';

const placeContainer = document.querySelector(config.selectorPlaceContainer);
const section = new Section(config.selectorTemplatePlaceList, initialCards, renderer);
placeContainer.prepend(section.getElement());

function renderer(item) {
  const card = new Card(config.selectorTemplatePlace, item, handleCardClick);
  return card;
}

function handleCardClick(name, link) {
  const popupZoomImage = document.querySelector(config.selectorPopupZoomImage);
  const zoomImage = new PopupWithImage(popupZoomImage, name, link);
  zoomImage.setListeners();
  zoomImage.openPopup();
}

function submitAddPlaceForm(data) {
  section.addPlace({ name: data.place, link: data.link });
}

/**
 * Open the form for adding a new card
 */
const popupAddPlaceElement = document.querySelector(config.selectorPopupAddPlace);
const addCardButtonElement = document.querySelector(config.selectorAddCardButton);
const popupAddPlace = new PopupWithForm(popupAddPlaceElement, submitAddPlaceForm, formValidationConfig);
popupAddPlace.setListeners();

addCardButtonElement.addEventListener('click', () => popupAddPlace.openPopup());
const userInfo = new UserInfo();

function submitEditProfileForm(data) {
  userInfo.setUserInfo(data);
}

/**
 * Open the form for edit a profile
 */
const popupEditProfileElement = document.querySelector(config.selectorPopupEditProfile);
const editProfileButtonElement = document.querySelector(config.selectorEditProfileButton);
const popupEditProfile = new PopupWithForm(popupEditProfileElement, submitEditProfileForm, formValidationConfig);
popupEditProfile.setListeners();

editProfileButtonElement.addEventListener('click', () => popupEditProfile.openPopup(userInfo.getUserInfo()));

/**
 * Activate form validation
 */
const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));

formList.forEach((form) => {
  const formValidation = new FormValidator(formValidationConfig, form);
  formValidation.enableValidation();
});
