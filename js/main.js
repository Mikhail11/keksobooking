//let firstNumber = prompt('Введите минимальное неотрицательное значение диапазона:', '');
//let secondNumber = prompt('Введите максимальное неотрицательное значение диапазона: ', '');
//let decimalPlacesCount = prompt('Введите количество знакоов после запятой: ', '');

//alert(getRandomInteger(firstNumber, secondNumber));
//alert(getRandomFloat(firstNumber, secondNumber, decimalPlacesCount));

function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательные значения диапазона';
  }
  else if (min >= max) {
    return 'Минимальное значение диапазона не может быть больше или равно максимальному';
  }
  else {
    return Math.ceil(Math.random() * (max - min));
  }
}

function getRandomFloat(min, max, decimalPlaces) {
  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательные значения диапазона';
  }
  else if (min >= max) {
    return 'Минимальное значение диапазона не может быть больше или равно максимальному';
  }
  else {
    let result = Math.random() * (max - min);
    return result.toFixed(decimalPlaces);
  }
}
