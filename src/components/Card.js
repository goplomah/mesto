class Card {
    constructor(cards, templateSelector, userId, handleCardClick, handleLikeClick) {
        this._name=cards.name;
        this._link=cards.link;
        this._alt=cards.alt;
        this._templateSelector=templateSelector;
        this._handleCardClick=handleCardClick;
        this._deleteCard = this._deleteCard.bind(this);
        // this._toggleLike = this._toggleLike.bind(this);
        this._handleLikeClickOnImg = this._handleLikeClickOnImg.bind(this);
        this._clickImage = this._clickImage.bind(this);
        this._likes = cards.likes;
        this._ownerId = cards.owner._id;
        this._userId = userId;
        this._id = cards._id;
        this._isLiked = cards.likes.some((like) => like._id === this._userId);
        this._handleLikeClick = handleLikeClick;
        this._likeCounter = cards.likes.length;
        // this._handleTrashClick = handleTrashClick.bind(this);
        // this._clickTrash = this._clickTrash.bind(this);
        }
        
        _checkUserId() {
            if (this._ownerId !== this._userId) {
                this._buttonDelete.remove();
            }
        }

        _getTemplate() {
            const templateCard = document.querySelector(this._templateSelector).content.querySelector(".places__item");

            return templateCard;
        };

        _deleteCard() {
            this._element.remove();
        };

        _clickTrash() {
            this._handleTrashClick(this._id, this._deleteCard);
        }

        // _toggleLike() {
        //     this._buttonLike.classList.toggle("places__button-like_active");
        // };

        _setLikeCounter(data) {
            this._likeCounter = data.likes.length;
        }

        _clickImage() {
            this._handleCardClick(this._name, this._link);
        };

        _addLike() {
            this._buttonLike.classList.add('places__button-like_active');
            this._isLiked = true;
            this._likeCounterElem.textContent = this._likeCounter;
            console.log(this._isLiked);
        }

        _removeLike() {
            this._buttonLike.classList.remove('places__button-like_active');
            this._isLiked = false;
            this._likeCounterElem.textContent = this._likeCounter;
            console.log(this._isLiked);
        }

        _handleLikeClickOnImg() {
            this._handleLikeClick(this._id, this._isLiked, this._addLike.bind(this), this._removeLike.bind(this), this._setLikeCounter.bind(this));
        }


        _setEventListeners() {
            this._element
            .querySelector(".places__button-trash").addEventListener("click", this._deleteCard);
            // .addEventListener('click', this._clickTrash);

            this._buttonLike
            .addEventListener("click", this._handleLikeClickOnImg);

            this._cardImage.addEventListener('click', this._clickImage);

            this._checkUserId();
        };

        generateCard() {
            this._element=this._getTemplate().cloneNode(true);
            this._cardImage=this._element.querySelector(".places__image");
            this._cardImage.src=this._link;
            this._cardImage.alt=this._alt;
            this._cardName=this._element.querySelector(".places__text");
            this._cardName.textContent=this._name;
            this._buttonLike=this._element.querySelector(".places__button-like");
            this._buttonDelete=this._element.querySelector('.places__button-trash');
            this._likeCounterElem = this._element.querySelector('.places__like-counter');
            this._likeCounterElem.textContent = this._likes.length;

            if (this._isLiked) {
                this._buttonLike.classList.add('places__button-like_active');
            };
            console.log(this._isLiked);
            
            this._setEventListeners();
            return this._element;
        };

        
        
}

export {Card};