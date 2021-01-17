import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
import textStyles from './textstyles';

// Foundational style overrides
import shadows from './foundations/shadows';
import colors from './foundations/colors';

// Component style overrides
import Container from './components/container';
import Accordion from './components/accordion';
import FormError from './components/formError';

const overrides = {
  styles,
  colors,
  shadows,
  textStyles,
  // Other foundational style overrides go here
  components: {
    Container,
    Accordion,
    FormError,
    // Other components go here
  },
};
export default extendTheme(overrides);
