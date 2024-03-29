export const initialCards = [
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
export const popups = document.querySelectorAll('.popup')
export const cardsContainer = document.querySelector('.elements__list');
export const openedPopup = document.querySelector('.popup_opened')
export const profilePopup = document.querySelector('.popup_name_add-name');
export const deliteCardPopup = document.querySelector('.popup_delite-card')
export const cardPopup = document.querySelector('.popup_name_add-card');
export const updateAvatarPopup = document.querySelector('.popup_update-profile');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddCard = document.querySelector('.profile__button');
export const formElement = document.querySelector('.popup__form');
export const formAddCard = document.querySelector('.popup__form_type_add-card');
export const formAddName = document.querySelector('.popup__form_type_add-name');
export const inputElement = document.querySelector('.popup__input');
export const updateAvatarInput = document.querySelector('.popup__avatar_image-link');
export const titleImage = document.querySelector('.popup__job_image-link');
export const nameImage = document.querySelector('.popup__name_image-text');
export const popupContainer = document.querySelector('.popup__container')
export const nameOfUser = document.querySelector('.profile__title-info');
export const jobOfUser = document.querySelector('.profile__subtitle-info');
export const imagePopup = document.querySelector('.popup_card-image');
export const formError = formElement.querySelector(`.${inputElement.id}-error`);
export const formChangeAvatar = document.querySelector('.popup__form_type_update-profile')
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const popupImage = document.querySelector('.popup__background-picture');
export const popupImageTitle = document.querySelector('.popup__subtitle');
export const cardTemplate = document.querySelector('#element');
export const profileAvatar = document.querySelector('.profile__avatar')
export const popupInputName = document.querySelector('#input-name');
export const popupInputAbout = document.querySelector('#input-job');



export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
};
