import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {  
        super(popupSelector);
        this._image = this._popupSelector.querySelector('.popup__image');
        this._title = this._popupSelector.querySelector('.popup__text');
    }

    open({link, name}) {
        this._image.src = link.link;
        this._image.alt = `${name.name}`;
        this._title.textContent = name.name;
        super.open();
    }
}