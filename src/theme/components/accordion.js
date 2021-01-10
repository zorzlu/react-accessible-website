const Accordion = {
  // The parts of the component
  parts: ['container', 'button', 'panel'],
  // The base styles for each part
  baseStyle: {},
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {
    menuFilter: {
      container: {
        borderTopWidth: 'false',
        _last: {
          borderBottomWidth: 'false',
        },
        panel: {
          pt: '100em',
          pb: '100em',
        },
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default Accordion;
