import '../pages/index.css';
import { initialCards } from "../scripts/cards.js";
import {Card} from "../components/Card.js";
import {classes, FormValidation} from "../components/FormValidation.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from '../components/Api.js';

const popupEditOpenButton = document.querySelector(".button-edit");
const popupEditForm = document.querySelector(".form_type_edit");
const popupAddOpenButton = document.querySelector(".button-add");
const popupAddForm = document.querySelector(".form_type_add");

const api = new Api({
  dataBase: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    authorization: "4cedf714-dd26-4078-b00f-7c3db0c68c43",
    "Content-Type": "application/json"
  }
});

//создание копий классов валидации и её включение:

const popupEditFormValidation = new FormValidation(classes, popupEditForm);
popupEditFormValidation.enableValidation();

const popupAddFormValidation = new FormValidation(classes, popupAddForm);
popupAddFormValidation.enableValidation();

//копия класса заполнения информацией профиля:

const userInfo = new UserInfo('.profile__name', '.profile__job');

// создание карточки, копия класса секции и отрисовка карточек:
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

function createCard(item) {
  const card = new Card(item, ".template__card", handleCardClick).generateCard();
  return card;
};

const rendererSection = new Section({items: initialCards, renderer: createCard}, ".places__cards");
rendererSection.rendererItems();

// копия класса модалки с картинкой:

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

// копия класса добавления карточки через модалку:

const handleAddCard = ({title, link}) => {
  rendererSection.addItem(createCard({name: title, link}));
}

const popupAddCard = new PopupWithForm('.popup_type_add', handleAddCard);
popupAddCard.setEventListeners();

// копия ксласса модалки редактирования профиля:

const handleEditProfile = ({name, job}) => {
  userInfo.setUserInfo({name, job});
}

const popupEditProfile = new PopupWithForm('.popup_type_edit', handleEditProfile);
popupEditProfile.setEventListeners();

// слушатели кнопок открытия модалок:

popupEditOpenButton.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditFormValidation.resetValidation();
  popupEditProfile.open();
});

popupAddOpenButton.addEventListener("click", () => {
  popupAddFormValidation.resetValidation();
  popupAddCard.open();
});