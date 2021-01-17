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
          <Th role="columnheader"></Th>
          <Th role="columnheader">2020</Th>
          <Th role="columnheader">2021</Th>
        </Tr>
      </Thead>
      <Tbody role="rowgroup">
        <Tr role="row">
          <Td role="cell">Associations</Td>
          <Td role="cell">15</Td>
          <Td role="cell">32</Td>
        </Tr>
        <Tr role="row">
          <Td role="cell">Events</Td>
          <Td role="cell">44</Td>
          <Td role="cell">85</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
