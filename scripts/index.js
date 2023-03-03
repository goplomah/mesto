import { initialCards } from "./cards.js";
import {Card} from "./Card.js";
import {classes, FormValidation} from "./FormValidation.js";

// const templateCard = document
//   .querySelector(".template__card")
//   .content.querySelector(".places__item");
const listCard = document.querySelector(".places__cards");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
// const imagePopup = document.querySelector(".popup_type_image");
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
// const imageIntoImagePopup = imagePopup.querySelector(".popup__image");
// const imageTitleIntoImagePopup = imagePopup.querySelector(".popup__text");
const popups = document.querySelectorAll(".popup");

const profileFormValidation = new FormValidation(classes, popupEditForm).enableValidation();
const addImageFormValidation = new FormValidation(classes, popupAddForm).enableValidation();

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
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  nameInput.classList.remove('form__input_type_error');
  jobInput.classList.remove('form__input_type_error');
  const errorMessage = popupEdit.querySelectorAll('.form__input-error');
  errorMessage.forEach(input => {
    input.textContent = '';
  });
});

// сохраниние формы:

popupEditForm.addEventListener("submit", (item) => {
  item.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
});

// функция удаления карточки со страницы:

// function deleteCard(item) {
//   item.target.closest(".places__item").remove();
// }

// функция переключателя лайка карточки:

// function toggleLike(item) {
//   item.target.classList.toggle("places__button-like_active");
// }

// создание карточки:

function createCard(item) {
  // const card = templateCard.cloneNode(true);
  // const cardImage = card.querySelector(".places__image");
  // cardImage.src = item.link;
  // cardImage.alt = item.name;
  // card.querySelector(".places__text").textContent = item.name;
  // card
  //   .querySelector(".places__button-trash")
  //   .addEventListener("click", deleteCard);
  // card
  //   .querySelector(".places__button-like")
  //   .addEventListener("click", toggleLike);
  // cardImage.addEventListener("click", () => {
  //   imageIntoImagePopup.src = item.link;
  //   imageIntoImagePopup.alt = item.name;
  //   imageTitleIntoImagePopup.textContent = item.name;
  //   openPopup(imagePopup);
  // });
  // return card;
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
