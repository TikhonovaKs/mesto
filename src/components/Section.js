class Section {
  constructor(element, items, renderer) {
    this._element = element;
    this._items = items;
    this._renderer = renderer;
  }

  addItem(item) {
    const card = this._renderer(item);
    const element = card.getElement();
    this._element.prepend(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(item);
    });

    return this._element;
  }
}

export default Section;
