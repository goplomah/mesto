import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.form');
        this._btn = this._popup.querySelector('.form__send');
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._id, this._element);
        });
        super.setEventListeners();
    }


    open(_id, element) {
        super.open();
        this._id = _id;
        this._element = element;
    }

    loading(isLoading, loadingText) {
        if (isLoading) {
        this._btn.textContent = loadingText;
        } else {
            this._btn.textContent = loadingText;
        }
    }
}