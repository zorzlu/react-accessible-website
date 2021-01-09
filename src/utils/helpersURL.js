export const getQueryParamsAsObject = (search, acceptedValues) => {
  var paramsFromURL = {};
  var finalParams = {};

  new URLSearchParams(search).forEach((value, key) => {
    if (paramsFromURL[key].includes(value) === false)
      paramsFromURL[key].push(value);
  });

  Object.keys(acceptedValues).forEach((key) => {
    let temp = acceptedValues[key].filter((x) =>
      paramsFromURL[key].map((y) => y.toLowerCase()).includes(x.toLowerCase())
    );
    finalParams[key] = temp;
  });
  return finalParams;
};

export const removeUndefined = (obj) =>
  Object.keys(obj)
    .filter((key) => obj[key].length > 0)
    .reduce((temp, key) => {
      temp[key] = obj[key];
      return temp;
    }, {});

export const objectToQueryParams = (obj) =>
  '?' +
  Object.keys(obj)
    .filter((key) => obj[key].length > 0)
    .map((key) => obj[key].map((key) => `${key}=${obj[key]}`).join('&'))
    .join('&');
