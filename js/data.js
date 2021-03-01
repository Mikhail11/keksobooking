import {getRandomFloat, getRandomArr, getRandomInteger} from './util.js';

const TITLE_WORDS = [
  'Экономичный вариант для большой компании',
  'Чистые и уютные апартаменты',
  'Деревенский стиль для отдыха от городскоой суеты',
  'Загородный клуб для любителей природы',
  'Дизайнерские апартаменты недалеко от центра',
  'Приятное место для отдыха',
];

const OBJECT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const DESCRIPTIONS = [
  'Апартаменты Romance al Colosseo расположены в центре города Рим, в 2 минутах ходьбы от Колизея. Оформление интерьера выполнено в элегантном современном стиле.',
  'Комплекс для отдыха Roma Camping In Town расположен всего в 15 минутах езды от Ватикана. К услугам гостей сезонный открытый бассейн, гидромассажная ванна и бар у бассейна.',
  'Отель типа «постель и завтрак» SuiteSistina for Lovers расположен в центре Рима, всего в 200 метрах от Испанской лестницы.',
  'Апартаменты Restart Accomodations Rome идеально расположены в центре Рима, в нескольких минутах ходьбы от Колизея или Испанских ступеней.',
  'Гостевой дом FOURHEADS Private Suites расположен в Риме, в 700 метрах от фонтана Треви и в 1,1 км от улицы Виа Кондотти. На всей территории гостевого дома можно воспользоваться бесплатным Wi-Fi.',
  'Гостевой дом Vatical Style расположен в Ватикане, район Прати в Риме, всего в 150 метрах от площади Святого Петра.',
];

const OBJECTS_COUNT = 10;

const AUTHORS = new Array(OBJECTS_COUNT).fill(null).map(()=>createAuthor());
const LOCATIONS = new Array(OBJECTS_COUNT).fill(null).map(() => createLocation());
const OFFERS = new Array(OBJECTS_COUNT).fill(null).map(() => createOffer());
let bookingObjects = [];


function createBookingObjects(count) {
  let  Objects = new Array(count).fill(null).map(() => {
    return {
      author: AUTHORS[getRandomInteger(0, AUTHORS.length - 1)],
      offer: OFFERS[getRandomInteger(0, OFFERS.length - 1)],
      location: LOCATIONS[getRandomInteger(0, LOCATIONS.length - 1)],
    }
  });
  return Objects;
}

function createAuthor(){
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(1,8) + '.png',
  }
}

function createOffer() {
  return {
    title: TITLE_WORDS[getRandomInteger(0, TITLE_WORDS.length-1)],
    address: LOCATIONS[getRandomInteger(0,LOCATIONS.length-1)].x + ', ' + LOCATIONS[getRandomInteger(0,LOCATIONS.length-1)].y,
    price: getRandomInteger(10, 1000000),
    type: OBJECT_TYPES[getRandomInteger(0, OBJECT_TYPES.length-1)],
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1,6),
    checkin: CHECKIN_CHECKOUT_TIMES[getRandomInteger(0, CHECKIN_CHECKOUT_TIMES.length-1)],
    checkout: CHECKIN_CHECKOUT_TIMES[getRandomInteger(0, CHECKIN_CHECKOUT_TIMES.length-1)],
    features: getRandomArr(FEATURES),
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length-1)],
    photos: getRandomArr(PHOTOS),
  }
}

function createLocation() {
  return {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
}

bookingObjects = createBookingObjects(OBJECTS_COUNT);

export {bookingObjects};
