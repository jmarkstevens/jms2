/* eslint-disable */
const { Given, And, Then } = require('cucumber');
const { waitForScreenToBeVisible } = require('../screen-objects/base');
const { launchApp, restartApp, tapOnScreen } = require('../support/utils');

Given(/I open the app/, function () {
  launchApp();
});

Then(/the (Maps) screen is visible/, function (screen) {
  waitForScreenToBeVisible(screen);
});

Then(/the (AllTab) tab is visible/, function (screen) {
  waitForScreenToBeVisible(screen);
});
