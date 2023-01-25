//РАБОТА С КАРТОЧКАМИ
import { cardsContainer, cardTemplate, likesCounter , deliteCardPopup} from './constants.js';
import { closePopup, handleImagePreview } from './modal.js';
import { getInitialCards, deliteCard, putLike, deliteLike} from './api.js';
import { renderCards } from '../index.js';



export function createCard(item) {
    const cardElement = cardTemplate.content.querySelector('.element__background').cloneNode(true);

    const image = cardElement.querySelector('.element__background-picture');
    const name = cardElement.querySelector('.element__title');
    const like = cardElement.querySelector('.element__likes-counter')
    const heartButtonElement = cardElement.querySelector('.element__heart-button');
    const deleteButtonElement = cardElement.querySelector('.element__delete-button');
    
    // const confirmDeliteButton = deliteCardPopup.querySelector('.popup__button-confirm');
    
    
    image.src = item.link;
    image.alt = item.name;
    like.textContent = item.likes.length;
    name.textContent = item.name;
    

   
    const likes = item.likes
    const ownerId = item.owner._id;
    const chechId=()=>{
        if (ownerId!=="2561024ef781e917ceb01886"){
            cardElement.removeChild(deleteButtonElement)
        }
    }
    chechId()
    
    const chechLikes = (likes)=>{
        likes.forEach((like=>{
            if(like._id==="2561024ef781e917ceb01886"){
                heartButtonElement.classList.add('element__heart-button_on')
            }

        }))}
    
        
        
    chechLikes(likes)
    

    heartButtonElement.addEventListener('click', function (evt) {
        const eventTarget = evt.target;
        
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
            
        }

       

    })

   //удаление карточки из сервера и верстки нажатием на deliteCard
    deleteButtonElement.addEventListener('click', function () {
        
        deliteCard(item._id)
        .then(() => {
            cardElement.remove();
            
        })
        .catch((err) => {
            console.log(err)
        })
        // .finally(()=>{
        //     closePopup(deliteCardPopup)
        // })
        // openPopup(deliteCardPopup);
        
        
        
    })
 
    // confirmDeliteButton.addEventListener('click', function(){
        
    //     // closePopup(deliteCardPopup)
    // })



    image.addEventListener('click', () => handleImagePreview(item))
    
    // cardsContainer.prepend(cardElement);
    return cardElement;
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

