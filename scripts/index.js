const templateCard = document
  .querySelector(".template__card")
  .content.querySelector(".places__item");
const listCard = document.querySelector(".places__cards");
const editPopup = document.querySelector(".popup_type_edit");
const addPopup = document.querySelector(".popup_type_add");
const imagePopup = document.querySelector(".popup_type_image");
const popupCloseButton = document.querySelectorAll(".popup__close-btn");
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


function openPopup (item) {
    item.classList.add('popup_opened');                  // общая функция открытия модального окна
  }

function closePopup (item) {                             // общая функция закрытия модального окна
    item.classList.remove('popup_opened');
};

popupCloseButton.forEach(item => {                       // закрытие любого модального окна по клику
    item.addEventListener('click', () => {               // на крестик
closePopup(item.closest('.popup'))
    });
});

function removePopupVisibility(item) {                   // функция закрытия модального окна при клике                    
        if (item.target === item.currentTarget) {        // за его пределами
            closePopup(item.target.closest('.popup'));
        };
};

editPopup.addEventListener('click', removePopupVisibility);
addPopup.addEventListener('click', removePopupVisibility);
imagePopup.addEventListener('click', removePopupVisibility);

editPopupOpenButton.addEventListener('click', () => {   // открытие формы редактирования профиля и 
    openPopup(editPopup);                               // заполнение input'ов информацией со странички
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

editPopupForm.addEventListener('submit', (item) => {   // сохраниние формы
    item.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editPopup);
});


function deleteCardButton(item) {                     // функция удаления карточки со страницы
    item.target.closest('.places__item').remove();
};


function likeCardButton(item) {                       // функция переключателя лайка карточки
    item.target.classList.toggle('places__button-like_active');
};


function createCard(item) {                            // создание карточки
    const card = templateCard.cloneNode(true);
    const cardImage = card.querySelector('.places__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    card.querySelector('.places__text').textContent = item.name;
    card.querySelector('.places__button-trash').addEventListener('click', deleteCardButton);
    card.querySelector('.places__button-like').addEventListener('click', likeCardButton);
    cardImage.addEventListener('click', () => {
    imagePopup.querySelector(".popup__image").src = item.link;
    imagePopup.querySelector(".popup__image").alt = item.alt;
    imagePopup.querySelector(".popup__text").textContent = item.name;
    openPopup(imagePopup);
    });
    return card;
};

function renderCards(initialCards) {
    const cards = initialCards.map(item => {
        return createCard(item);
}
    );
    listCard.prepend(...cards);
};

renderCards(initialCards);


addPopupOpenButton.addEventListener("click", () => {  // открытие модального окна добавления карточки
    openPopup(addPopup);                              // на страницу
     titleInput.value = "";
     linkInput.value = "";
});


addPopupForm.addEventListener("submit", (item) => {        // сохранение новой карточки на странице
       item.preventDefault();
       const card = templateCard.cloneNode(true);
       const cardImage = card.querySelector('.places__image');
       cardImage.src = linkInput.value;
       cardImage.alt = titleInput.value;
       card.querySelector(".places__text").textContent = titleInput.value;
    
       card.querySelector('.places__button-like').addEventListener('click', likeCardButton);
       card.querySelector('.places__button-trash').addEventListener('click', deleteCardButton);
    
        cardImage.addEventListener("click", () => {
            openPopup(imagePopup);
          });
    
          const addedCard = {
            name: titleInput.value,
            link: linkInput.value,
          };
        
          listCard.prepend(createCard(addedCard));
       closePopup(addPopup);
     });