/* eslint-disable */
const { Then, When } = require('cucumber');
const { selectScreenFromTabBar } = require('../screen-objects/navigation');
const { waitForScreenToBeVisible } = require('../screen-objects/base');

When(/I select (All) from the tabbar/, function (screen) {
  selectScreenFromTabBar(screen);
});

Then(/the (Graphql) screen is visible/, function (screen) {
  waitForScreenToBeVisible(screen);
});

// When(/I click on the go back arrow in the header/, () => {
//   goBackFromHeader();
// });
