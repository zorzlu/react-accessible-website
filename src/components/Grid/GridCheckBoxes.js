import React, { useRef } from 'react';
import { useRemoveInteractiveElementsFromTabOrder } from './useRemoveInteractive';
import { moveFocus } from './focusManagement';
import { Box, Checkbox, CheckboxGroup, Flex, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function strConv(textConvertToString) {
  return textConvertToString.toString().toLowerCase().replace(' ', '-');
}

function GridCheckBoxes({
  nameFilter,
  keyFilter,
  FilterValuesArray,
  currentValues,
  callbackOnChange,
}) {
  let tempIndex = 0;
  // eslint-disable-next-line react/jsx-key
  let checkboxes = [];

  FilterValuesArray.forEach((name) => {
    tempIndex += 1;
    checkboxes.push(
      <div role="gridcell" key={strConv(name) + 'checkbox'}>
        <Checkbox
          aria-rowindex={1}
          aria-colindex={tempIndex}
          value={name}
          onChange={() => false}
        >
          {name.toUpperCase()}
        </Checkbox>
      </div>
    );
  });

  const grid = useRef(null);

  useRemoveInteractiveElementsFromTabOrder(grid);

  const handleKeyDown = (e) => {
    // Prevent scrolling
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
    if (e.key === 'ArrowUp') moveFocus(grid.current, 'left');
    if (e.key === 'ArrowDown') moveFocus(grid.current, 'right');
    if (e.key === 'ArrowLeft') moveFocus(grid.current, 'left');
    if (e.key === 'ArrowRight') moveFocus(grid.current, 'right');
  };

  return (
    <Flex direction="column">
      <CheckboxGroup
        colorScheme="brand"
        value={currentValues}
        onChange={(values) => {
          const res = {};
          res[keyFilter] = values;
          callbackOnChange(res);
        }}
      >
        <Heading
          as="h3"
          fontSize="lg"
          pb="2"
          id={strConv(keyFilter) + 'FilterGrid'}
        >
          {nameFilter}
        </Heading>
        <Box
          ref={grid}
          className="grid"
          role="grid"
          aria-labelledby={strConv(keyFilter) + 'FilterGrid'}
          onKeyDown={handleKeyDown}
        >
          <div className="grid__row" role="row" aria-rowindex="1">
            {checkboxes}
          </div>
        </Box>
      </CheckboxGroup>
    </Flex>
  );
}

export default GridCheckBoxes;

GridCheckBoxes.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  keyFilter: PropTypes.string.isRequired,
  FilterValuesArray: PropTypes.array.isRequired,
  currentValues: PropTypes.array.isRequired,
  callbackOnChange: PropTypes.func.isRequired,
};
