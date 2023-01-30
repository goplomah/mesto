const initialCards = [
  {
    name: "Санкт-Петербург",
    link: "../images/places__saint-petersburg(o).jpg",
    alt: "развод Дворцового моста.",
  },
  {
    name: "Карелия",
    link: "./images/places__kareliya(o).jpg",
    alt: "леса Карелии.",
  },
  {
    name: "Скала Парус",
    link: "./images/places__mountain-parus(o).jpg",
    alt: "скала похожая на парус.",
  },
  {
    name: "Белогорье",
    link: "./images/places__belogore(o).jpg",
    alt: "храм, расположенный в меловых горах.",
  },
  {
    name: "Ленинградская область",
    link: "./images/places__kareliya-2(o).jpg",
    alt: "деревянная дорога в лесу.",
  },
  {
    name: "Тайга",
    link: "./images/places__leningradskaya-oblast(o).jpg",
    alt: "заснеженные ели в лесу.",
  },
];

const templateCard = document
  .querySelector(".template__card")
  .content.querySelector(".places__item");
const listCard = document.querySelector(".places__cards");
const popup = document.querySelector(".popup");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupCloseButton = editPopup.querySelector(".popup__close-btn");
const popupCloseButton = document.querySelector('.popup__close-btn');
const editPopupOpenButton = document.querySelector(".button-edit");
const editPopupForm = document.querySelector(".form_type_edit");
const nameInput = editPopupForm.querySelector(".form__input_name_name");
const jobInput = editPopupForm.querySelector(".form__input_name_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const addPopup = document.querySelector('.popup_type_add');
const addPopupOpenButton = document.querySelector(".button-add");
const addPopupForm = document.querySelector(".form_type_add");
const titleInput = addPopupForm.querySelector(".form__input_name_title");
const linkInput = addPopupForm.querySelector(".form__input_name_link");
const addPopupCloseButton = addPopup.querySelector(".popup__close-btn");
const imagePopup = document.querySelector('.popup_type_image');
// const imagePopupOpenButton = document.querySelector('.popup_type_image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-btn_type_image');


const renderCard = () => {
  const cards = initialCards.map((item) => {
    const card = templateCard.cloneNode(true);
    card.querySelector(".places__image").setAttribute("src", item.link);
    card.querySelector(".places__image").setAttribute("alt", item.alt);
    card.querySelector(".places__text").textContent = item.name;

    const likeButtonCard = card.querySelector('.places__button-like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('places__button-like_active');
    });

    const deleteButtonCard = card.querySelector('.places__button-trash').addEventListener('click', (evt) => {
      card.remove();
    })

    return card;
  });

  listCard.prepend(...cards);
};

renderCard();



addPopupOpenButton.addEventListener("click", function () {
  addPopup.classList.add("popup_opened");
  titleInput.value = "";
  linkInput.value= "";
});


editPopupOpenButton.addEventListener("click", function () {
  editPopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

const closePopup = (evt) => {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

editPopupCloseButton.addEventListener('click', closePopup);
addPopupCloseButton.addEventListener('click', closePopup);
imagePopupCloseButton.addEventListener('click', closePopup);

//  const removePopupElementVisibility = (e) => {
//    e.target.closest('.popup').classList.remove("popup_opened");
//  };

// editPopupCloseButtonElement.addEventListener("click", removePopupElementVisibility);
// addPopupCloseButtonElement.addEventListener("click", removePopupElementVisibility);

//  const popupCloseClickOverlay = (popupElement) => {
//    if (popupElement.target === popupElement.currentTarget) {
//      removePopupElementVisibility(editPopupElement);
//    }
//  };

// popupElement.addEventListener("click", popupCloseClickOverlay);

editPopupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(evt);
});

addPopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const card = templateCard.cloneNode(true);
    card.querySelector(".places__image").setAttribute("src", linkInput.value);
    card.querySelector(".places__image").setAttribute("alt", titleInput.value);
    card.querySelector(".places__text").textContent = titleInput.value;
  listCard.prepend(card);
  closePopup(evt);
});