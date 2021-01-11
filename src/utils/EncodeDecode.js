import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getQueryParamsAsObject } from './helpersURL';

export const useDecodedLocation = (accepted) => {
  const { search, ...rest } = useLocation();

  const decodedSearch = useMemo(
    () => getQueryParamsAsObject(search, accepted),
    [search, accepted]
  );

  return { searchResultObj: decodedSearch, ...rest };
};

export const encodeValues = (fromSearch, newValue) => {
  let temp = fromSearch;
  Object.keys(newValue).forEach((key) => {
    temp[key] = newValue[key];
  });

  return temp;
};
