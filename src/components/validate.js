//ВАЛИДАЦИЯ

export const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(formElement=>{
        formElement.addEventListener('submit', (event) =>{
            event.preventDefault()
        })
    
        setEventListeners(formElement, rest);
    })
    
    
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, buttonTextClass, inactiveButtonClass, inactiveButtonTextClass, ...rest}) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    const buttonElementText = formElement.querySelector(buttonTextClass);
    
    formElement.addEventListener('reset', ()=>{
        setTimeout(()=>{
            disableButton(buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass);
        }, 0)
        
    })
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            toggleButtonState(inputList, buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass);
            isValid(formElement, inputElement, rest);
            
        });
        toggleButtonState(inputList, buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass);
    });
   
};


export const isValid = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    if (!inputElement.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass, inputElement.validationMessage);
    } else {
        // Если проходит, скроем
        hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
    }
};

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass, errorMessage) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, errorElement, inputErrorClass, errorClass) => {
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
    

};


// Функция, которая проверяет валидность поля


const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    })
    
};


const enableButton = (buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass) =>{
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElementText.classList.remove(inactiveButtonTextClass);
    buttonElement.disabled = false;
}

export const disableButton = (buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass)=>{
    buttonElementText.classList.add(inactiveButtonTextClass);
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;

}




const toggleButtonState = (inputList, buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass) => {
    
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass)

    } else {
        // иначе сделай кнопку активной
        enableButton(buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass)
    }
}





