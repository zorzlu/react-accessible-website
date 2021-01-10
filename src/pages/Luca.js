import React from 'react';
import { useQueryAsState } from '../utils/QueryAsState';
import PropTypes from 'prop-types';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  GridItem,
  Grid,
  Wrap,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuItem,
} from '@chakra-ui/react';
import { CardsSection } from '../components';

function Luca({ db }) {
  const [query, updateQueryParams] = useQueryAsState(
    {
      tag: db.tag,
      location: db.location,
    },
    {}
  );

  return (
    <div>
      <CheckboxGroup
        colorScheme="teal"
        value={query.tag}
        onChange={(values) => {
          console.log('sto chiamando');
          updateQueryParams({ tag: values });
        }}
      >
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="checkbox">
              <MenuItemOption as={Checkbox} value="dogs">
                dogs
              </MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </CheckboxGroup>

      <CheckboxGroup
        colorScheme="teal"
        value={query.tag}
        onChange={(values) => {
          console.log('sto chiamando');
          updateQueryParams({ tag: values });
        }}
      >
        <Menu>
          <MenuButton as={Button}>Actions</MenuButton>
          <MenuList>
            <MenuItem>
              <Checkbox value="dogs" onChange={() => true}>
                dogs
              </Checkbox>
            </MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </CheckboxGroup>
      <Accordion allowToggle variant="menuFilter">
        <AccordionItem>
          <Wrap>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <Button as={AccordionButton} colorScheme="teal">
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </Button>
          </Wrap>

          <AccordionPanel>
            <CheckboxGroup
              colorScheme="teal"
              value={query.tag}
              onChange={(values) => {
                console.log('sto chiamando');
                updateQueryParams({ tag: values });
              }}
            >
              <Grid column="1">
                <GridItem>
                  <Checkbox value="dogs" onChange={() => false}>
                    dogs
                  </Checkbox>
                </GridItem>
                <GridItem>
                  <Checkbox value="cats" onChange={() => false}>
                    cats
                  </Checkbox>
                </GridItem>
                <GridItem>
                  <Checkbox value="owls" onChange={() => false}>
                    Owls
                  </Checkbox>
                </GridItem>
                <GridItem>
                  <Checkbox value="pigs" onChange={() => false}>
                    Pigs
                  </Checkbox>
                </GridItem>
                <GridItem>
                  <Checkbox value="a11y" onChange={() => false}>
                    A11Y
                  </Checkbox>
                </GridItem>
              </Grid>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Checkbox
        value="cats"
        onChange={(values) => {
          console.log('sto chiamando');
          updateQueryParams({ tag: values });
        }}
      >
        cats
      </Checkbox>

      <p>{db.tags}</p>
      <Box pt="3rem">
        {console.log('SONO LUCA E STO MONTANDO')}
        <CardsSection events={db.events} queryParams={query} startHeading="3" />
      </Box>
    </div>
  );
}

export default Luca;
Luca.propTypes = {
  db: PropTypes.object.isRequired,
};
