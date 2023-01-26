//УТИЛИТА
import { closeByEscape } from "../index.js";


export function openPopup(popup) {
  
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape )
  
};