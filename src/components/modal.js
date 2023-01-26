//РАБОТА С МОДАЛЬНЫМИ ОКНАМИ (ПОПАПАМИ)
import { closeByEscape } from '../index.js';
import {popupImageTitle, closeButtons, imagePopup, popupImage} from './constants.js';
import {openPopup} from './utils.js';


export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
   
};



export function handleImagePreview(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupImageTitle.textContent = card.name;
  openPopup(imagePopup);
}


