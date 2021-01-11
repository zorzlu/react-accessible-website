import { useEffect } from 'react';

// On rerenders, remove any potential incoming
// interactive elements from the natural tab order
export const useRemoveInteractiveElementsFromTabOrder = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const interactiveElements = Array.from(
      ref.current.querySelectorAll(
        'a:not([tabindex="0"]), button:not([tabindex="0"]), input:not([tabindex="0"])'
      )
    );

    interactiveElements.forEach((el) => el.setAttribute('tabindex', '-1'));
  });
};
