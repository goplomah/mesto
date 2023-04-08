import '../pages/index.css';
// import { initialCards } from "../scripts/cards.js";
import {Card} from "../components/Card.js";
import {classes, FormValidation} from "../components/FormValidation.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupwithConfirm';

const popupEditOpenButton = document.querySelector(".button-edit");
const popupEditForm = document.querySelector(".form_type_edit");
const popupAddOpenButton = document.querySelector(".button-add");
const popupAddForm = document.querySelector(".form_type_add");
const popupAvatarForm = document.querySelector('.form_type_avatar');
const popupAvatarOpenButton = document.querySelector('.profile__avatar-wrapper');
let userId = null;
// const popupDeleteCardOpenButton = document.querySelector('.form_send');

const api = new Api({
  dataBase: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    authorization: "4cedf714-dd26-4078-b00f-7c3db0c68c43",
    "Content-Type": "application/json"
  }
});

//инициализация начальных данных с сервера:

Promise.all([api.getUserInfo(), api.getInitCard()])
  .then(([me, cards]) => {
    userId = me._id;
    userInfo.setUserInfo(me);
    rendererSection.rendererItems(cards);
  })
  .catch((err) => console.log(`Упс...Ошибка получения данных с сервера: ${err}`));

//создание копий классов валидации и её включение:

const popupEditFormValidation = new FormValidation(classes, popupEditForm);
popupEditFormValidation.enableValidation();

const popupAddFormValidation = new FormValidation(classes, popupAddForm);
popupAddFormValidation.enableValidation();

const popupAvatarFormValidation = new FormValidation(classes, popupAvatarForm);
popupAvatarFormValidation.enableValidation();

//копия класса заполнения информацией профиля:

const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar');

// создание карточки, копия класса секции и отрисовка карточек:
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
}

// const handleTrashClick = (cardId, card) => {
//   popupDeleteCard.open(cardId, card);
// }

function createCard(item) {
  const card = new Card(item, ".template__card", userId, handleCardClick,).generateCard();
  return card;
};

const rendererSection = new Section({items: [], renderer: createCard}, ".places__cards");

// копия класса модалки с картинкой:

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

// копия класса добавления карточки через модалку:

const handleAddCard = ({title, link}) => {
  popupAddCard.loading(true, 'Сохранение...')
  api.addCard({title, link})
    .then(data => {rendererSection.addItem(createCard(data));})
    .catch(err => console.log(`Упс...Что-то пошло не так: ${err}`))
    .finally(() => {popupAddCard.loading(false, 'Создать')})
}

const popupAddCard = new PopupWithForm('.popup_type_add', handleAddCard);
popupAddCard.setEventListeners();

// копия класса модалки редактирования профиля:

const handleEditProfile = ({name, job}) => {
  popupEditProfile.loading(true, 'Сохранение...');
  api.setUserInfo({name, job})
    .then(data => {
      userInfo.setUserInfo(data)
  })
    .catch(err => console.log(`Упс...Что-то пошло не так: ${err}`))
    .finally(() => {popupEditProfile.loading(false, 'Сохранить')})
}

const popupEditProfile = new PopupWithForm('.popup_type_edit', handleEditProfile);
popupEditProfile.setEventListeners();

//копия класса редактирования аватара:

const handleEditAvatar = ({avatar}) => {
  popupAvatar.loading(true, 'Сохранение...');
  api.updateAvatar({avatar})
  .then((avatar) => {
    userInfo.setUserInfo(avatar)
  })
  .catch(err => {
    console.log(`Упс...что-то не так с ссылкой на аватар: ${err}`)
  })
  .finally(() => {popupAvatar.loading(false, 'Сохранить')})
}

const popupAvatar = new PopupWithForm('.popup_type_avatar', handleEditAvatar);
popupAvatar.setEventListeners();

// копия класса модального окна удаления карточки:

// const handleSubmitConfirm = (cardId, card) => {
//   popupDeleteCard.loading(true, 'Удаление...');
//   api.removeCard(cardId)
//     .then(() => {
//       card.remove();
//     })
//     .catch(err => {
//       console.log(`Упс...что-то не так с ссылкой на аватар: ${err}`)
//     })
//     .finally(() => {popupDeleteCard.loading(false, 'Да')})
// }

// const popupDeleteCard = new PopupWithConfirm('.popup_type_delete', handleSubmitConfirm);
// popupDeleteCard.setEventListeners();

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

popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatarFormValidation.resetValidation();
  popupAvatar.open();
})