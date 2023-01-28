// выборка DOM элементов главная страница:
const profileEditButton = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__job');
const profileAddCardButton = document.querySelector('.profile__add-button');
// выборка DOM элементов общего попап:
const popupCloseButton = document.querySelectorAll('.popup__button-close');
// выборка DOM элементов для попапа Profile:
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameProfileInput = popupProfile.querySelector('.popup__input_data_name');
const jobProfileInput = popupProfile.querySelector('.popup__input_data_job');
// выборка DOM  элементов для попапа добавления новой карточки:
const popupCard = document.querySelector('.popup_type_card');
const popupPlaceNameInput = popupCard.querySelector('.popup__input_data_place');
const popupPlacelinkInput = popupCard.querySelector('.popup__input_data_link');
const popupPlaceSaveButton = popupCard.querySelector('.popup__button-save');
// Выбор DOM элементов для попапа Зум картинки:
const popupZoomImage = document.querySelector('.popup_type_image');
// Выбор DOM элементов для управления списком мест:
const cardsContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#place-template').content;

// общая функция открытия попапа:
const openPopup = function (currentPopup) {
  currentPopup.classList.add('popup_is-opened');
};
// общая функция закрытия попапа:
const closePopup = function (event) {
  const currentPopup = event.currentTarget.closest('.popup');
  currentPopup.classList.remove('popup_is-opened');
};
popupCloseButton.forEach(function (element) {
  element.addEventListener('click', closePopup);
});

// Открытие попапа Profile:
const openPopupProfile = function () {
  const nameTitleValue = nameTitle.textContent;
  nameProfileInput.value = nameTitleValue;

  const jobTitleValue = jobTitle.textContent;
  jobProfileInput.value = jobTitleValue;
  openPopup(popupProfile);
};
profileEditButton.addEventListener('click', openPopupProfile);

// Сохранение введенных данных попапа Profile:
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameProfileInput.value;
  nameTitle.textContent = nameValue;

  const jobValue = jobProfileInput.value;
  jobTitle.textContent = jobValue;

  closePopup(evt);
}
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

// Открытие формы добавления новой карточки:
const openPopupAddCard = function () {
  openPopup(popupCard);
};
profileAddCardButton.addEventListener('click', openPopupAddCard);

// Создание нового элемента списка мест:
function createSinglePlace(place) {
  const placeElement = placeTemplate.cloneNode(true);

  const placeElementImage = placeElement.querySelector('.element__image');
  placeElementImage.src = place.url;
  // записываем в свойсто src элемента с классом .element__image
  // значения поля link каждого объекта item массива initialCards);
  placeElementImage.alt = place.name;
  placeElementImage.textContent = place.name;
  // записываем в свойсто textContent элемента с классом .element__name
  // значения поля name каждого объекта item массива initialCards)

  // Лайк элемента (места):
  const likeButton = placeElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  });
  // Удаление элемента
  const trashButton = placeElement.querySelector('.element__trash-button');
  trashButton.addEventListener('click', function () {
    const listElement = trashButton.closest('.element');
    listElement.remove();
  });
  // Открытие попапа картинки:
  const openPopupImage = function () {
    popupZoomImage.querySelector('.popup__picture').src = place.url;
    popupZoomImage.querySelector('.popup__picture').alt = place.name;
    popupZoomImage.querySelector('.popup__picture-title').textContent = place.name;
    openPopup(popupZoomImage);
  };
  placeElementImage.addEventListener('click', openPopupImage);
  return placeElement;
}
// Размещение нового элемента в список:
function placementSinglePlace(place) {
  const newPlaceElement = createSinglePlace(place);

  cardsContainer.prepend(newPlaceElement);
  //добавить полученный placeElement в начало списка cardsContainer
}

// функция обработчика событий добавления новых элементов
function handleAddPlace(evt) {
  evt.preventDefault();

  const placeInputValue = popupPlaceNameInput.value;
  const linkInputValue = popupPlacelinkInput.value;
  const place = {};
  place.name = placeInputValue;
  place.url = linkInputValue;
  placementSinglePlace(place);

  closePopup(evt);
}
popupPlaceSaveButton.addEventListener('click', handleAddPlace);

// Добавление "Карточек из коробки" на страницу:
initialCards.forEach(function (item) {
  const place = {};
  place.name = item.name;
  place.url = item.link;
  placementSinglePlace(place);
});
