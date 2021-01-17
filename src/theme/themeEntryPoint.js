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
import Checkbox from './components/checkbox';
import Input from './components/input';
import Textarea from './components/textarea';

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
    Checkbox,
    Input,
    Textarea,
    // Other components go here
  },
};
export default extendTheme(overrides);
