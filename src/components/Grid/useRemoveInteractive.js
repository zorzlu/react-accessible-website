import { useEffect } from 'react';

// On rerenders, remove any potential incoming
// interactive elements from the natural tab order

function ensureFocusableElementInGrid(grid) {
  const firstElem = grid.querySelectorAll('a, button, input')[0];
  const currentFocusable = grid.querySelector('[tabindex="0"]') || firstElem;

  // Happens if the grid does not contain any a or button elements.
  if (!currentFocusable) {
    return false;
  }
  currentFocusable.setAttribute('tabindex', '0');
}

export const useRemoveInteractiveElementsFromTabOrder = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const interactiveElements = Array.from(
      ref.current.querySelectorAll(
        'a:not([tabindex="0"]), button:not([tabindex="0"]), input:not([tabindex="0"])'
      )
    );

    interactiveElements.forEach((el) => el.setAttribute('tabindex', '-1'));
    ensureFocusableElementInGrid(ref.current);
  });
};
