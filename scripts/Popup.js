export class Popup {
    constructor(popupSelector) {
        this._popups = document.querySelectorAll(".popup");
    }

    _handleEscClose(evt) {
            if (evt.key === 'Escape') {
            closePopup(document.querySelector(".popup_opened"));
            }
    };

    _setEventListeners() {
        this._popups.forEach((popup) => {
            popup.addEventListener("mousedown", (evt) => {
              if (evt.target.classList.contains("popup_opened")) {
                closePopup(popup);
              } 
              if (evt.target.classList.contains("popup__close-btn")) {
                closePopup(popup);
              }
            });
            });
    };

    open(popup) {
            document.addEventListener('keydown', closeEscPopup);
            popup.classList.add("popup_opened");
    };

    close(popup) {
            document.removeEventListener('keydown', closeEscPopup);
            popup.classList.remove("popup_opened");
    };
}