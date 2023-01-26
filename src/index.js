import './styles/index.css';
import { addNewCard } from "./components/card.js";
import { enableValidation, isValid } from './components/validate.js';
import { imagePopup, profileAvatar, updateAvatarPopup, formAddCard, formAddName, buttonEditProfile, buttonAddCard, profilePopup, nameOfUser, jobOfUser, titleImage, nameImage, validationConfig, cardPopup, popupInputAbout, popupInputName, updateAvatarInput, formChangeAvatar, openedPopup, popups } from './components/constants.js';
import { openPopup } from "./components/utils.js";
import { closePopup } from './components/modal.js';
import { getInitialCards, getUsersInformation, editProfileInformation, changeUsersAvatar, addCard } from './components/api.js';



export const renderCards = (elements) => {
  elements.map(addNewCard);


};


export let usersId;

Promise.all([getUsersInformation(), getInitialCards()])
  .then(([userData, cards]) => {
    usersId = userData._id

    fillInUserData(userData.name, userData.about, userData.avatar);

    renderCards(cards);
  
  })
  .catch(err => {
    console.log(err)
  });





enableValidation(validationConfig);

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
  event.preventDefault();
  setButtonState(event.submitter, true);
  changeUsersAvatar(updateAvatarInput.value)
    .then(() => {
      changeAvatar(updateAvatarInput)
    })
    .then(() => {
      closePopup(updateAvatarPopup);
      event.target.reset();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(event.submitter, false);
    })




})



formAddName.addEventListener('submit', function (event) {
  event.preventDefault()
  setButtonState(event.submitter, true);
  editProfileInformation(popupInputName.value, popupInputAbout.value)
    .then(() => {
      changeUserData(popupInputName, popupInputAbout)
    })
    .then(() => {
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(event.submitter, false);

    })





})

const setButtonState = (button, isSending) => {
  button.disabled = isSending;
  button.textContent = isSending ? 'Сохранение...' : 'Сохранить';
}

//добавление карточки в верстку и на сервер по надатию кнопки
formAddCard.addEventListener('submit', function (event) {
  event.preventDefault()
  setButtonState(event.submitter, true);
  addCard(nameImage.value, titleImage.value)
    .then((card) => {
      addNewCard(card)
      formAddCard.reset()

    })
    .then(() => {
      closePopup(cardPopup);
      event.target.reset();
    })
    .catch((err) => {
      console.log(err, "карточка не добавилась")
    })
    .finally(() => {
      setButtonState(event.submitter, false);
    })




})

profileAvatar.addEventListener("click", function (event) {

  openPopup(updateAvatarPopup);

})


buttonEditProfile.addEventListener("click", function () {
  popupInputAbout.value = jobOfUser.textContent;
  popupInputName.value = nameOfUser.textContent;

  openPopup(profilePopup);

});
buttonAddCard.addEventListener("click", function () {
  openPopup(cardPopup);
});


export const closeByEscape = (evt) =>{
  if(evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
  }
}





profilePopup.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains("popup_opened")) {

    closePopup(profilePopup);

  }
});



popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})





