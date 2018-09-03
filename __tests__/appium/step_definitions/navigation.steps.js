import { Then, When } from 'cucumber';
import { selectScreenFromTabBar } from '../screen-objects/navigation';
import { waitForScreenToBeVisible } from '../screen-objects/base';

When(/I select (All) from the tabbar/, screen => {
  selectScreenFromTabBar(screen);
});

Then(/the (Graphql) screen is visible/, screen => {
  waitForScreenToBeVisible(screen);
});

// When(/I click on the go back arrow in the header/, () => {
//   goBackFromHeader();
// });
