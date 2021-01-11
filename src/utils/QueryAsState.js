import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { encodeValues, useDecodedLocation } from './EncodeDecode';
import { objectToQueryParams } from './helpersURL';

export const useQueryAsState = (allowedElements, defaultValue) => {
  const { pathname, path, searchResultObj } = useDecodedLocation(
    allowedElements
  );
  const history = useHistory();

  const updateQuery = useCallback(
    (updatedParams) => {
      let newUrl =
        pathname +
        objectToQueryParams(encodeValues(searchResultObj, updatedParams));
      if (path !== newUrl) history.push(newUrl);
    },
    [searchResultObj, pathname, history]
  );

  const queryWithDefault = useMemo(
    () => Object.assign({}, searchResultObj, defaultValue),
    [searchResultObj]
  );

  return [queryWithDefault, updateQuery];
};
