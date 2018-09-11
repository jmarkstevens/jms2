/* eslint-disable */
const { tabNavigator } = require('../../../src/config/labels');
const { TEST_PREFIX, WAIT_FOR_STATE } = require('../support/constants');
const { waitFor } = require('../support/utils');

const SCREEN_SELECTORS = {
  native: `${TEST_PREFIX}${tabNavigator.native}`,
  graphql: `${TEST_PREFIX}${tabNavigator.graphql}`,
  maps: `~test-SomeMaps`,
  all: `~test-AllMaps`,
  mapstab: `~Maps`,
  alltab: `~All`,
};

/**
 * Wait for a specific screen to be visible
 * @param {string} screen see the 'SCREEN_SELECTORS' const in './constants.js' for all the
 * possible values
 */
// eslint-disable-next-line
module.exports.waitForScreenToBeVisible = function (screen) {
  waitFor({
    selector: SCREEN_SELECTORS[screen.toLowerCase()],
    state: WAIT_FOR_STATE.EXIST,
    milliseconds: 25000,
  });
}
