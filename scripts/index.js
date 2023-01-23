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

// выборка DOM элементов формы добавления контента
const profileAddButtonElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup-add');
const popupAddCloseButton = popupAddElement.querySelector('.popup-add__button-close');
// Находим форму добавления контента в DOM
const formAddElement = document.querySelector('.popup-add__form');
const popupAddCreateButton = formAddElement.querySelector('.popup-add__button-create');
// Находим поля формы добавления контента в DOM
const placeInput = popupAddElement.querySelector('.popup-add__input_data_place');
const linkInput = popupAddElement.querySelector('.popup-add__input_data_link');
// находим контейнер списка элементов
const listOfPlaces = document.querySelector('.elements');



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


// открытие формы добавления контента
const openPopupAdd = function () {
  popupAddElement.classList.add('popup-add_is-opened');
};
// закрытие формы добавления контента
const closePopupAdd = function () {
  popupAddElement.classList.remove('popup-add_is-opened');
};

// регистрация обработчиков событий по клику формы добавления контента
profileAddButtonElement.addEventListener('click', openPopupAdd);
popupAddCloseButton.addEventListener('click', closePopupAdd);


// добавление новых элементов
function addPlace (evt) {
  evt.preventDefault();
  const placeTemplate = document.querySelector('#place-template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);

  const placeInputValue = placeInput.value;
  const linkInputValue = linkInput.value;

  placeElement.querySelector('.element__image').src = linkInputValue;
  placeElement.querySelector('.element__name').textContent = placeInputValue;

  const likeButton = placeElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like-button_is-active');
  }
  );

  const trashButton = placeElement.querySelector('.element__trash-button');
  trashButton.addEventListener('click', function () {
    const listElement = trashButton.closest('.element');
    listElement.remove();
  });

  listOfPlaces.prepend(placeElement);

  closePopupAdd(); // вызываем функцию закрытия попапа
};
  
popupAddCreateButton.addEventListener('click', addPlace);