import { Platform } from 'react-native';

import { ENVIRONMENT, TESTING_ENVIRONMENTS } from './Constants';

const IS_IOS = Platform.OS === 'ios';
// eslint-disable-next-line
export function testProperties(id) {
  if (TESTING_ENVIRONMENTS.includes(ENVIRONMENT)) {
    if (IS_IOS) {
      console.info('testProperties returning testID for:', id);
      return { testID: `test-${id}` };
    }

    console.info('testProperties returning accessibilityLabel for:', id);
    return { accessibilityLabel: `test-${id}` };
  }
  return null;
}
