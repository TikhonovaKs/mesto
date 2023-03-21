class Section {
  constructor(container, items, renderer) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);

      this.addItem(element);
    });
  }
}

export default Section;
