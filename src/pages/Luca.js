import React from 'react';
//import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQueryAsState } from '../utils/QueryAsState';
import { Checkbox } from '@chakra-ui/react';

/* function getParameters() {
  let parameters = window.location.search.replace('?', '');

  let currentParameters = {};

  if (Object.keys(parameters).length) {
    parameters = parameters.split('&');

    for (let i = 0; i < parameters.length; i++) {
      let parameter = parameters[i].split('=');
      currentParameters[parameter[0]] = parameter[1];
    }
  }

  return currentParameters;
}
 */

function Luca({ db }) {
  const [{ query }] = useQueryAsState();
  //const { search } = useLocation();
  //const searchParams = new URLSearchParams(search);
  //let locations = searchParams.getAll('location');
  //let tags = searchParams.getAll('tag');
  //const currentFilters = checkFilters(db, { locations, tags });

  return (
    <div>
      <p>Locations: </p>
      <p>{query}</p>

      <Checkbox
        onChange={({ target }) => useQueryAsState({ query: target.value })}
      >
        old
      </Checkbox>

      <p>{db.tags}</p>
    </div>
  );
}

export default Luca;
Luca.propTypes = {
  db: PropTypes.object.isRequired,
};
