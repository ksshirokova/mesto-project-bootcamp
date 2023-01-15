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
export const addCardButton = document.querySelector('.popup__save-button_card');
export const cardsContainer = document.querySelector('.elements__list');
export const popupElement = document.querySelector('.popup');
export const openedPopup = document.querySelector('.popup_opened')
export const profilePopup = document.querySelector('.popup_name_add-name');
export const addPopup = document.querySelector('.popup_name_add-card');
export const editPopupButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('.popup__close-button');
export const addCardPopupButton = document.querySelector('.profile__button');
export const addCardCloseButton = document.querySelector('.popup__close-button_second');
export const formElement = document.querySelector('.popup__form');
export const formAddCard = document.querySelector('.popup__form_type_add-card');
export const formAddName = document.querySelector('.popup__form_type_add-name');
export const nameInput = document.querySelector('.popup__name');
export const popupInput = document.querySelector('.popup__input')
export const titleImage = document.querySelector('.popup__job_image-link');
export const nameImage = document.querySelector('.popup__name_image-text');
export const jobInput = document.querySelector('.popup__job');
export const popupContainer = document.querySelector('.popup__container')
export const nameOfUser = document.querySelector('.profile__title-info');
export const jobOfUser = document.querySelector('.profile__subtitle-info');
export const imagePopup = document.querySelector('.popup_card-image');
export const closeImagePopupButton = document.querySelector('.popup__close-button_third');
export const formInput = document.querySelector('.popup__input');
export const formError = formElement.querySelector(`.${formInput.id}-error`);
export const buttonText = document.querySelector('.popup__button-text');
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const popupImage = document.querySelector('.popup__background-picture');
export const popupImageTitle = document.querySelector('.popup__subtitle');
export const cardTemplate = document.querySelector('#element');
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonTextClass: '.popup__button-text',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: '.popup__save-button_inactive',
    inactiveButtonTextClass: '.popup__button-text_inactive',
    inputErrorClass: '.popup__input_type_error',
    errorClass: '.popup__input-error_active',
};