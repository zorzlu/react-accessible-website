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
      mx: 'auto',
      minH: 'calc(100vh - 12em)',
      maxW: '75em',
      px: { base: '2', md: '6' },
    },
    footer: {
      w: 'full',
      pb: '2em',
      pt: '2em',
      mx: 'auto',
      maxW: '75em',
      px: { base: '2', md: '6' },
    },
  },
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
};

export default Container;
