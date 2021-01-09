import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { encodeValues, useDecodedLocation } from './EncodeDecode';
import { objectToQueryParams } from './helpersURL';

export const useQueryAsState = (allowedElements) => {
  const { pathname, searchResultObj } = useDecodedLocation(allowedElements);
  const history = useHistory();

  const updateQuery = useCallback(
    (updatedParams) => {
      history.push(
        pathname +
          objectToQueryParams(encodeValues(searchResultObj, updatedParams))
      );
    },
    [searchResultObj, pathname, history]
  );

  const queryWithDefault = useMemo(() => Object.assign({}, searchResultObj), [
    searchResultObj,
  ]);

  return [queryWithDefault, updateQuery];
};
