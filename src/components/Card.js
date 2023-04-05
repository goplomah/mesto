class Card {
    constructor(cards, templateSelector, handleCardClick) {
        this._name=cards.name;
        this._link=cards.link;
        this._alt=cards.alt;
        this._templateSelector=templateSelector;
        this._handleCardClick=handleCardClick;
        this._deleteCard = this._deleteCard.bind(this);
        this._toggleLike = this._toggleLike.bind(this);
        this._clickImage = this._clickImage.bind(this);
        this._likesCounter = cards.likes.length;
        }

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
            this._handleCardClick(this._name, this._link);
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