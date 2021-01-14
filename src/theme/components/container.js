const Container = {
  // The parts of the component
  parts: [],
  // The base styles for each part
  baseStyle: {},
  // The size styles for each part
  sizes: {
    pageContainer: {
      w: 'full',
      pb: '1em',
      pt: '1em',
      minH: 'calc(100vh - 12em)',
      maxW: '70em',
      px: { base: '1em', sm: '2em' },
    },
    footer: {
      w: 'full',
      pb: '2em',
      pt: '2em',
      mx: 'auto',
      maxW: '70em',
      px: { base: '1em', sm: '2em' },
    },
  },
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
};

export default Container;
