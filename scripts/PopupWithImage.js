import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {  
        super(popupSelector);
        this._image = this._popupSelector.querySelector('.popup__image');
        this._title = this._popupSelector.querySelector('.popup__text');
    }

    open(item) {
        this._title.textContent = item.name;
        this._image.src = item.link;
        this._image.alt = `${item.name}`;
        super.open();
    }
}