import { classes } from "../scripts/classes";

class FormValidation {
    constructor(classes, formElement) {
        this._formElement = formElement;
        this._inputSelector = classes.inputSelector;
        this._submitButtonSelector = classes.submitButtonSelector;
        this._inactiveButtonClass = classes.inactiveButtonClass;
        this._inputErrorClass = classes.inputErrorClass;
    }
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
      };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
      };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
      };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

    _disabledButton() {
        this._buttonElement.setAttribute("disabled", "disabled");
        this._buttonElement.classList.add(this._inactiveButtonClass);
      };

    _enabledButton() {
        this._buttonElement.removeAttribute("disabled");
        this._buttonElement.classList.remove(this._inactiveButtonClass);
      };

    _toggleButtonSave() {
        if (this._hasInvalidInput()) {
          this._disabledButton();
        } else {
          this._enabledButton();
        }
      };

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonSave();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            this._toggleButtonSave();
          });
        });
      };
    
    enableValidation() {
           this._setEventListeners();
      };

    resetValidation() {
      this._toggleButtonSave();

      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    };
}



export {classes, FormValidation};