const path = require('path');

exports.config = {
  specs: [path.resolve(__dirname, 'mocha', '*.js')],
  exclude: [],
  maxInstances: 10,
  port: 4723,
  capabilities: [
    {
      platformName: 'iOS',
      automationName: 'XCUITest',
      deviceName: 'iPhone X',
      platformVersion: '11.4',
      app:
        '/Users/jmarkstevens/Kykas/Active/rn/jms2/ios/build/Build/Products/Release-iphonesimulator/jms2.app',
    },
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: false,
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
