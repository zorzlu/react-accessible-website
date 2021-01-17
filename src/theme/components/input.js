const Input = {
  // The parts of the component
  parts: ['field', 'addon'],
  // The base styles for each part
  baseStyle: {},
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {
    outline: {
      field: {
        border: '2px solid',
        borderColor: 'brand.500',
        _hover: {
          borderColor: 'brand.900',
        },
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export default Input;
