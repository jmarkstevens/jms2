import * as labels from '../../../src/config/labels';
import { TEST_PREFIX, WAIT_FOR_STATE } from '../support/constants';
import { waitFor } from '../support/utils';

const SCREEN_SELECTORS = {
  native: `${TEST_PREFIX}${labels.tabNavigator.native}`,
  graphql: `${TEST_PREFIX}${labels.tabNavigator.graphql}`,
  maps: `${TEST_PREFIX}${labels.tabNavigator.maps}`,
  all: `${TEST_PREFIX}${labels.tabNavigator.maps}`,
};

/**
 * Wait for a specific screen to be visible
 * @param {string} screen see the 'SCREEN_SELECTORS' const in './constants.js' for all the
 * possible values
 */
// eslint-disable-next-line
export function waitForScreenToBeVisible(screen) {
  waitFor({
    selector: SCREEN_SELECTORS[screen.toLowerCase()],
    state: WAIT_FOR_STATE.VISIBLE,
    milliseconds: 25000,
  });
}
