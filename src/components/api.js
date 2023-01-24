
import {
    renderCards, fillInUserData, fillUsersValue
} from '../index.js'
import { jobInput, nameInput } from './constants.js';


const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
    headers: {
        authorization: '3551413f-7809-4b8d-8cd3-def47480ebb4',
        'Content-Type': 'application/json'
    }
}
const getResponse = (res) => {

    if (res.ok) {
        return res.json();

    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);


}

//загрузка карточек с сервера
export const getInitialCards = () => {

    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(getResponse)
        
        
        

}





//получить информацию о пользователе с сервера и вставка ее на страницу
export const getUsersInformation = () => {

    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(getResponse)
        .then((result) => {
           
            fillInUserData(result.name, result.about, result.avatar);
        })

}


//отредактировать информацию о пользователе и отправить на сервер
export const editProfileInformation = (usersName, usersAbout) => {

    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: usersName,
            about: usersAbout
        })

    })
        .then(getResponse)
        // .then((result) => {
        //     console.log(result)
        //     jobInput.value = result.about;
        //     nameInput.value = result.name;

        // })
        

}

//отредактировать аватар пользователя и отправить на сервер
export const changeUsersAvatar = (avatarLink) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarLink
        })
    })
        .then(getResponse)
        .then((result) => {
            console.log(result)


        })
}


//добавление новой карточки на сервер и отображение в верстке
export const addCard = (imageName, imageLink)=>{
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: imageName,
            link: imageLink
        })
    })
    .then(getResponse)
    
    
}

//удаление карточки из верстки и с сервера
export const deliteCard = (cardId)=>{
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        
    })
    .then((res)=>{
        if(!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export const putLike = (cardId)=>{
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers,
        
    })
    .then(getResponse)
    // .then((res)=>{
    //     if(!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
    // })
}

export const deliteLike = (cardId)=>{
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
        
    })
    .then(getResponse)
    // .then((res)=>{
    //     if(!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
    // })
}

//остановились на том, что сделали апи