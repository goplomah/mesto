import { initialCards } from "./cards.js";
import {Card} from "./Card.js";
import {classes, FormValidation} from "./FormValidation.js";

const listCard = document.querySelector(".places__cards");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupEditOpenButton = document.querySelector(".button-edit");
const popupEditForm = document.querySelector(".form_type_edit");
const nameInput = popupEditForm.querySelector(".form__input_name_name");
const jobInput = popupEditForm.querySelector(".form__input_name_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupAddOpenButton = document.querySelector(".button-add");
const popupAddForm = document.querySelector(".form_type_add");
const titleInput = popupAddForm.querySelector(".form__input_name_title");
const linkInput = popupAddForm.querySelector(".form__input_name_link");
const popups = document.querySelectorAll(".popup");

const popupEditFormValidation = new FormValidation(classes, popupEditForm);
const popupAddFormValidation = new FormValidation(classes, popupAddForm);

popupEditFormValidation.enableValidation();
popupAddFormValidation.enableValidation();

//закрытие модального окна по кнопке esc
const closeEscPopup = (evt) => {
  if (evt.key === 'Escape') {
  closePopup(document.querySelector(".popup_opened"));
  }
};

// общая функция открытия модального окна:

function openPopup(popup) {
  document.addEventListener('keydown', closeEscPopup);
  popup.classList.add("popup_opened");
}

// общая функция закрытия модального окна:

function closePopup(popup) {
  document.removeEventListener('keydown', closeEscPopup);
  popup.classList.remove("popup_opened");
}

// закрытие любого модального окна по клику
// на крестик или оверлею, нажатию кнопки esc:

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-btn")) {
      closePopup(popup);
    }
  });
  });
  
// открытие формы редактирования профиля и
// заполнение input'ов информацией со странички:

popupEditOpenButton.addEventListener("click", () => {
  popupEditFormValidation.resetValidation();
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// сохраниние формы:

popupEditForm.addEventListener("submit", (item) => {
  item.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
});

// создание карточки:

function createCard(item) {
  const card = new Card(item, ".template__card", openPopup).generateCard();
  return card;
}

function renderCards(initialCards) {
  const cards = initialCards.map(createCard);
  listCard.prepend(...cards);
}

renderCards(initialCards);

// открытие модального окна добавления карточки
// на страницу:

popupAddOpenButton.addEventListener("click", () => {
  popupAddFormValidation.resetValidation();
  openPopup(popupAdd);
});

// сохранение новой карточки на странице:

popupAddForm.addEventListener("submit", (item) => {
  item.preventDefault();

  const addedCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  listCard.prepend(createCard(addedCard));
  item.target.reset();
  closePopup(popupAdd);
});
