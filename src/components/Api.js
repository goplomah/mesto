export class Api {
    constructor(data) {
        this._dataBase = data.dataBase;
        this._headers = data.headers;
    }

    getUserInfo() {
        return fetch('https://nomoreparties.co/v1/cohort-63/users/me', {headers: this._headers})
        .then(res => {
            if(res.ok) {return res.json();}
            return Promise.reject(`Упс... Ошибка: ${res.status}`);
        })
    }

    getInitCard() {
        return fetch(`${this._dataBase}cards`, {headers: this._headers}).then(res => {if(res.ok) {return res.json();}
        return Promise.reject(`Упс... Ошибка: ${res.status}`);})
    }

    setUserInfo({name, job}) {
        return fetch(`${this._dataBase}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about: job
            })
        }).then(res => {
            if(res.ok) {return res.json();}
            return Promise.reject(`Упс... Ошибка: ${res.status}`);
        })
    }

    updateAvatar({avatar}) {
        return fetch(`${this._dataBase}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        }).then(res => {
            if(res.ok) {return res.json();}
            return Promise.reject(`Упс... Ошибка: ${res.status}`);
    })
}


    addCard({title, link}) {
        return fetch(`${this._dataBase}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: title,
                link
            })
        }).then(res => {
            if(res.ok) {return res.json();}
            return Promise.reject(`Упс... Ошибка: ${res.status}`);
    })
}

}