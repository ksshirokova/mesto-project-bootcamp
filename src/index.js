import './styles/index.css';
import {addNewCard} from "./components/card.js";
import {enableValidation,isValid} from './components/validate.js';
import {imagePopup, initialCards, popupInput, formAddCard, formAddName, formElement, editPopupButton, addCardPopupButton, profilePopup, addPopup, nameOfUser, nameInput, jobOfUser, jobInput, popupElement, titleImage, nameImage, validationConfig} from './components/constants.js';
import {openPopup} from "./components/utils.js";
import { closePopup } from './components/modal.js';

const renderCards = (elements) => {
  const cards = elements.map(addNewCard);

  // cardsContainer.prepend(...cards);

};

renderCards(initialCards);


enableValidation(validationConfig);

popupInput.addEventListener('input', isValid (formElement, popupInput, validationConfig));

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

editPopupButton.addEventListener("click", function () {
  openPopup(profilePopup);
});
addCardPopupButton.addEventListener("click", function () {
  openPopup(addPopup);
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(profilePopup);
    closePopup(addPopup);
    closePopup(imagePopup);
  }
});

// popupElement.addEventListener('click', function() {
//   closePopup(profilePopup);
//     closePopup(addPopup);
//     closePopup(imagePopup);
// });

// document.addEventListener('click', function (evt) {
//   if (evt.target.closest(".popup").length) {
//     // клик внутри элемента
//     return;
//   }
//   else 
//     closePopup(profilePopup);
//     closePopup(addPopup);
//     closePopup(imagePopup);
//   })

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
