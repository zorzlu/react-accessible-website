import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbItem, BreadcrumbLink, Breadcrumb } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';

function BreadCrumbAuto({ db, isFormPage }) {
  var filtersApplied = false;
  var appendToEvent = '';
  /* 
    const query = new URLSearchParams(useLocation().search);
    const from = query.get('from');
    if (from !== undefined) {
    appendToEvent = appendToEvent.length != 0 ? decodeURIComponent(from) : '';
    filtersApplied = true;
  } */

  let { eventId } = useParams();
  let name;
  var result = db.events.filter((obj) => {
    return obj.id == eventId;
  });
  if (result.length === 0) {
    name = 'Event not found';
  } else {
    name = result[0].name;
  }

  if (isFormPage) {
    return (
      <Breadcrumb mt="2em">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to={'/events' + appendToEvent}>
            {filtersApplied ? 'Events filtered List' : 'Events'}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={RouterLink}
            to={'/event/' + eventId + appendToEvent}
          >
            {name}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Join Event</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb mt="2em">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to={'/events' + appendToEvent}>
            {filtersApplied ? 'Events filtered List' : 'Events'}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}

BreadCrumbAuto.propTypes = {
  db: PropTypes.object.isRequired,
  isFormPage: PropTypes.bool.isRequired,
};

export default BreadCrumbAuto;
