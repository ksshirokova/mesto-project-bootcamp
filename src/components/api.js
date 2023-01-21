import { get } from 'core-js/core/dict'
import { renderCards } from '../index.js'
import { createCard, addNewCard } from './card.js'
// return fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards', {
//     headers: {
//         authorization: '3551413f-7809-4b8d-8cd3-def47480ebb4'
//     }
// })
//     .then(res => res.json())
//     .then((result) => {
//         console.log(result);
//     });

const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-4',
    headers: {
        authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
        'Content-Type': 'application/json'
    }
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }

            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((result) => {
            console.log(result)
        })
}




// fetch('https://nomoreparties.co/v1/wbf-cohort-4//users/me', {
//     headers: {
//         authorization: '3551413f-7809-4b8d-8cd3-def47480ebb4'
//     }
// })
//     .then(res => res.json())
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(()=>{
//         console.log('Ошибка')
//     })

// fetch('https://nomoreparties.co/v1/wbf-cohort-4/cards', {
//     method: 'GET',
//     headers: {
//         authorization: '3551413f-7809-4b8d-8cd3-def47480ebb4'
//     }
// })
// .then(res => res.json())
// .then((result)=>{
//     renderCards(result)

// })
// .catch(()=>{
//     console.log('Ошибка')
// })
