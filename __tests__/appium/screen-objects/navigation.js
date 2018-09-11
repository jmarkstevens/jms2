/* eslint-disable */
const { stackNavigatorTitle, tabNavigator } = require('../../../src/config/labels');
const { TEST_PREFIX } = require('../support/constants');
const { tapOnButton } = require('../support/utils');

const TABBAR_SELECTORS = {
  native: `${TEST_PREFIX}${tabNavigator.native}`,
  graphql: `${TEST_PREFIX}${tabNavigator.graphql}`,
  maps: `~Maps`,
  all: `~All`,
};
const HEADER_BACK_BUTTON = `${TEST_PREFIX}${
  stackNavigatorTitle.goBackAccessibilityLabel
}`;

/**
 * Select screen from the tabbar
 * @param {string} screen see the 'SCREEN_SELECTORS' const in './constants.js' for all the
 * possible values
 */
module.exports.selectScreenFromTabBar = function (screen) {
  tapOnButton(TABBAR_SELECTORS[screen.toLowerCase()]);
}

/**
 * Click on the back button in the header
 */
module.exports.goBackFromHeader = function () {
  tapOnButton(HEADER_BACK_BUTTON);
}
