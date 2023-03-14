/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Card = /*#__PURE__*/function () {\n  function Card(template, place, handleOpenZoomImage) {\n    _classCallCheck(this, Card);\n    this._template = template;\n    this._name = place.name;\n    this._link = place.link;\n    this._handleOpenZoomImage = handleOpenZoomImage;\n    this._element = this._getElementFromTemplate();\n    this._elementImage = this._element.querySelector('.element__image');\n    this._elementLikeButton = this._element.querySelector('.element__like-button');\n    this._deletePlace = this._deletePlace.bind(this); // при помощи bind привязать контекст\n    this._zoomImagePlace = this._zoomImagePlace.bind(this);\n    this._likePlace = this._likePlace.bind(this);\n  }\n  _createClass(Card, [{\n    key: \"_getElementFromTemplate\",\n    value: function _getElementFromTemplate() {\n      return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);\n    }\n  }, {\n    key: \"_addEventlisteners\",\n    value: function _addEventlisteners() {\n      this._element.querySelector('.element__trash-button').addEventListener('click', this._deletePlace);\n      this._elementLikeButton.addEventListener('click', this._likePlace);\n      this._elementImage.addEventListener('click', this._zoomImagePlace);\n    }\n  }, {\n    key: \"_deletePlace\",\n    value: function _deletePlace() {\n      this._element.remove();\n    }\n  }, {\n    key: \"_likePlace\",\n    value: function _likePlace() {\n      this._elementLikeButton.target.classList.toggle('element__like-button_is-active');\n    }\n  }, {\n    key: \"_zoomImagePlace\",\n    value: function _zoomImagePlace() {\n      this._handleOpenZoomImage(this._name, this._link);\n    }\n  }, {\n    key: \"createCard\",\n    value: function createCard() {\n      this._element.querySelector('.element__name').textContent = this._name;\n      this._elementImage.src = this._link;\n      this._elementImage.alt = this._name;\n      this._addEventlisteners();\n      return this._element;\n    }\n  }]);\n  return Card;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://web/./src/scripts/Card.js?");

/***/ }),

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar FormValidator = /*#__PURE__*/function () {\n  function FormValidator(formValidationConfig, form) {\n    _classCallCheck(this, FormValidator);\n    this._config = formValidationConfig;\n    this._form = form;\n    this._buttonSubmit = this._form.querySelector(this._config.buttonSelector);\n    this._handleFormInput = this._handleFormInput.bind(this);\n    this._toggleButton = this._toggleButton.bind(this);\n  }\n\n  /**\n   * Активировать валидацию формы\n   */\n  _createClass(FormValidator, [{\n    key: \"enableValidation\",\n    value: function enableValidation() {\n      this._form.addEventListener('submit', this._disableSubmit);\n      this._resetFormAddPlaceFields = this._resetFormAddPlaceFields.bind(this);\n      this._form.addEventListener('reset', this._resetFormAddPlaceFields);\n      this._addInputListners();\n      this._toggleButton();\n    }\n\n    /**\n     * Отменить отправку формы на бэкэнд\n     * @param {*} event\n     */\n  }, {\n    key: \"_disableSubmit\",\n    value: function _disableSubmit(event) {\n      event.preventDefault();\n    }\n  }, {\n    key: \"_resetFormAddPlaceFields\",\n    value: function _resetFormAddPlaceFields(event) {\n      var _this = this;\n      setTimeout(function () {\n        return _this._toggleButton();\n      }, 0);\n    }\n    /**\n     * Обработать ввод в Input\n     * @param {*} event событие input\n     */\n  }, {\n    key: \"_handleFormInput\",\n    value: function _handleFormInput(event) {\n      var input = event.target; //event.target - ссылка на элемент, на котором сработало это событие\n      // добавляем класс нашему инпуту (когла все валидно удаляем класс, когда не валидно оставляем):\n\n      var inputId = input.id;\n      var errorElement = document.querySelector(\"#\".concat(inputId, \"-error\"));\n      if (input.validity.valid) {\n        input.classList.remove(this._config.errorClass);\n        errorElement.textContent = '';\n      } else {\n        input.classList.add(this._config.errorClass);\n        errorElement.textContent = input.validationMessage;\n      }\n    }\n\n    /**\n     * Переключить кнопку\n     */\n  }, {\n    key: \"_toggleButton\",\n    value: function _toggleButton() {\n      var isFormValid = this._form.checkValidity(); //проверка всей формы на валидность\n\n      this._buttonSubmit.disabled = !isFormValid;\n      this._buttonSubmit.classList.toggle(this._config.buttonDisabledClass, !isFormValid);\n    }\n\n    /**\n     * Добавить обработчики событий инпутам формы\n     */\n  }, {\n    key: \"_addInputListners\",\n    value: function _addInputListners() {\n      var _this2 = this;\n      var inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));\n      inputList.forEach(function (item) {\n        item.addEventListener('input', function (event) {\n          _this2._handleFormInput(event);\n          _this2._toggleButton();\n        });\n      });\n    }\n  }]);\n  return FormValidator;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);\n\n//# sourceURL=webpack://web/./src/scripts/FormValidator.js?");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formValidationConfig\": () => (/* binding */ formValidationConfig),\n/* harmony export */   \"initialCards\": () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\nvar formValidationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  errorClass: 'popup__input_type_error',\n  buttonSelector: '.popup__button-save',\n  buttonDisabledClass: 'button-save_inactive'\n};\n\n//# sourceURL=webpack://web/./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ \"./src/scripts/Card.js\");\n/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidator.js */ \"./src/scripts/FormValidator.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ \"./src/scripts/constants.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n// выборка DOM элементов главная страница:\nvar popupsList = document.querySelectorAll('.popup');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar nameTitle = document.querySelector('.profile__name');\nvar jobTitle = document.querySelector('.profile__job');\nvar profileAddCardButton = document.querySelector('.profile__add-button');\n// выборка DOM элементов для попапа Profile:\nvar popupProfile = document.querySelector('.popup_type_edit');\nvar popupProfileForm = popupProfile.querySelector('.popup__form');\nvar nameProfileInput = popupProfile.querySelector('.popup__input_data_name');\nvar jobProfileInput = popupProfile.querySelector('.popup__input_data_job');\n// выборка DOM  элементов для попапа добавления новой карточки:\nvar popupCard = document.querySelector('.popup_type_card');\nvar popupPlaceNameInput = popupCard.querySelector('.popup__input_data_place');\nvar popupPlaceLinkInput = popupCard.querySelector('.popup__input_data_link');\nvar popupPlaceSaveButton = popupCard.querySelector('.popup__button-save');\nvar formAddPlace = popupCard.querySelector('.popup__form');\n// выборка DOM  элементов для попапа открытия карточки:\nvar popupZoomImage = document.querySelector('.popup_type_image');\nvar popupZoomImageElement = popupZoomImage.querySelector('.popup__picture');\nvar popupZoomImageName = popupZoomImage.querySelector('.popup__picture-title');\n\n/**\n * Open current popup\n * @param {*} currentPopup\n */\nvar openPopup = function openPopup(currentPopup) {\n  currentPopup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeByEscape);\n};\n\n/**\n * Close current popup\n * @param {*} currentPopup\n */\nvar closePopup = function closePopup(currentPopup) {\n  currentPopup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeByEscape);\n};\n\n// Close popup by overlay or cross button\npopupsList.forEach(function (popup) {\n  popup.addEventListener('mousedown', function (evt) {\n    if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__button-close')) {\n      closePopup(popup);\n    }\n  });\n});\n\n/**\n * Close popup by key esc\n * @param {*} evt\n */\nfunction closeByEscape(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    closePopup(openedPopup, _constants_js__WEBPACK_IMPORTED_MODULE_2__.formValidationConfig);\n  }\n}\n\n/**\n * Open Profile popup\n */\nvar openPopupProfile = function openPopupProfile() {\n  var nameTitleValue = nameTitle.textContent;\n  nameProfileInput.value = nameTitleValue;\n  var jobTitleValue = jobTitle.textContent;\n  jobProfileInput.value = jobTitleValue;\n  openPopup(popupProfile);\n  //toggleButton(popupProfileForm, formValidationConfig);\n};\n\nprofileEditButton.addEventListener('click', openPopupProfile);\n\n/**\n * Save inputs of Profile popup\n * @param {*} evt\n */\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  var nameValue = nameProfileInput.value;\n  nameTitle.textContent = nameValue;\n  var jobValue = jobProfileInput.value;\n  jobTitle.textContent = jobValue;\n  var currentPopup = popupProfile;\n  closePopup(currentPopup);\n}\npopupProfileForm.addEventListener('submit', handleProfileFormSubmit);\n\n// Открытие формы добавления новой карточки:\n\n/**\n * Open the form for adding a new card\n */\nvar openPopupAddCard = function openPopupAddCard() {\n  openPopup(popupCard);\n  //toggleButton(popupCardForm, formValidationConfig);\n};\n\nprofileAddCardButton.addEventListener('click', openPopupAddCard);\n\n/**\n * Add a new element in the list\n * @param {*} place\n */\nfunction addPlace(place) {\n  var card = new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config.selectorTemplatePlace, place, openPopup);\n  var element = card.createCard();\n  placeList.prepend(element);\n  //добавить полученный placeElement в начало списка cardsContainer\n}\n\n/**\n * Handle the events of adding new elements\n * @param {*} evt\n */\nfunction handleAddPlace(evt) {\n  evt.preventDefault();\n  var placeInputValue = popupPlaceNameInput.value;\n  var linkInputValue = popupPlaceLinkInput.value;\n  var place = {\n    name: placeInputValue,\n    link: linkInputValue\n  };\n  place.name = placeInputValue;\n  place.link = linkInputValue;\n  addPlace(place);\n  formAddPlace.reset();\n  var currentPopup = popupCard;\n  closePopup(currentPopup);\n}\nformAddPlace.addEventListener('submit', handleAddPlace);\nvar config = {\n  selectorPlaceList: '.elements',\n  selectorTemplatePlace: '.place-template'\n};\nvar placeList = document.querySelector(config.selectorPlaceList);\nvar _iterator = _createForOfIteratorHelper(_constants_js__WEBPACK_IMPORTED_MODULE_2__.initialCards),\n  _step;\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var item = _step.value;\n    var card = new _Card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config.selectorTemplatePlace, item, handleOpenZoomImage);\n    var element = card.createCard();\n    placeList.append(element);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\nfunction handleOpenZoomImage(name, link) {\n  popupZoomImageElement.src = link;\n  popupZoomImageElement.alt = name;\n  popupZoomImageName.textContent = name;\n  openPopup(popupZoomImage);\n}\n\n/**\n * Activate form validation\n */\nvar formList = Array.from(document.querySelectorAll(_constants_js__WEBPACK_IMPORTED_MODULE_2__.formValidationConfig.formSelector));\nformList.forEach(function (form) {\n  var formValidation = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants_js__WEBPACK_IMPORTED_MODULE_2__.formValidationConfig, form);\n  formValidation.enableValidation();\n});\n\n//# sourceURL=webpack://web/./src/scripts/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;