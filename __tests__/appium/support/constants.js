module.exports.SCREENSHOTS_FOLDERS = {
  TMP: '.tmp/screenshots/',
  DIST: '.dist/screenshots/',
};
module.exports.SWIPE_DIRECTION = {
  down: {
    start: { x: 50, y: 15 },
    end: { x: 50, y: 85 },
  },
  left: {
    start: { x: 85, y: 30 },
    end: { x: 25, y: 30 },
  },
  right: {
    start: { x: 25, y: 30 },
    end: { x: 85, y: 30 },
  },
  up: {
    start: { x: 50, y: 85 },
    end: { x: 50, y: 15 },
  },
};
module.exports.CONTEXT_REF = {
  NATIVE: 'native',
  WEBVIEW: 'webview',
};
module.exports.DOCUMENT_READY_STATE = {
  COMPLETE: 'complete',
  INTERACTIVE: 'interactive',
  LOADING: 'loading',
};
module.exports.TEST_PREFIX = '~test-';
module.exports.NATIVE_APP = 'NATIVE_APP';
module.exports.WAIT_FOR_STATE = {
  EXIST: 'exist',
  VISIBLE: 'visible',
};
module.exports.INCORRECT_URL = 'in.correct.url';

/**
 * Cross-platform Text selectors
 */
module.exports.ANDROID_TEXT_SELECTOR = '*//android.widget.TextView';
module.exports.ANDROID_ALERT_TITLE_SELECTOR =
  '*//android.widget.TextView[@resource-id="android:id/alertTitle"]';
module.exports.ANDROID_ALERT_MESSAGE_SELECTOR =
  '*//android.widget.TextView[@resource-id="android:id/message"]';
module.exports.ANDROID_ACCEPT_ALERT_SELECTOR =
  '*//android.widget.Button[@text="OK"]';
module.exports.IOS_ALERT_SELECTOR = '*//XCUIElementTypeAlert';
module.exports.IOS_TEXT_SELECTOR = null;
