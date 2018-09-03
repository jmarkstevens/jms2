const path = require('path');

exports.config = {
  specs: [path.resolve(__dirname, 'mocha', '*.js')],
  exclude: [],
  maxInstances: 10,
  port: 4723,
  capabilities: [
    {
      browserName: 'chrome',
      maxInstances: 1,
      platformName: 'Android',
      deviceName: 'Android Emulator',
      app:
        '/Users/jmarkstevens/Kykas/Active/rn/jms2/android/app/build/outputs/apk/debug/app-debug.apk',
    },
  ],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    timeout: 10000,
  },
};
