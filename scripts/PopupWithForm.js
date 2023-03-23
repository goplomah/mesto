import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector('.form');
        this._inputs = this._form.querySelectorAll('.form__input');
    }

    _getInputValues() {
        const inputsValues = {};
        this._inputs.forEach((input) => {
            inputsValues[input.name] = input.value;
        })

        return inputsValues;
    };

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    };

    close() {
        super.close();
        this._form.reset();
    }

    setInputValues(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        })
    }
}