(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{vy:()=>G,UY:()=>F}),document.querySelector(".popup__save-button_card");var t=document.querySelector(".elements__list"),n=document.querySelector(".popup"),o=(document.querySelector(".popup_opened"),document.querySelector(".popup_name_add-name")),r=(document.querySelector(".popup_delite-card"),document.querySelector(".popup_name_add-card")),c=document.querySelector(".popup_update-profile"),u=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__button"),i=document.querySelector(".popup__form"),l=document.querySelector(".popup__form_type_add-card"),s=document.querySelector(".popup__form_type_add-name"),p=(document.querySelector(".popup__name"),document.querySelector(".popup__input")),d=document.querySelector(".popup__avatar_image-link"),_=document.querySelector(".popup__job_image-link"),f=document.querySelector(".popup__name_image-text"),m=(document.querySelector(".popup__job"),document.querySelector(".popup__container"),document.querySelector(".profile__title-info")),v=document.querySelector(".profile__subtitle-info"),y=document.querySelector(".popup_card-image"),b=document.querySelector(".popup__input"),h=(i.querySelector(".".concat(b.id,"-error")),document.querySelector(".popup__form_type_update-profile")),S=(document.querySelector(".popup__button-text"),document.querySelectorAll(".popup__close-button")),q=document.querySelector(".popup__background-picture"),L=document.querySelector(".popup__subtitle"),g=document.querySelector("#element"),E=document.querySelector(".profile__avatar"),k=document.querySelector("#input-name"),C=document.querySelector("#input-job"),x=document.querySelector(".profile__edit-avatar"),O=(document.querySelector(".popup__save-button"),document.querySelector(".popup__button-text"),document.querySelector(".element__likes-counter"),{formSelector:".popup__form",inputSelector:".popup__input",buttonTextClass:".popup__button-text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inactiveButtonTextClass:"popup__button-text_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});function T(e){e.classList.add("popup_opened")}function j(e){e.classList.remove("popup_opened")}S.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return j(t)}))}));var U={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-4",headers:{authorization:"3551413f-7809-4b8d-8cd3-def47480ebb4","Content-Type":"application/json"}},P=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function B(e){var n=function(e){var t=g.content.querySelector(".element__background").cloneNode(!0),n=t.querySelector(".element__background-picture"),o=t.querySelector(".element__title"),r=t.querySelector(".element__likes-counter"),c=t.querySelector(".element__heart-button"),u=t.querySelector(".element__delete-button");n.src=e.link,n.alt=e.name,r.textContent=e.likes.length,o.textContent=e.name;var a=e.likes;return"2561024ef781e917ceb01886"!==e.owner._id&&t.removeChild(u),function(e){e.forEach((function(e){"2561024ef781e917ceb01886"===e._id&&c.classList.add("element__heart-button_on")}))}(a),c.addEventListener("click",(function(t){var n,o=t.target;o.classList.contains("element__heart-button_on")?function(e){return fetch("".concat(U.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:U.headers}).then(P)}(e._id).then((function(e){console.log(e),o.classList.remove("element__heart-button_on"),r.textContent=e.likes.length})).catch((function(e){console.log(e)})):(n=e._id,fetch("".concat(U.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:U.headers}).then(P)).then((function(e){console.log(e),o.classList.add("element__heart-button_on"),r.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),u.addEventListener("click",(function(){var n;(n=e._id,fetch("".concat(U.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:U.headers}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){t.remove()})).catch((function(e){console.log(e)}))})),n.addEventListener("click",(function(){return t=e,q.src=t.link,q.alt=t.name,L.textContent=t.name,void T(y);var t})),t}(e);t.prepend(n)}var A=["inputSelector","submitButtonSelector","buttonTextClass","inactiveButtonClass","inactiveButtonTextClass"];function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D,N,J,H=function(e,t,n){var o=n.inputErrorClass,r=n.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.validity.valid?I(e,t,c,o,r):z(e,t,c,o,r,t.validationMessage)},z=function(e,t,n,o,r,c){t.classList.add(o),n.classList.add(r),n.textContent=c},I=function(e,t,n,o,r){t.classList.remove(o),n.classList.remove(r),n.textContent=""},M=function(e,t,n,o){t.classList.add(o),e.classList.add(n),e.disabled=!0},Y=function(e,t,n,o,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t,n,o){e.classList.remove(n),t.classList.remove(o),e.disabled=!1}(t,n,o,r):M(t,n,o,r)},F=function(e){e.map(B)};fetch("".concat(U.baseUrl,"/users/me"),{headers:U.headers}).then(P).then((function(e){G(e.name,e.about,e.avatar)})),N=(D=O).formSelector,J=w(D,["formSelector"]),Array.from(document.querySelectorAll(N)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=t.inputSelector,o=t.submitButtonSelector,r=t.buttonTextClass,c=t.inactiveButtonClass,u=t.inactiveButtonTextClass,a=w(t,A),i=Array.from(e.querySelectorAll(n)),l=e.querySelector(o),s=e.querySelector(r);e.addEventListener("reset",(function(){setTimeout((function(){M(l,s,c,u)}),0)})),i.forEach((function(t){t.addEventListener("input",(function(){Y(i,l,s,c,u),H(e,t,a)})),Y(i,l,s,c,u)}))}(e,J)})),p.addEventListener("input",H(i,p,O));var G=function(e,t,n){m.textContent=e,v.textContent=t,E.src=n};h.addEventListener("submit",(function(e){var t,n=h.querySelector(".popup__save-button"),o=h.querySelector(".popup__button-text");e.preventDefault(),K(n,o,!0),(t=d.value,fetch("".concat(U.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:U.headers,body:JSON.stringify({avatar:t})}).then(P)).then((function(){var e;e=d,E.src=e.value})).catch((function(e){console.log(e)})).finally((function(){K(n,o,!1),j(c),e.target.reset()}))})),s.addEventListener("submit",(function(e){var t,o,r=s.querySelector(".popup__save-button"),c=s.querySelector(".popup__button-text");e.preventDefault(),K(r,c,!0),(t=k.value,o=C.value,fetch("".concat(U.baseUrl,"/users/me"),{method:"PATCH",headers:U.headers,body:JSON.stringify({name:t,about:o})}).then(P)).then((function(){var e,t;e=k,t=C,m.textContent=e.value,v.textContent=t.value})).catch((function(e){console.log(e)})).finally((function(){K(r,c,!1),j(n)}))}));var K=function(e,t,n){e.disabled=n,t.textContent=n?"Сохранение...":"Сохранить"};l.addEventListener("submit",(function(e){var t,n,o=l.querySelector(".popup__save-button"),c=l.querySelector(".popup__button-text");e.preventDefault(),K(o,c,!0),(t=f.value,n=_.value,fetch("".concat(U.baseUrl,"/cards"),{method:"POST",headers:U.headers,body:JSON.stringify({name:t,link:n})}).then(P)).then((function(e){B(e),l.reset()})).catch((function(e){console.log(e,"карточка не добавилась")})).finally((function(){K(o,c,!1),j(r)}))})),E.addEventListener("click",(function(e){T(c)})),x.addEventListener("click",(function(){T(c)})),u.addEventListener("click",(function(){C.value=v.textContent,k.value=m.textContent,T(o)})),a.addEventListener("click",(function(){T(r)})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(j(o),j(r),j(y),j(c))})),o.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&j(o)})),r.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&j(r)})),y.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&j(y)})),c.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&j(c)})),fetch("".concat(U.baseUrl,"/cards"),{headers:U.headers}).then(P).then((function(e){F(e)})).catch((function(e){console.log(e)}))})();