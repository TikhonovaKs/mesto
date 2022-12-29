// выборка DOM элементов
const popupElement = document.querySelector(".popup");
const formCloseButtonElement = popupElement.querySelector(".popup__icon-close");
const profileEditButtonElement = document.querySelector(".profile__edit-button");

// Находим форму в DOM
const formElement = document.querySelector(".popup__profile-editing");
// Находим поля формы в DOM
const nameInput = popupElement.querySelector(".popup__input-name");
const jobInput = popupElement.querySelector(".popup__input-job");
const nameTitle = document.querySelector(".profile__name");
const jobTitle = document.querySelector(".profile__job");

const openPopup = function() {
   popupElement.classList.add("popup_is-opened");

   const nameTitleValue = nameTitle.textContent;
   nameInput.value = nameTitleValue;

   const jobTitleValue = jobTitle.textContent;
   jobInput.value = jobTitleValue;
   }

const closePopup = function () {
    popupElement.classList.remove("popup_is-opened");
  }

// регистрация обработчиков событий по клику
profileEditButtonElement.addEventListener("click", openPopup);
formCloseButtonElement.addEventListener("click", closePopup);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();

    const nameValue = nameInput.value;
    nameTitle.textContent = nameValue;

    const jobValue=jobInput.value;
    jobTitle.textContent=jobValue;
    
    closePopup();
    } 

formElement.addEventListener('submit', handleFormSubmit); 