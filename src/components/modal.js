//РАБОТА С МОДАЛЬНЫМИ ОКНАМИ (ПОПАПАМИ)
import {popupImageTitle, closeButtons, imagePopup, popupImage} from './constants.js';
import {openPopup} from './utils.js';


export function closePopup(popup) {
  popup.classList.remove('popup_opened');
   
};


closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

export function handleImagePreview(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupImageTitle.textContent = card.name;
  openPopup(imagePopup);
}


