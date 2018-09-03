import { Given, When, Then } from 'cucumber';
import { waitForScreenToBeVisible } from '../screen-objects/base';
import { launchApp, restartApp, tapOnScreen } from '../support/utils';

Given(/I open the app/, () => {
  launchApp();
});

Then(/the (Maps) screen is visible/, screen => {
  waitForScreenToBeVisible(screen);
});

When(/I restart the App/, () => {
  restartApp();
});
When(/I hide the software keyboard/, () => {
  tapOnScreen();
});
