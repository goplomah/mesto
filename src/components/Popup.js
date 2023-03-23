export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.classList.remove("popup_opened");
    }

    _handleEscClose(evt) {
              if (evt.key === 'Escape') {
              this.close();
              }
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
