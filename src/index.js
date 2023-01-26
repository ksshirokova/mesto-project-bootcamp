import './styles/index.css';
import { addNewCard, loadCards } from "./components/card.js";
import { enableValidation, isValid } from './components/validate.js';
import { imagePopup, profileAvatar, updateAvatarPopup, profileEditAvatarButton, inputElement, formAddCard, formAddName, formElement, buttonEditProfile, buttonAddCard, profilePopup, nameOfUser, nameInput, jobOfUser, jobInput, popupElement, titleImage, nameImage, validationConfig, cardPopup, popupInputAbout, allPopups, popupInputName, updateAvatarInput, formChangeAvatar, cardsContainer } from './components/constants.js';
import { openPopup } from "./components/utils.js";
import { closePopup } from './components/modal.js';
import { getInitialCards, getUsersInformation, editProfileInformation, changeUsersAvatar, addNewCardOnServer, addCard } from './components/api.js';



export const renderCards = (elements) => {
  elements.map(addNewCard);
  // const checkLike = ()=>{
    
  //   if(elements.owner._id === '63cfb0e1d3fafc636026387a'){
  //   evt.target.classList.add('element__heart-button_on');
  //   }
  
  // }
  // checkLike()

  // cardsContainer.append(...cards);

};

// renderCards(getInitialCards);

let usersId;
getUsersInformation()
.then((result)=>{
  // result._id = usersId
  usersId = result._id
  console.log(result)
  
  fillInUserData(result.name, result.about, result.avatar);
})
.catch((err)=>{
  console.log(err)
})

console.log(usersId)


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

  const button = formChangeAvatar.querySelector('.popup__save-button');
  const text = formChangeAvatar.querySelector('.popup__button-text')
  event.preventDefault();
  setButtonState(button, true);
  changeUsersAvatar(updateAvatarInput.value)
    .then(() => {
      changeAvatar(updateAvatarInput)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(button, false);
      closePopup(updateAvatarPopup);
      event.target.reset();
    })




})



formAddName.addEventListener('submit', function (event) {
  const button = formAddName.querySelector('.popup__save-button');
  const text = formAddName.querySelector('.popup__button-text')
  event.preventDefault()
  setButtonState(button, true);
  // changeUserData(popupInputName, popupInputAbout)
  editProfileInformation(popupInputName.value, popupInputAbout.value)
    .then(() => {
      changeUserData(popupInputName, popupInputAbout)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setButtonState(button, false);
      closePopup(popupElement);
    })





})

const setButtonState = (button, isSending) => {
  button.disabled = isSending;
  button.textContent = isSending ? 'Сохранение...' : 'Сохранить';
}

//добавление карточки в верстку и на сервер по надатию кнопки
formAddCard.addEventListener('submit', function (event) {
  const button = formAddCard.querySelector('.popup__save-button');
  const text = formAddCard.querySelector('.popup__button-text')
  event.preventDefault()
  setButtonState(button, true);
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
      setButtonState(button, false);
      closePopup(cardPopup);
    })
  // addNewCard({
  //   link: titleImage.value,
  //   name: nameImage.value

  // })

  // titleImage.value = '';
  // nameImage.value = '';



  // event.target.reset();

})

profileAvatar.addEventListener("click", function (event) {

  openPopup(updateAvatarPopup);

})
// profileEditAvatarButton.addEventListener("click", function () {
//   openPopup(updateAvatarPopup);
// })

buttonEditProfile.addEventListener("click", function () {
  popupInputAbout.value = jobOfUser.textContent ;
  popupInputName.value = nameOfUser.textContent ;
  
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