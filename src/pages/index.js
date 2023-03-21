import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, formValidationConfig, config } from './constants.js';
import '../pages/index.css';
 
/**
 * Create section of cards
 */
const placeContainer = document.querySelector(config.selectorPlaceContainer);
const templatePlaceList = document.querySelector(config.selectorTemplatePlaceList).content.children[0].cloneNode(true);
placeContainer.prepend(templatePlaceList);
const section = new Section(templatePlaceList, initialCards, renderer);
section.renderItems();

const popupZoomImage = document.querySelector(config.selectorPopupZoomImage);
const zoomImage = new PopupWithImage(popupZoomImage);
zoomImage.setListeners();

/**
 * Create a card
 * @param {*} item
 * @returns
 */
function renderer(item) {
  const card = new Card(config.selectorTemplatePlace, item, handleCardClick);
  return card.getElement();
}

/**
 * Open popup image
 */
function handleCardClick(name, link) {
  zoomImage.open(name, link);
}

/**
 * Submit add place form
 * @param {*} data
 */
function submitAddPlaceForm(data) {
  const newElement=renderer({ name: data.place, link: data.link })
  section.addItem(newElement);
}

/**
 * Open the form for adding a new card
 */
const popupAddPlaceElement = document.querySelector(config.selectorPopupAddPlace);
const addCardButtonElement = document.querySelector(config.selectorAddCardButton);
const formAddPlaceElement = popupAddPlaceElement.querySelector('.popup__form');

const popupAddPlace = new PopupWithForm(popupAddPlaceElement, submitAddPlaceForm, formValidationConfig);
popupAddPlace.setListeners();
const addPlaceformValidator = new FormValidator(formValidationConfig, formAddPlaceElement);
addPlaceformValidator.enableValidation();
addCardButtonElement.addEventListener('click', () => popupAddPlace.open());

const userInfo = new UserInfo('.profile__job', '.profile__name');

/**
 * Submit edit profile form
 * @param {*} data
 */
function submitEditProfileForm(data) {
  userInfo.setUserInfo(data);
}

/**
 * Open the form for edit a profile
 */
const popupEditProfileElement = document.querySelector(config.selectorPopupEditProfile);
const editProfileButtonElement = document.querySelector(config.selectorEditProfileButton);
const formEditeProfileElement = popupEditProfileElement.querySelector('.popup__form');

const popupEditProfile = new PopupWithForm(popupEditProfileElement, submitEditProfileForm, formValidationConfig);
popupEditProfile.setListeners();
const editeProfileformValidator = new FormValidator(formValidationConfig, formEditeProfileElement);
editeProfileformValidator.enableValidation();
editProfileButtonElement.addEventListener('click', () => popupEditProfile.open(userInfo.getUserInfo()));
