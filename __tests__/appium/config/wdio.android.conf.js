const { config } = require('./wdio.shared.conf');

const ANDROID_APP_PATH =
  '/Users/jmarkstevens/Kykas/Active/rn/jms2/android/app/build/outputs/apk/debug/app-debug.apk';
const deviceName = 'Android Emulator';
const platformName = 'Android';
// const platformVersion = '7.1.1';

// ============
// Capabilities
// ============
config.capabilities = [
  {
    app: ANDROID_APP_PATH,
    deviceName,
    maxInstances: 1,
    noReset: true,
    orientation: 'PORTRAIT',
    platformName,

    // Custom
    customCapabilities: {
      pixelRatio: 3,
    },
  },
];

// ====================
// Appium configuration
// ====================
config.appium = {
  args: {
    address: '127.0.0.1',
    commandTimeout: '11000',
    deviceName,
    platformName,
  },
};

config.cucumberOpts.tagExpression = `${
  config.cucumberOpts.tagExpression
} and (not @ios)`;

config.port = 4723;

exports.config = config;
