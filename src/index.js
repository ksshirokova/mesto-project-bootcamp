import './styles/index.css';
import { addNewCard } from "./components/card.js";
import { enableValidation, isValid } from './components/validate.js';
import { imagePopup, initialCards, inputElement, formAddCard, formAddName, formElement, buttonEditProfile, buttonAddCard, profilePopup, nameOfUser, nameInput, jobOfUser, jobInput, popupElement, titleImage, nameImage, validationConfig , cardPopup, allPopups} from './components/constants.js';
import { openPopup } from "./components/utils.js";
import { closePopup } from './components/modal.js';
import { getInitialCards } from './components/api.js';

export const renderCards = (elements) => {
  const cards = elements.map(addNewCard);

  // cardsContainer.prepend(...cards);

};

// renderCards(initialCards);

getInitialCards()


enableValidation(validationConfig);

inputElement.addEventListener('input', isValid(formElement, inputElement, validationConfig));

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
  
  
  closePopup(cardPopup);
  event.target.reset();
  
})

buttonEditProfile.addEventListener("click", function () {
  openPopup(profilePopup);
});
buttonAddCard.addEventListener("click", function () {
  openPopup(cardPopup);
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(profilePopup);
    closePopup(cardPopup);
    closePopup(imagePopup);


    
  }
});




profilePopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")){
    
    closePopup(profilePopup);
    
  }
});

cardPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")){
    
    closePopup(cardPopup);
    
  }
});

imagePopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")){
    
    closePopup(imagePopup);
    
  }
});



