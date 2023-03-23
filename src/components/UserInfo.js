export class UserInfo {
    constructor(nameElementSelector, discriptionElementSelector) {
        this._nameElementSelector = document.querySelector(nameElementSelector);
        this._discriptionElementSelector = document.querySelector(discriptionElementSelector);
    }

    getUserInfo() {
        return {
            name: this._nameElementSelector.textContent,
            job: this._discriptionElementSelector.textContent
        };
    };

    setUserInfo({name, job}) {
        this._nameElementSelector.textContent = name;
        this._discriptionElementSelector.textContent = job;
    };
}