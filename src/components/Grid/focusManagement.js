export function moveFocus(grid, direction) {
  const hasFocusableElement = ensureFocusableElementInGrid(grid);
  if (!hasFocusableElement) return;
  if (direction === 'up') focusUp(grid);
  if (direction === 'down') focusDown(grid);
  if (direction === 'left') focusLeft(grid);
  if (direction === 'right') focusRight(grid);
}

function ensureFocusableElementInGrid(grid) {
  const firstElem = grid.querySelectorAll('a, button, input')[0];
  const currentFocusable = grid.querySelector('[tabindex="0"]') || firstElem;

  // Happens if the grid does not contain any a or button elements.
  if (!currentFocusable) {
    return false;
  }
  currentFocusable.setAttribute('tabindex', '0');
  return true;
}

function focusDown(grid) {
  const currentFocus = grid.querySelector('[tabindex="0"]');
  const nextCell = findNextCell(grid, currentFocus, (p) => ({
    row: p.row + 1,
    col: p.col,
  }));
  if (!nextCell) return;

  // Target the first interactive element in the cell below
  const firstElem = nextCell.querySelectorAll('a, button, input')[0];
  transferFocus(currentFocus, firstElem);
}

function focusUp(grid) {
  const currentFocus = grid.querySelector('[tabindex="0"]');
  const nextCell = findNextCell(grid, currentFocus, (p) => ({
    row: p.row - 1,
    col: p.col,
  }));
  if (!nextCell) return;

  // Target the first interactive element in the cell above
  const firstElem = nextCell.querySelectorAll('a, button, input')[0];
  transferFocus(currentFocus, firstElem);
}

function focusLeft(grid) {
  const currentFocus = grid.querySelector('[tabindex="0"]');
  const nextEl = findNextElementInCell(currentFocus, -1);

  if (nextEl) {
    transferFocus(currentFocus, nextEl);
    return;
  }

  const nextCell = findNextCell(grid, currentFocus, (p) => ({
    row: p.row,
    col: p.col - 1,
  }));
  if (!nextCell) return;

  // Target the last interactive element in the cell to the left
  const prevCellElems = nextCell.querySelectorAll('a, button, input');
  const lastLink = prevCellElems[prevCellElems.length - 1];
  transferFocus(currentFocus, lastLink);
}

function focusRight(grid) {
  const currentFocus = grid.querySelector('[tabindex="0"]');

  // Exit early if next focusable element is found in the cell
  const nextEl = findNextElementInCell(currentFocus, 1);
  if (nextEl) {
    transferFocus(currentFocus, nextEl);
    return;
  }

  const nextCell = findNextCell(grid, currentFocus, (p) => ({
    row: p.row,
    col: p.col + 1,
  }));
  if (!nextCell) return;

  // Target the first interactive element in the cell to the right
  const nextCellEl = nextCell.querySelectorAll('a, button, input');
  const firstEl = nextCellEl[0];
  transferFocus(currentFocus, firstEl);
}

/**
 * Given an interactive element (button or a) this functions figures out it's
 * position in the grid based on aria attributes on it's parent elements.
 * @param interactiveElement element to find position of
 */
function getGridPosition(interactiveElement) {
  const row = parseInt(
    interactiveElement.closest('[aria-rowindex]').getAttribute('aria-rowindex'),
    10
  );
  const col = parseInt(
    interactiveElement.closest('[aria-colindex]').getAttribute('aria-colindex'),
    10
  );
  return { row, col };
}

/**
 * Move focus from oldEl -> newEl
 * @param oldEl element loosing focus
 * @param newEl element gaining focus
 */
function transferFocus(oldEl, newEl) {
  if (!oldEl || !newEl) return;
  oldEl.tabIndex = -1;
  newEl.tabIndex = 0;
  newEl.focus();
}

/**
 * Find the next/previous interactive element in the cell of provded element
 * @param element element to start search from
 * @param dir direction to search in, 1 : next, -1 : previous
 */
function findNextElementInCell(element, dir) {
  const cellElements = Array.from(
    element.closest('[aria-colindex]').querySelectorAll('a, button, input')
  );
  const prevIndex = cellElements.findIndex((l) => l === element) + dir;
  return cellElements[prevIndex];
}

/**
 * Traverse the grid in a direction until a cell with interactive elements is found
 * @param grid the grid element
 * @param element element to start search from.
 *                           It's position is calculated and used as a starting point
 * @param updatePos A function to update the position in a certain direction
 */
function findNextCell(grid, element, updatePos) {
  // recursively visit cells at given position and checks if it has any interactive elements
  const rec = (currPos) => {
    const nextPos = updatePos(currPos);
    const nextCell = grid.querySelector(
      `[aria-rowindex="${nextPos.row}"] [aria-colindex="${nextPos.col}"]`
    );
    // No next cell found. Hitting edge of grid
    if (nextCell === null) return null;
    // Found next cell containing a or button tags, return it
    if (nextCell.querySelectorAll('a, button, input').length) {
      return nextCell;
    }
    // Continue searching. Visit next cell
    return rec(nextPos);
  };
  const position = getGridPosition(element);
  return rec(position);
}
