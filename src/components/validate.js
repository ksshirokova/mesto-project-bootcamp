//ВАЛИДАЦИЯ

import { formInput } from "./constants.js";

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, popupInput, errorMessage) => {
    const errorElement = formElement.querySelector(`.${popupInput.id}-error`)
    popupInput.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, popupInput) => {
    const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
    popupInput.classList.remove('popup__input_type_error');
    errorElement.textContent = '';

    errorElement.classList.remove('popup__input-error_active');

};

// Функция, которая проверяет валидность поля
export const isValid = (formElement, popupInput) => {
    if (!popupInput.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formElement, popupInput, formInput.validationMessage);
    } else {
        // Если проходит, скроем
        hideInputError(formElement, popupInput);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((popupInput) => {
        return !popupInput.validity.valid;
    })
    
};

const toggleButtonState = (inputList, submitButton, buttonText) => {
    
    if (hasInvalidInput(inputList)) {
        buttonText.classList.add('popup__button-text_inactive');
        submitButton.classList.add('popup__save-button_inactive');

    } else {
        // иначе сделай кнопку активной
        submitButton.classList.remove('popup__save-button_inactive');
        buttonText.classList.remove('popup__button-text_inactive');
    }
}

const setEventListeners = (formElement, validationConfig) => {

    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    const buttonText = formElement.querySelector(validationConfig.buttonTextClass);
    toggleButtonState(inputList, submitButton, buttonText);

    inputList.forEach((popupInput) => {
        popupInput.addEventListener('input', () => {
            isValid(formElement, popupInput, validationConfig);
            toggleButtonState(inputList, submitButton, buttonText);
        });

    });

};



export const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    console.log(formList)
    console.log(validationConfig.formSelector)
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    });
};

// enableValidation();

