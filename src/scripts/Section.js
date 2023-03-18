class Section {
  constructor(template, items, renderer) {
    this._template = template;
    this._items = items;
    this._renderer = renderer;
  }

  _getElementFromTemplate() {
    return document.querySelector(this._template).content.children[0].cloneNode(true);
  }

  addPlace(item) {
    const card = this._renderer(item);
    const element = card.getElement();
    this._element.prepend(element);
  }

  getElement() {
    this._element = this._getElementFromTemplate();
    this._items.forEach((item) => {
        this.addPlace(item);
    });

    return this._element;
  }
}

export default Section;
