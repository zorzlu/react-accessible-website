function addElementToArray(array, value) {
  if (array === undefined) return [value];
  else if (array.includes(value) === false) {
    let temp = array;
    temp.push(value);
    return temp;
  } else return array;
}
function buildFullEmptyObj(keysToUse) {
  let temp = {};
  keysToUse.forEach((element) => {
    temp[element] = [];
  });
  return temp;
}

export const removeUndefined = (obj) =>
  Object.keys(obj)
    .filter((key) => obj[key].length > 0)
    .reduce((temp, key) => {
      temp[key] = obj[key];
      return temp;
    }, {});

export const getQueryParamsAsObject = (search, acceptedValues) => {
  var paramsFromURL = {};
  var finalParams = buildFullEmptyObj(Object.keys(acceptedValues));

  new URLSearchParams(search).forEach(
    (value, key) =>
      (paramsFromURL[key] = addElementToArray(
        paramsFromURL[key],
        decodeURIComponent(value)
      ))
  );
  Object.keys(acceptedValues).forEach((key) => {
    if (paramsFromURL[key] !== undefined) {
      let temp = acceptedValues[key].filter((x) =>
        paramsFromURL[key].map((y) => y.toLowerCase()).includes(x.toLowerCase())
      );
      finalParams[key] = temp;
    }
  });
  console.log(finalParams);
  return finalParams;
};

export const objectToQueryParams = (obj) => {
  console.log('sono dentro il quertop');
  console.log(obj);
  let temp =
    '?' +
    Object.keys(obj)
      .filter((key) => obj[key].length > 0)
      .map((key) =>
        obj[key].map((value) => `${key}=${encodeURIComponent(value)}`).join('&')
      )
      .join('&');

  console.log('strings');
  console.log(temp);
  return temp;
};
