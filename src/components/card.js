//РАБОТА С КАРТОЧКАМИ
import { cardsContainer, cardTemplate, likesCounter , deliteCardPopup} from './constants.js';
import { handleImagePreview } from './modal.js';
import { getInitialCards, deliteCard, putLike, deliteLike} from './api.js';
import { renderCards } from '../index.js';
import { openPopup } from './utils.js';



export function createCard(item) {
    const cardElement = cardTemplate.content.querySelector('.element__background').cloneNode(true);

    const image = cardElement.querySelector('.element__background-picture');
    const name = cardElement.querySelector('.element__title');
    const like = cardElement.querySelector('.element__likes-counter')
    const heartButtonElement = cardElement.querySelector('.element__heart-button');
    const deleteButtonElement = cardElement.querySelector('.element__delete-button');
    // const confirmDeliteButton = deliteCardPopup.querySelector('.popup__confirm-delite');

    image.src = item.link;
    image.alt = item.name;
    like.textContent = item.likes.length;
    name.textContent = item.name;

    heartButtonElement.addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        // eventTarget.classList.toggle('element__heart-button_on');
        if(!eventTarget.classList.contains('element__heart-button_on')){
        putLike(item._id)
        .then((res)=>{
            console.log(res);
            eventTarget.classList.add('element__heart-button_on');
            
            
            
            
            like.textContent = res.likes.length;
        })
        .catch((err) => {
            console.log(err)
        })
        // .finally(()=>{
        //     like.textContent = item.likes.length;
        // })
    }
        else{
            deliteLike(item._id)
            .then((res)=>{
                console.log(res)
                eventTarget.classList.remove('element__heart-button_on')
                like.textContent = res.likes.length;
            })
            .catch((err) => {
                console.log(err)
            })
            // .finally(()=>{
            //     like.textContent = item.likes.length;
            // })
        }

       

    })
   //удаление карточки из сервера и верстки нажатием на deliteCard
    deleteButtonElement.addEventListener('click', function () {
        deliteCard(item._id)
        .then(() => {
            cardElement.remove();
            // evt.target.closest(".element__background").remove();
        })
        .catch((err) => {
            console.log(err)
        })
        // openPopup(deliteCardPopup);
        
        
        
    })
 
    // confirmDeliteButton.addEventListener('click', function(){
    //     
    // })



    image.addEventListener('click', () => handleImagePreview(item))

    // cardsContainer.prepend(cardElement);
    return cardElement;
}
const deliteDefaultBinButton =()=>{

    deleteButtonElement.remove()

}

export function addNewCard(card) {
    const cardElement = createCard(card)
    cardsContainer.prepend(cardElement);
}

export const loadCards = () => {
    
    getInitialCards()
        .then((cards) => {
            
            renderCards(cards);
            
            
            

        })
        
        .catch((err) => {
            console.log(err)
        })

}

