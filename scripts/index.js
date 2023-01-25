// выборка DOM элементов формы редактирования профиля
const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__button-close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
// Находим форму редактирования профиля в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы редактирования профиля в DOM
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

// регистрация обработчиков событий по клику формы редактирования профиля
profileEditButtonElement.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);

// Шесть карточек «из коробки»:
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

// Выбор DOM элементов для управления списком мест:
const listOfPlaces = document.querySelector('.elements');
const placeTemplate = document.querySelector('#place-template').content;
// открытие, закрытие попапа:
const popupAddElement = document.querySelector('.popup-add');
const profileAddButtonElement = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAddElement.querySelector('.popup-add__button-close');
// форма
const formAddElement = document.querySelector('.popup-add__form');
const popupAddCreateButton = formAddElement.querySelector('.popup-add__button-create');

// Добавление "Карточек из коробки" на страницу:
initialCards.forEach(function (item) {
  createSinglePlace(item.name, item.link);
});

// Открытие формы добавления нового места:
const openPopupAdd = function () {
  popupAddElement.classList.add('popup-add_is-opened');
};
// Закрытие формы:
const closePopupAdd = function () {
  popupAddElement.classList.remove('popup-add_is-opened');
};
profileAddButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButton.addEventListener('click', closePopupAdd);

// Создание нового элемента списка мест:
function createSinglePlace(name, url) {
  const placeElement = placeTemplate.cloneNode(true);

  placeElement.querySelector('.element__image').src = url;
  // записываем в свойсто src элемента с классом .element__image
  // значения поля link каждого объекта item массива initialCards);
  placeElement.querySelector('.element__name').textContent = name;
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
  const imagePlaceElement = placeElement.querySelector('.element__image');
  const imageCloseButtonElement = document.querySelector('.popup-image__button-close');
  const popupImageElement = document.querySelector('.popup-image');
  const openPopupImage = function () {
    popupImageElement.querySelector('.popup-image__picture').src=url;
    popupImageElement.querySelector('.popup-image__name').textContent=name;
    popupImageElement.classList.add('popup-image_is-opened');
  };
  imagePlaceElement.addEventListener('click', openPopupImage);
  // Закрытие попапа картинки:
  const closePopupImage = function() {
    popupImageElement.classList.remove('popup-image_is-opened');
  };
  imageCloseButtonElement.addEventListener('click', closePopupImage);

  listOfPlaces.prepend(placeElement);
  //добавить полученный placeElement в начало списка listOfPlaces
}

// добавление новых элементов
function addPlace(evt) {
  evt.preventDefault();

  const placeInput = popupAddElement.querySelector('.popup-add__input_data_place');
  const linkInput = popupAddElement.querySelector('.popup-add__input_data_link');
  const placeInputValue = placeInput.value;
  const linkInputValue = linkInput.value;
  createSinglePlace(placeInputValue, linkInputValue);

  closePopupAdd(); // вызываем функцию закрытия попапа
}
popupAddCreateButton.addEventListener('click', addPlace);
