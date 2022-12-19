
const heartButtonElement = document.querySelector('.element__heart-button'); 


    

const addCardButton = document.querySelector('.popup__save-button_card');
const cardsContainer = document.querySelector('.elements');
const popupElement = document.querySelector('.popup');
const editPopup = document.querySelector('.popup_name_add-name');
const addPopup = document.querySelector('.popup_name_add-card');
const editPopupButton = document.querySelector('.profile__edit-button');
const closePopupElement = document.querySelector('.popup__close-button');
const addCardPopupButton = document.querySelector('.profile__button');
const secondClosePopupElement = document.querySelector('.popup__close-button_second');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const saveButton=document.querySelector('.popup__save-button');
const nameOfUser=document.querySelector('.profile__title-info');
const jobOfUser=document.querySelector('.profile__subtitle-info');

function openPopup(popup) {
    popup.classList.add('popup_opened');
};
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};
editPopupButton.addEventListener("click", function () {
    openPopup(editPopup);
});
addCardPopupButton.addEventListener("click", function () {
    openPopup(addPopup);
});
closePopupElement.addEventListener('click', function () {
    closePopup(popupElement);
});
secondClosePopupElement.addEventListener('click', function (){
    closePopup(addPopup);
})




saveButton.addEventListener('click', () => {
    nameOfUser.textContent = nameInput.value;
    jobOfUser.textContent = jobInput.value;
    nameInput.value='';
    jobInput.value='';
    closePopup(popupElement);
})



const cardTemplate = document.querySelector('#element').content;

function addNewCard(titleValue, linkValue){
  
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.element__background-picture').src = linkValue;
  cardElement.querySelector('.element__title').textContent = titleValue;

//   heartButtonElement.addEventListener('click', function(evt){ 
//     const eventTarget = evt.target; 
//     eventTarget.classList.toggle('element__heart-button_on');
//     eventTarget.classList.toggle('element__heart-button')
//  }) 

  cardsContainer.prepend(cardElement);
  
}


addCardButton.addEventListener('click', function(){
 const title = document.querySelector('.popup__name_link');
 const link = document.querySelector('.popup__job_link');

 addNewCard(title.value, link.value);

 link.value = '';
 title.value = '';

 
});
