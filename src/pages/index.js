import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import { formValidationConfig, config } from './constants.js';
import Api from '../components/Api.js';
import '../pages/index.css';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    'Content-Type': 'application/json',
    authorization: 'fead1d69-c3b2-448b-95f9-e26a4c2cfad0',
  },
});

let currentUserId = null;

/**
 * Create section of cards
 */
const placeContainer = document.querySelector(config.selectorPlaceContainer);
const templatePlaceList = document.querySelector(config.selectorTemplatePlaceList).content.children[0].cloneNode(true);
placeContainer.prepend(templatePlaceList);

const popupZoomImage = document.querySelector(config.selectorPopupZoomImage);
const zoomImage = new PopupWithImage(popupZoomImage);
zoomImage.setListeners();

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

const userInfo = new UserInfo('.profile__job', '.profile__name', '.profile__avatar-photo');

/**
 * Submit add place form
 * @param {*}
 */
function submitAddPlaceForm(data) {
  api
    .addPlace({ name: data.place, link: data.link })
    .then((item) => {
      section.saveItem(item);
      popupAddPlace.close();
    })
    .catch((err) => alert(err))
    .finally(() => popupAddPlace.renderLoading(false));
}

/**
 * Create a card
 * @param {*} item
 * @returns
 */
function renderer(item) {
  const cardsArg = {
    data: item,
    userId: currentUserId,
    handleCardClick: (name, link) => {
      zoomImage.open(name, link);
    },

    handleLikeClick: (card) => {
      if (card._isLiked) {
        api
          .disLikeCard(card._id)
          .then((cardData) => {
            const totalCount = cardData.likes.length;
            card.likePlace(totalCount);
          })
          .catch((err) => console.log(err));
      } else {
        api
          .likeCard(card._id)
          .then((cardData) => {
            const totalCount = cardData.likes.length;
            card.likePlace(totalCount);
          })
          .catch((err) => console.log(err));
      }
    },

    handleDeleteIconClick: (card) => {
      popupWithSubmit.open(handleDelete);

      function handleDelete() {
        api
          .deletePlace(card._id)
          .then(() => {
            card.deletePlace();
            popupWithSubmit.close();
          })
          .catch((err) => console.log(err));
      }
    },
  };

  const card = new Card(config.selectorTemplatePlace, cardsArg);
  return card.getElement();
}

let section = null;

Promise.all([api.getUserInfo(), api.getAllPlaces()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;
    userInfo.setUserInfo(userData);

    section = new Section(
      templatePlaceList,
      cards.map((item) => ({
        name: item.name,
        link: item.link,
        _id: item._id,
        ownerId: item.owner._id,
        likes: item.likes,
      })),
      renderer
    );
    section.renderItems();
  })
  .catch((err) => alert(err));

/**
 * Open the form for edit an avatar
 */
const popupEditAvatarElement = document.querySelector(config.selectorPopupEditeAvatar);
const formEditeAvatarElement = popupEditAvatarElement.querySelector('.popup__form');
const editAvatarButtonElement = document.querySelector(config.selectorAvatar);
const imageAvatarElement = document.querySelector(config.selectorImageAvatar);

const popupEditAvatar = new PopupWithForm(popupEditAvatarElement, submitEditAvatarForm, formValidationConfig);
popupEditAvatar.setListeners();
const editeAvatarformValidator = new FormValidator(formValidationConfig, formEditeAvatarElement);
editeAvatarformValidator.enableValidation();
editAvatarButtonElement.addEventListener('click', () => popupEditAvatar.open());

/**
 * Submit edit an avatar
 *
 */
function submitEditAvatarForm(link) {
  api
    .changeAvatar(link)
    .then((response) => {
      userInfo.setUserInfo(response);
      popupEditAvatar.close();
    })
    .catch((err) => alert(err))
    .finally(() => popupEditAvatar.renderLoading(false));
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

const popupDeleteCard = document.querySelector(config.selectorPopupDeleteCard);
const popupWithSubmit = new PopupWithSubmit(popupDeleteCard);
popupWithSubmit.setListeners();

/**
 * Submit edit profile form
 */
function submitEditProfileForm(data) {
  api
    .editProfileInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch((err) => alert(err))
    .finally(() => popupEditProfile.renderLoading(false));
}
