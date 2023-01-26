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

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    
    formElement.addEventListener('reset', ()=>{
        setTimeout(()=>{
            disableButton(buttonElement, inactiveButtonClass);
        }, 0)
        
    })
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, rest);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
            
            
        });
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        
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


export const enableButton = (buttonElement, inactiveButtonClass) =>{
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
}

export const disableButton = (buttonElement, inactiveButtonClass)=>{
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;

}




const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, inactiveButtonClass)

    } else {
        // иначе сделай кнопку активной
        enableButton(buttonElement, inactiveButtonClass)
    }
}





