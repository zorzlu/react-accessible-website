import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const Grid = () => {
  return (
    <Table
      variant="simple"
      role="table"
      aria-label="CommunityMate figures"
      allign="center"
    >
      <TableCaption>CommunityMate numbers</TableCaption>
      <Thead role="rowgroup">
        <Tr role="row">
          <Th role="columnheader">Partners</Th>
          <Th role="columnheader">Events</Th>
        </Tr>
      </Thead>
      <Tbody role="rowgroup">
        <Tr role="row">
          <Td role="cell">15+ Associations</Td>
          <Td role="cell">30+ Past events</Td>
        </Tr>
        <Tr role="row">
          <Td role="cell">50+ Volunteers</Td>
          <Td role="cell">45+ Upcoming events</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
