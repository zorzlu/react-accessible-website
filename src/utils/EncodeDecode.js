import { useMemo } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { getQueryParamsAsObject } from './helpersURL';

export const useDecodedLocation = (accepted) => {
  const { search, ...rest } = useLocation();

  const decodedSearch = useMemo(
    () => getQueryParamsAsObject(search, accepted),
    [search, accepted]
  );

  return { searchResultObj: decodedSearch, ...rest };
};

export const useDecodedRouteMatch = () => {
  const { params, ...rest } = useRouteMatch();

  const decodedParams = useMemo(() => decodeValues(params), [params]);

  return { params: decodedParams, ...rest };
};

export const decodeValues = (obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: obj[key] && decodeURIComponent(obj[key]),
    }),
    {}
  );

export const encodeValues = (fromSearch, newValue) => {
  let temp = fromSearch;
  Object.keys(newValue).forEach((key) => {
    temp[key] = newValue[key];
  });
  console.log('valore encodevalues');
  console.log(temp);

  return temp;
};
