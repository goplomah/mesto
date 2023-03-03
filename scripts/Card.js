class Card {
    constructor(cards, templateSelector, openPopup) {
        this._name=cards.name;
        this._link=cards.link;
        this._alt=cards.alt;
        this._templateSelector=templateSelector;
        this._openPopup=openPopup;
        this._imagePopup=document.querySelector(".popup_type_image");
        this._imageIntoImagePopup=this._imagePopup.querySelector(".popup__image");
        this._imageTitleIntoImagePopup=this._imagePopup.querySelector(".popup__text");
        this._deleteCard = this._deleteCard.bind(this);
        this._toggleLike = this._toggleLike.bind(this);
        this._clickImage = this._clickImage.bind(this);    }

        _getTemplate() {
            const templateCard = document.querySelector(this._templateSelector).content.querySelector(".places__item");

            return templateCard;
        };

        _deleteCard() {
            this._element.remove();
        };

        _toggleLike() {
            this._buttonLike.classList.toggle("places__button-like_active");
        };

        _clickImage() {
                this._imageIntoImagePopup.src = this._link;
                this._imageIntoImagePopup.alt = this._name;
                this._imageTitleIntoImagePopup.textContent = this._name;
                this._openPopup(this._imagePopup);
        };

        _setEventListeners() {
            this._element
            .querySelector(".places__button-trash")
            .addEventListener("click", this._deleteCard);

            this._buttonLike
            .addEventListener("click", this._toggleLike);

            this._cardImage.addEventListener('click', this._clickImage);
        };

        generateCard() {
            this._element=this._getTemplate().cloneNode(true);
            this._cardImage=this._element.querySelector(".places__image");
            this._cardImage.src=this._link;
            this._cardImage.alt=this._alt;
            this._cardName=this._element.querySelector(".places__text");
            this._cardName.textContent=this._name;
            this._buttonLike=this._element.querySelector(".places__button-like");
            
            this._setEventListeners();
            return this._element;
        };
}

export {Card};