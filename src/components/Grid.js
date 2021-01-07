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
    <Table variant="simple" role="table" aria-label="Replace">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead role="rowgroup">
        <Tr role="row">
          <Th role="columnheader">Columnheader1</Th>
          <Th role="columnheader">Columnheader2</Th>
          <Th role="columnheader">Columnheader3</Th>
        </Tr>
      </Thead>
      <Tbody role="rowgroup">
        <Tr role="row">
          <Td role="cell">Data1</Td>
          <Td role="cell">Data2</Td>
          <Td role="cell">Data3</Td>
        </Tr>
        <Tr role="row">
          <Td role="cell">Data4</Td>
          <Td role="cell">Data5</Td>
          <Td role="cell">Data6</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Grid;
