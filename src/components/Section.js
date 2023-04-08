class Section {
  constructor(container, items, renderer) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  saveItem(item) {
    const element = this._renderer(item);
    this.addItem(element);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer({
        name: item.name,
        link: item.link,
        _id: item._id,
        ownerId: item.ownerId,
        likes: item.likes,
      });

      this.addItem(element);
    });
  }
}

export default Section;
