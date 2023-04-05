export class UserInfo {
    constructor(nameElementSelector, discriptionElementSelector, avatarSelector) {
        this._nameElement = document.querySelector(nameElementSelector);
        this._discriptionElement = document.querySelector(discriptionElementSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._discriptionElement.textContent
        };
    };

    setUserInfo({name, about, avatar}) {
        this._nameElement.textContent = name;
        this._discriptionElement.textContent = about;
        this._avatar.src = avatar;
    };
}