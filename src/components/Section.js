export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._container.prepend(item);
    }

    rendererItems(items) {
        items.forEach(item => {
            this._container.append(this._renderer(item));
        });
    }
}