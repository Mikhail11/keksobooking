function getRandomArr(arr) {
  let map = arr;
  for(let i = 0; i < map.length-1; i++){
    let j = getRandomInteger(0, map.length-1);
    let swap = map[i];
    map[i] = map[j];
    map[j] = swap;
  }
  return map.slice(getRandomInteger(0, arr.length-1));
}

function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return 0;
  }
  else if (min >= max) {
    let swap = min;
    min = max;
    max = swap;
  }
  return Math.ceil(Math.random() * (max - min));
}

function getRandomFloat(min, max, decimalPlaces) {
  if (min < 0 || max < 0) {
    return 0;
  }
  else if (min >= max)  {
    let swap = min;
    min = max;
    max = swap;
  }
  let result = max - Math.random() * (max - min);
  return result.toFixed(decimalPlaces);
}

export {getRandomInteger, getRandomArr, getRandomFloat};
