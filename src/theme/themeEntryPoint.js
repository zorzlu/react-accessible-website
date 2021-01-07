import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
import textStyles from './textstyles';

// Foundational style overrides
import shadows from './foundations/shadows';

// Component style overrides
//import Button from './components/button';

const overrides = {
  styles,
  shadows,
  textStyles,
  // Other foundational style overrides go here
  components: {
    //Button,
    // Other components go here
  },
};
export default extendTheme(overrides);
