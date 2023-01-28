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
    name: "Иваново",
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
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-btn");
const popupOpenButtonElement = document.querySelector(".button-edit");
const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".form__input_name_name");
const jobInput = formElement.querySelector(".form__input_name_job");
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__job");

const renderCard = () => {
  const cards = initialCards.map((item) => {
    const card = templateCard.cloneNode(true);
    card.querySelector(".places__image").setAttribute("src", item.link);
    card.querySelector(".places__image").setAttribute("alt", item.alt);
    card.querySelector(".places__text").textContent = item.name;
    return card;
  });
  listCard.prepend(...cards);
};

renderCard();

popupOpenButtonElement.addEventListener("click", function () {
  popupElement.classList.add("popup_opened");
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
});

const removePopupElementVisibility = function () {
  popupElement.classList.remove("popup_opened");
};

popupCloseButtonElement.addEventListener("click", removePopupElementVisibility);

const popupCloseClickOverlay = function (popupElement) {
  if (popupElement.target === popupElement.currentTarget) {
    removePopupElementVisibility();
  }
};

popupElement.addEventListener("click", popupCloseClickOverlay);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  removePopupElementVisibility();
}

formElement.addEventListener("submit", handleFormSubmit);

const placesLikeButtonElement = document.querySelectorAll(
  ".places__button-like"
);
// const togglePlacesLikeButtonElement = function() {
//   placesLikeButtonElement.classList.toggle('places__button-like_active');
// }
placesLikeButtonElement.addEventListener("click", function (evt) {
  evt.target.classList.toggle("places__button-like_active");
});
// placesLikeButtonElement.addEventListener('click', togglePlacesLikeButtonElement);
