import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbItem, BreadcrumbLink, Breadcrumb } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function BreadCrumbAuto({ id, name, isFormPage }) {
  var filtersApplied = false;
  var appendToEvent = '';
  /* 
    const query = new URLSearchParams(useLocation().search);
    const from = query.get('from');
    if (from !== undefined) {
    appendToEvent = appendToEvent.length != 0 ? decodeURIComponent(from) : '';
    filtersApplied = true;
  } */

  if (isFormPage) {
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to={'/events' + appendToEvent}>
            {filtersApplied ? 'Events filtered List' : 'Events'}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to={'/event/' + id + appendToEvent}>
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
      <Breadcrumb>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isFormPage: PropTypes.bool.isRequired,
};

export default BreadCrumbAuto;
