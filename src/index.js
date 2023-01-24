import './styles/index.css';
import { addNewCard, loadCards } from "./components/card.js";
import { enableValidation, isValid } from './components/validate.js';
import { imagePopup, profileAvatar, updateAvatarPopup, profileEditAvatarButton, inputElement, formAddCard, formAddName, formElement, buttonEditProfile, buttonAddCard, profilePopup, nameOfUser, nameInput, jobOfUser, jobInput, popupElement, titleImage, nameImage, validationConfig, cardPopup, popupInputAbout, allPopups, popupInputName, updateAvatarInput, formChangeAvatar, submitButton, submitButtonText } from './components/constants.js';
import { openPopup } from "./components/utils.js";
import { closePopup } from './components/modal.js';
import { getInitialCards, getUsersInformation, editProfileInformation, changeUsersAvatar, addNewCardOnServer, addCard } from './components/api.js';


export const renderCards = (elements) => {
  const cards = elements.map(addNewCard);

  // cardsContainer.prepend(...cards);

};

// renderCards(getInitialCards);


getUsersInformation();



enableValidation(validationConfig);

inputElement.addEventListener('input', isValid(formElement, inputElement, validationConfig));

export const fillInUserData = (name, about, url) => {
  nameOfUser.textContent = name;
  jobOfUser.textContent = about;
  profileAvatar.src = url;
}

export const changeUserData = (name, about) => {
  nameOfUser.textContent = name.value;
  jobOfUser.textContent = about.value;

}



export const changeAvatar = (avatar) => {
  profileAvatar.src = avatar.value;
}


//при отправке меняет текст кнопки 


formChangeAvatar.addEventListener('submit', function (event) {


  event.preventDefault()
  changeUsersAvatar(updateAvatarInput.value);
  changeAvatar(updateAvatarInput)


  closePopup(updateAvatarPopup);
  event.target.reset();
})



formAddName.addEventListener('submit', function (event) {

  event.preventDefault();
  changeUserData(popupInputName, popupInputAbout)
  editProfileInformation(popupInputName.value, popupInputAbout.value)




  closePopup(popupElement);
})

const setButtonState = (button, buttonText, isSending) => {
  button.disabled = isSending;
  buttonText.textContent = isSending ? 'Сохранение...' : 'Сохранить';
}
//добавление карточки в верстку и на сервер по надатию кнопки
formAddCard.addEventListener('submit', function (event) {
  const button = formElement.querySelector('.popup__save-button');
  const text = formElement.querySelector('.popup__button-text')
  event.preventDefault()
  setButtonState(button, text, true);
  // addNewCard(titleImage.value, nameImage.value);
  addCard(nameImage.value, titleImage.value)
    .then((card) => {
      addNewCard(card)
      formAddCard.reset()

    })
    .catch((err) => {
      console.log(err, "карточка не добавилась")
    })
    .finally(() => {
      setButtonState(submitButton, submitButtonText, false)
    })
  // addNewCard({
  //   link: titleImage.value,
  //   name: nameImage.value

  // })

  // titleImage.value = '';
  // nameImage.value = '';


  closePopup(cardPopup);
  // event.target.reset();

})

profileAvatar.addEventListener("click", function (event) {

  openPopup(updateAvatarPopup);

})
profileEditAvatarButton.addEventListener("click", function () {
  openPopup(updateAvatarPopup);
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
    closePopup(updateAvatarPopup)



  }
});




profilePopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")) {

    closePopup(profilePopup);

  }
});

cardPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")) {

    closePopup(cardPopup);

  }
});

imagePopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")) {

    closePopup(imagePopup);

  }
});

updateAvatarPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains("popup_opened")) {

    closePopup(updateAvatarPopup);

  }
});



loadCards()