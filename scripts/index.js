const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-btn');
const popupOpenButtonElement = document.querySelector('.button-edit');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_name_name');
const jobInput = formElement.querySelector('.form__input_name_job');
const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__job');

popupOpenButtonElement.addEventListener('click', function() {
  popupElement.classList.add('popup_opened');
   nameInput.value = profileNameElement.textContent;
   jobInput.value = profileJobElement.textContent;
});

const removePopupElementVisibility = function() {
  popupElement.classList.remove('popup_opened');
}

popupCloseButtonElement.addEventListener('click', removePopupElementVisibility);

const popupCloseClickOverlay = function(popupElement) {
  if (popupElement.target === popupElement.currentTarget) {
    removePopupElementVisibility();
  }
}

popupElement.addEventListener('click', popupCloseClickOverlay);

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    profileNameElement.textContent = nameInput.value;
    profileJobElement.textContent = jobInput.value;

    removePopupElementVisibility();
}

formElement.addEventListener('submit', handleFormSubmit);

  // const placesLikeButtonElement = document.querySelector('.places__button-like');
  // const togglePlacesLikeButtonElement = function() {
  //   placesLikeButtonElement.classList.toggle('places__button-like_active');
  // }

  // placesLikeButtonElement.addEventListener('click', togglePlacesLikeButtonElement);