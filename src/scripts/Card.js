class Card {
  constructor(template, place, handleOpenZoomImage) {
    this._template = template;
    this._name = place.name;
    this._link = place.link;
    this._handleOpenZoomImage = handleOpenZoomImage;

    this._element = this._getElementFromTemplate();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementLikeButton = this._element.querySelector('.element__like-button');
    this._deletePlace = this._deletePlace.bind(this); // при помощи bind привязать контекст
    this._likePlace = this._likePlace.bind(this);
    this._zoomImagePlace = this._zoomImagePlace.bind(this);

    // this._zoomImagePlace = this._zoomImagePlace.bind(this);
  }

  _getElementFromTemplate() {
    return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  }

  _addEventlisteners() {
    this._element.querySelector('.element__trash-button').addEventListener('click', this._deletePlace);
    this._elementLikeButton.addEventListener('click', this._likePlace);
    this._elementImage.addEventListener('click', this._zoomImagePlace);
  }

  _deletePlace() {
    this._element.remove();
  }

  _likePlace() {
    this._elementLikeButton.target.classList.toggle('element__like-button_is-active');
  }

    _zoomImagePlace() {
    this._handleOpenZoomImage(this._name,this._link);
  }

  getElement() {
    this._element.querySelector('.element__name').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._addEventlisteners();

    return this._element;
  }
}

export default Card;

// class Card {
//   constructor(template, place, handleOpenZoomImage) {
//     this._template = template;
//     this._name = place.name;
//     this._link = place.link;
//     this._handleOpenZoomImage = handleOpenZoomImage;
//     this._element = this._getElementFromTemplate();

//     this._elementImage = this._element.querySelector('.element__image');
//     this._elementLikeButton = this._element.querySelector('.element__like-button');
//     this._deletePlace = this._deletePlace.bind(this); // при помощи bind привязать контекст
//     this._zoomImagePlace = this._zoomImagePlace.bind(this);
//     this._likePlace = this._likePlace.bind(this);
//   }

//   _getElementFromTemplate() {
//     return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
//   }

//   _addEventlisteners() {
//     this._element.querySelector('.element__trash-button').addEventListener('click', this._deletePlace);
//     this._elementLikeButton.addEventListener('click', this._likePlace);
//     this._elementImage.addEventListener('click', this._zoomImagePlace);
//   }

//   _deletePlace() {
//     this._element.remove();
//   }

//   _likePlace() {
//     this._elementLikeButton.target.classList.toggle('element__like-button_is-active');
//   }

//   _zoomImagePlace() {
//     this._handleOpenZoomImage(this._name,this._link);
//   }

//   createCard() {
//     this._element.querySelector('.element__name').textContent = this._name;
//     this._elementImage.src = this._link;
//     this._elementImage.alt = this._name;

//     this._addEventlisteners();

//     return this._element;
//   }
// }

// export default Card;
