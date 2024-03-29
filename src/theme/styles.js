import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.700', 'whiteAlpha.900')(props),
      '.deleted': {
        color: '#ff8383 !important',
        fontStyle: 'normal !important',
      },
      '.inserted': {
        color: '#b5f4a5 !important',
        fontStyle: 'normal !important',
      },
    },
  }),
};

export default styles;
