import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { encodeValues, useDecodedLocation } from './EncodeDecode';
import { objectToQueryParams, removeUndefined } from './helpersURL';

export const useQueryAsState = (allowedElements) => {
  const { pathname, search } = useDecodedLocation(allowedElements);
  const history = useHistory();
  const defaultValues = {};

  const updateQuery = useCallback(
    (updatedParams) => {
      history.push(
        pathname + objectToQueryParams(encodeValues(search, updatedParams))
      );
    },
    [search, pathname, history]
  );

  const queryWithDefault = useMemo(
    () => Object.assign({}, defaultValues, removeUndefined(search)),
    [search, defaultValues]
  );

  return [queryWithDefault, updateQuery];
};
