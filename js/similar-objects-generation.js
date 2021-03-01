import {bookingObjects} from './data.js';

let cardTemplate = document.querySelector('#card').content;
let card = cardTemplate.querySelector('.popup');
let popups = [];
let mapCanvas = document.querySelector('#map-canvas');


const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

for (let i = 0; i < bookingObjects.length; i++) {
  let popup = card.cloneNode(true);
  let popupAvatar = popup.querySelector('.popup__avatar');
  let popupTitle = popup.querySelector('.popup__title');
  let popupAddress = popup.querySelector('.popup__text--address');
  let popupPrice = popup.querySelector('.popup__text--price');
  let popupType = popup.querySelector('.popup__type');
  let popupCapacity = popup.querySelector('.popup__text--capacity');
  let popupTime = popup.querySelector('.popup__text--time');
  let popupDescription = popup.querySelector('.popup__description');


  popupAvatar.src = bookingObjects[i].author.avatar;
  popupTitle.textContent = bookingObjects[i].offer.title;
  popupAddress.textContent = bookingObjects[i].offer.address;
  popupPrice.textContent = `${bookingObjects[i].offer.price} `;
  popupType.textContent =  TYPES[bookingObjects[i].offer.type];
  popupCapacity.textContent = createCapacity(bookingObjects[i].offer.rooms, bookingObjects[i].offer.guests);
  popupTime.textContent = `Заезд после  ${bookingObjects[i].offer.checkin}, выезд до ${bookingObjects[i].offer.checkout}`;
  addFeatures(bookingObjects[i].offer.features, popup);
  popupDescription.textContent = bookingObjects[i].offer.description;
  addPhoto(bookingObjects[i].offer.photos, popup);
  popups.push(popup);
}

function showPopup(index) {
  mapCanvas.appendChild(popups[index]);
}

function createCapacity(rooms, guests) {
  let capacity = '';
  if(rooms % 10 === 1 && rooms % 100 !== 11){
    capacity = `${rooms} комната для `;
  } else if ((rooms % 10 === 2 && rooms % 100 !== 12) || (rooms % 10 === 3 && rooms % 100 !== 13)) {
    capacity = `${rooms} комнаты для `;
  } else {
    capacity = `${rooms} комнат для `;
  }
  if (guests % 10 === 1 && guests !== 11){
    capacity = `${guests} гостя`;
  } else {
    capacity = `${guests} гостей`;
  }
  return capacity;
}

function addFeatures(arr, element){
  let popupFeatures = element.querySelector('.popup__features');
  arr.forEach(function (item) {
    popupFeatures.querySelector(`.popup__feature--${item}`).classList.remove('hidden');
  });
}

function addPhoto(arr, element) {
  let popupPhotos = element.querySelector('.popup__photos');
  let popupPhoto = element.querySelector('.popup__photo');
  popupPhoto.src = arr[0];
  if(arr.length > 1){
    for(let i = 1; i < arr.length; i++){
      let photo = popupPhoto.cloneNode();
      photo.src = arr[i];
      popupPhotos.appendChild(photo);
    }
  }
}

export {showPopup};
