export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.classList.remove("popup_opened");
    }

    _handleEscClose(evt) {
              if (evt.key === 'Escape') {
              this.close();
              }
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
                if (evt.target.classList.contains("popup_opened")) {
                 this.close();
                }
                if (evt.target.classList.contains("popup__close-btn")) {
                  this.close();
                }
              });
    }

    loading(isLoading, loadingText) {
        if (isLoading) {
        this._btn.textContent = loadingText;
        } else {
            this._btn.textContent = loadingText;
        }
    }
}
