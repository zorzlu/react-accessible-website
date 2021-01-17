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

const TableAbout = () => {
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
          <Td></Td>
          <Th scope="col" role="columnheader">
            Year 2019
          </Th>
          <Th scope="col" role="columnheader">
            Year 2020
          </Th>
        </Tr>
      </Thead>
      <Tbody role="rowgroup">
        <Tr role="row">
          <Th scope="row" role="rowheader">
            Associations
          </Th>
          <Td role="cell">15</Td>
          <Td role="cell">32</Td>
        </Tr>
        <Tr role="row">
          <Th scope="row" role="rowheader">
            Events
          </Th>
          <Td role="cell">44</Td>
          <Td role="cell">85</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default TableAbout;
