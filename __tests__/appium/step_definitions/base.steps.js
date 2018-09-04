/* eslint-disable */
const { Given, When, Then } = require('cucumber');
const { waitForScreenToBeVisible } = require('../screen-objects/base');
const { launchApp, restartApp, tapOnScreen } = require('../support/utils');

Given(/I open the app/, function () {
  launchApp();
});

Then(/the (Maps) screen is visible/, function (screen) {
  waitForScreenToBeVisible(screen);
});

When(/I restart the App/, function () {
  restartApp();
});
When(/I hide the software keyboard/, function () {
  tapOnScreen();
});
