//ВАЛИДАЦИЯ


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, popupInput, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${popupInput.id}-error`)
    popupInput.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, popupInput, validationConfig) => {
    const errorElement = formElement.querySelector(`.${popupInput.id}-error`);
    popupInput.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';

    errorElement.classList.remove(validationConfig.errorClass);

};

// Функция, которая проверяет валидность поля
export const isValid = (formElement, popupInput, validationConfig) => {
    if (!popupInput.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formElement, popupInput, formInput.validationMessage, validationConfig);
    } else {
        // Если проходит, скроем
        hideInputError(formElement, popupInput, validationConfig);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((popupInput) => {
        return !popupInput.validity.valid;
    })
    
};

const toggleButtonState = (inputList, submitButton, buttonText, validationConfig) => {
    
    if (hasInvalidInput(inputList)) {
        buttonText.classList.add(validationConfig.inactiveButtonTextClass);
        submitButton.classList.add(validationConfig.inactiveButtonClass);

    } else {
        // иначе сделай кнопку активной
        submitButton.classList.remove(validationConfig.inactiveButtonClass);
        buttonText.classList.remove(validationConfig.inactiveButtonTextClass);
    }
}

const setEventListeners = (formElement, validationConfig) => {

    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    const buttonText = formElement.querySelector(validationConfig.buttonTextClass);
    toggleButtonState(inputList, submitButton, buttonText, validationConfig);

    inputList.forEach((popupInput) => {
        popupInput.addEventListener('input', () => {
            isValid(formElement, popupInput, validationConfig);
            toggleButtonState(inputList, submitButton, buttonText, validationConfig);
        });

    });

};



export const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    });
};

// enableValidation();

