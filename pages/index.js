


    

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
const imagePopup=document.querySelector('.popup__card-image');
const closeImagePopupButton = document.querySelector('.popup__close-button_third')

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
closeImagePopupButton.addEventListener('click',function(){
  closePopup(imagePopup);
} )



saveButton.addEventListener('click', () => {
    nameOfUser.textContent = nameInput.value;
    jobOfUser.textContent = jobInput.value;
    nameInput.value='';
    jobInput.value='';
    closePopup(popupElement);
})

// function handleFormSubmit(evt) {
//     evt.preventDefault();
//     nameInput.getAttribute('value');
//     jobInput.getAttribute('value');
//     nameOfUser.textContent =  nameInput.getAttribute('value');
//     jobOfUser.textContent = jobInput.getAttribute('value');
// }

// formElement.addEventListener('submit', handleFormSubmit);

const cardTemplate = document.querySelector('#element');



function addNewCard(titleValue, linkValue){
  
  
  const cardElement = cardTemplate.cloneNode(true).content;
  
  cardElement.querySelector('.element__background-picture').src = linkValue;
  cardElement.querySelector('.element__title').textContent = titleValue;
  const imageButton = cardElement.querySelector('.element__background-picture');
  
  const heartButtonElement = cardElement.querySelector('.element__heart-button'); 

  heartButtonElement.addEventListener('click', function(evt){ 
    const eventTarget = evt.target; 
    eventTarget.classList.toggle('element__heart-button_on');
    eventTarget.classList.toggle('element__heart-button')
 }) 
 const deliteButtonElement = cardElement.querySelector('.element__delite-button');
 deliteButtonElement.addEventListener('click', function(evt){
   evt.target.closest(".element__background").remove();
 })
 imageButton.addEventListener('click', function(evt){
  
  const pictureLink = evt.target.closest('.element__background-picture').src;
  
  
  
  const elementSublitleTexting =  evt.target.closest('.element__background-subtitle')
  console.log(elementSublitleTexting);


  const elementSubtitleText = document.querySelector('.element__title').textContent
  document.querySelector('.popup__background-picture').src = pictureLink;
  document.querySelector('.popup__subtitle').textContent = elementSubtitleText;
  
  
  
  
  

  openPopup(imagePopup);
  
 })

 

 cardsContainer.prepend(cardElement); 
 return cardElement;
 
  

}




addCardButton.addEventListener('click', function(){
 const title = document.querySelector('.popup__name_link');
 const link = document.querySelector('.popup__job_link');
 link.value = ""
 title.value = ""
 

 addNewCard();
  
 

 

 

});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  const renderCard = (data) => {
    cardsContainer.append(addNewCard(data));
  };
  initialCards.forEach((data) =>{
      renderCard(data)
      document.querySelector('.element__title').textContent = data.name;
      document.querySelector('.element__background-picture').src = data.link;

  });
 