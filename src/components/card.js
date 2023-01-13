//РАБОТА С КАРТОЧКАМИ
import {cardsContainer, cardTemplate} from './constants.js';
import {handleImagePreview} from './modal.js';

function createCard(item) {
    const cardElement = cardTemplate.cloneNode(true).content;

    const image = cardElement.querySelector('.element__background-picture');
    const name = cardElement.querySelector('.element__title');
    const heartButtonElement = cardElement.querySelector('.element__heart-button');
    const deleteButtonElement = cardElement.querySelector('.element__delete-button');

    image.src = item.link;
    image.alt = item.name;
    name.textContent = item.name;

    heartButtonElement.addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__heart-button_on');

    })

    deleteButtonElement.addEventListener('click', function (evt) {
        evt.target.closest(".element__background").remove();
    })



    image.addEventListener('click', () => handleImagePreview(item))

    // cardsContainer.prepend(cardElement);
    return cardElement;
}



export function addNewCard(card) {
    const cardElement = createCard(card)
    cardsContainer.prepend(cardElement);
}