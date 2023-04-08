// import { Popup } from "./Popup.js";

// export class PopupWithConfirm extends Popup {
//     constructor(popupSelector, submitConfirm) {
//         super(popupSelector);
//         this._submitConfirm = submitConfirm;
//         this._form = this._popup.querySelector('.form');
//     }

//     // _clickSubmit(evt) {
//     //     evt.preventDefault();
//     //     this._submitConfirm({cardId: this._cardId, card: this._card});
//     // }

//     setEventListeners() {
//         this._form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._submitConfirm({cardId: this._cardId, card: this._card});
//         });
//         super.setEventListeners;
//     }

//     loading(isLoading, loadingText) {
//         if (isLoading) {
//         this._btn.textContent = loadingText;
//         } else {
//             this._btn.textContent = loadingText;
//         }
//     }

//     open(cardId, card) {
//         super.open();
//         this._cardId = cardId;
//         this._card = card;
//     }
// }