import './styles/index.css';
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
const addCardButton = document.querySelector('.popup__save-button_card');
const cardsContainer = document.querySelector('.elements__list');
const popupElement = document.querySelector('.popup');
const profilePopup = document.querySelector('.popup_name_add-name');
const addPopup = document.querySelector('.popup_name_add-card');
const editPopupButton = document.querySelector('.profile__edit-button');
const closePopupElement = document.querySelector('.popup__close-button');
const addCardPopupButton = document.querySelector('.profile__button');
const secondClosePopupElement = document.querySelector('.popup__close-button_second');
const formElement = document.querySelector('.popup__form');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const formAddName = document.querySelector('.popup__form_type_add-name');
const nameInput = document.querySelector('.popup__name');
const popupInput = document.querySelector('.popup__input')
const titleImage = document.querySelector('.popup__job_image-link');
const nameImage = document.querySelector('.popup__name_image-text');
const jobInput = document.querySelector('.popup__job');
const nameOfUser = document.querySelector('.profile__title-info');
const jobOfUser = document.querySelector('.profile__subtitle-info');
const imagePopup = document.querySelector('.popup_card-image');
const closeImagePopupButton = document.querySelector('.popup__close-button_third');

const popupImage = document.querySelector('.popup__background-picture');
const popupImageTitle = document.querySelector('.popup__subtitle');

const cardTemplate = document.querySelector('#element');

const renderCards = (elements) => {

  
  const cards = elements.map(addNewCard);

  cardsContainer.prepend(...cards);

};

renderCards(initialCards);

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!popupInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(popupInput);
  } else {
    // Если проходит, скроем
    hideInputError(popupInput);
  }
};

// closePopupElement.forEach((button)=>{
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });


// Вызовем функцию isValid на каждый ввод символа
popupInput.addEventListener('input', isValid); 

function openPopup(popup) {
  popup.classList.add('popup_opened');
};
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
editPopupButton.addEventListener("click", function () {
  openPopup(profilePopup);
});
addCardPopupButton.addEventListener("click", function () {
  openPopup(addPopup);
});
closePopupElement.addEventListener('click', function () {
  closePopup(popupElement);
});
secondClosePopupElement.addEventListener('click', function () {
  closePopup(addPopup);
})
closeImagePopupButton.addEventListener('click', function () {
  closePopup(imagePopup);
})









function createCard (item){
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



function addNewCard(card) {
  const cardElement = createCard(card)
  cardsContainer.prepend(cardElement);
}



function handleImagePreview(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupImageTitle.textContent = card.name;
  openPopup(imagePopup);
}


formAddName.addEventListener('submit', function (event) {
  
  event.preventDefault()
  
  nameOfUser.textContent = nameInput.value;
  jobOfUser.textContent = jobInput.value;
  
  closePopup(popupElement);
})

formAddCard.addEventListener('submit', function (event) {
  
  event.preventDefault()

  addNewCard({
    link: titleImage.value,
    name: nameImage.value
    
  })

  // titleImage.value = '';
  // nameImage.value = '';
  event.target.reset()
 
  closePopup(addPopup);
})

