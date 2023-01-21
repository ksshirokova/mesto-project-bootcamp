//УТИЛИТА
import { closePopup } from "./modal.js";
import { disableButton } from "./validate.js";


export function openPopup(popup) {
  // disableButton(buttonElement, buttonElementText, inactiveButtonClass, inactiveButtonTextClass)
  popup.classList.add('popup_opened');
  // popup.addEventListener('keydown', (event)=>{
  //   if(event.key==='Escape'){
  //     closePopup(popup)
  //   }
  // })

};