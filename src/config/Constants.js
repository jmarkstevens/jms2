import { Dimensions, Platform } from 'react-native';

const Config = {
  ENVIRONMENT: 'development',
};

export const IS_IOS = Platform.OS === 'ios';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
);
export const ENV_STRINGS = {
  AUTOMATION: 'automation',
  PRODUCTION: 'production',
  DEV: 'development',
};
export const { ENVIRONMENT } = Config;
export const IS_AUTOMATION_BUILD = ENVIRONMENT === ENV_STRINGS.AUTOMATION;
export const TESTING_ENVIRONMENTS = [ENV_STRINGS.DEV, ENV_STRINGS.AUTOMATION];
