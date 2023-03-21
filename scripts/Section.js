export class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._containerSelector.prepend(item);
    }

    rendererItems() {
        this._items.forEach(item => {
            this._containerSelector.append(this._renderer(item));
        });
    }
}