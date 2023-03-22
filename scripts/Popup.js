export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
    }

    _handleEscClose() {

    }

    setEventListeners() {
        this._popupSelector.addEventListener("mousedown", (evt) => {
                if (evt.target.classList.contains("popup_opened")) {
                 this.close();
                }
                if (evt.target.classList.contains("popup__close-btn")) {
                  this.close();
                }
              });
    }
}
