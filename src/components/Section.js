class Section {
  constructor(container, items, renderer, api) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
    this._api = api;
  }

  saveItem(item) {
    this._api
      .addPlace({name: item.place, link: item.link})
      .then((data) => {
        const element = this._renderer(data);
        this.addItem(element)
      })
      .catch((err) => console.log(err))
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer({name: item.name, link: item.link, _id: item._id});

      this.addItem(element);
    });
  }
}

export default Section;
