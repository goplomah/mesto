const classes = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__send',
    inactiveButtonClass: 'form__send_disabled',
    inputErrorClass: 'form__input_type_error'
  };

  // функция, показывающая ошибку в поле
const showInputError = (formElement, inputElement, errorMessage, classes) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(classes.inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  //функция, скрывающая ошибку в поле
  const hideInputError = (formElement, inputElement, classes) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(classes.inputErrorClass);
    errorElement.textContent = '';
  };

  //проверка поля на валидность
  const isValid  = (formElement, inputElement, classes) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, classes);
    } else {
      hideInputError(formElement, inputElement, classes);
    }
  };

  //функция проверки валидности полей и сигнализации возможности разблокировки сабмита
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //неактивная кнопка
  const disabledButton = (buttonElement, classes) => {
    buttonElement.setAttribute("disabled", "disabled");
    buttonElement.classList.add(classes.inactiveButtonClass);
  };

  //активная кнопка
  const enabledButton = (buttonElement, classes) => {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(classes.inactiveButtonClass);
  };

  //функция переключения состояния кнопки сохранить (неактивная/активная)
  const toggleButtonSave = (inputList, buttonElement, classes) => {
    if (hasInvalidInput(inputList)) {
      disabledButton(buttonElement, classes);
    } else {
      enabledButton(buttonElement, classes);
    }
  };

  //слушатель всем полям ввода в форме
  const setEventListeners = (formElement, classes) => {
    const inputList = Array.from(formElement.querySelectorAll(classes.inputSelector));
    const buttonElement = formElement.querySelector(classes.submitButtonSelector);
    toggleButtonSave(inputList, buttonElement, classes);
    formElement.addEventListener('submit', () => {
			toggleButtonSave(inputList, buttonElement, classes)	;
	});
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, classes);
        toggleButtonSave(inputList, buttonElement, classes);
      });
    });
  };

  //перебор всех форм, добавление им обработчиков
  const enableValidation = (classes) => {
    const formList = Array.from(document.querySelectorAll(classes.formSelector));
    formList.forEach((formElement) => {
       setEventListeners(formElement, classes);
    });
  };

  enableValidation(classes);