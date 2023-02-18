const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

showInputError = (item, errorMessage) => {
    item.classList.add('form__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('form__input-error_active');
};

hideInputError = item => {
    item.classList.remove('form__input_type_error');
    formError.classList.remove('form__input-error_active');
    formError.textContent = '';
};

const isValid = () => {
    if (!formInput.validity.valid) {
        showInputError(formInput, formInput.validationMessage);
    } else {
        hideInputError(formInput);
    }
};

formInput.addEventListener('input', isValid);