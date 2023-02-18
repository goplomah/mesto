const templateCard = document
  .querySelector(".template__card")
  .content.querySelector(".places__item");
const listCard = document.querySelector(".places__cards");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_add");
const imagePopup = document.querySelector(".popup_type_image");
const editPopupOpenButton = document.querySelector(".button-edit");
const editPopupForm = document.querySelector(".form_type_edit");
const nameInput = editPopupForm.querySelector(".form__input_name_name");
const jobInput = editPopupForm.querySelector(".form__input_name_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const addPopupOpenButton = document.querySelector(".button-add");
const addPopupForm = document.querySelector(".form_type_add");
const titleInput = addPopupForm.querySelector(".form__input_name_title");
const linkInput = addPopupForm.querySelector(".form__input_name_link");
const imageIntoImagePopup = imagePopup.querySelector(".popup__image");
const imageTitleIntoImagePopup = imagePopup.querySelector(".popup__text");
const popups = document.querySelectorAll(".popup");

const closeEscPopup = (evt) => {
  if (evt.key === 'Escape') {
  closePopup(document.querySelector(".popup_opened"));
  }
};

// общая функция открытия модального окна:

function openPopup(item) {
  document.addEventListener('keydown', closeEscPopup);
  item.classList.add("popup_opened");
}

// общая функция закрытия модального окна:

function closePopup(item) {
  document.removeEventListener('keydown', closeEscPopup);
  item.classList.remove("popup_opened");
}

// закрытие любого модального окна по клику
// на крестик или оверлею, нажатию кнопки esc:

popups.forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(item);
    }
    if (evt.target.classList.contains("popup__close-btn")) {
      closePopup(item);
    }
  });
  });
  
// открытие формы редактирования профиля и
// заполнение input'ов информацией со странички:

editPopupOpenButton.addEventListener("click", () => {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// сохраниние формы:

editPopupForm.addEventListener("submit", (item) => {
  item.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(editPopup);
});

// функция удаления карточки со страницы:

function deleteCard(item) {
  item.target.closest(".places__item").remove();
}

// функция переключателя лайка карточки:

function toggleLike(item) {
  item.target.classList.toggle("places__button-like_active");
}

// создание карточки:

function createCard(item) {
  const card = templateCard.cloneNode(true);
  const cardImage = card.querySelector(".places__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  card.querySelector(".places__text").textContent = item.name;
  card
    .querySelector(".places__button-trash")
    .addEventListener("click", deleteCard);
  card
    .querySelector(".places__button-like")
    .addEventListener("click", toggleLike);
  cardImage.addEventListener("click", () => {
    imageIntoImagePopup.src = item.link;
    imageIntoImagePopup.alt = item.alt;
    imageTitleIntoImagePopup.textContent = item.name;
    openPopup(imagePopup);
  });
  return card;
}

function renderCards(initialCards) {
  const cards = initialCards.map(createCard);
  listCard.prepend(...cards);
}

renderCards(initialCards);

// открытие модального окна добавления карточки
// на страницу:

addPopupOpenButton.addEventListener("click", () => {
  openPopup(addPopup);
});

// сохранение новой карточки на странице:

addPopupForm.addEventListener("submit", (item) => {
  item.preventDefault();

  const addedCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  listCard.prepend(createCard(addedCard));
  item.target.reset();
  closePopup(addPopup);
});
