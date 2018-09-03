import { ANDROID_TEXT_SELECTOR, IOS_TEXT_SELECTOR } from './constants';

/**
 * Expect that an element contains certain text
 * @param {object} element The element that should contain the text
 * @param {string} text The text
 */
// eslint-disable-next-line
export function expectElementContainsText(element, text) {
  expect(
    element.getText(
      device.isAndroid ? ANDROID_TEXT_SELECTOR : IOS_TEXT_SELECTOR,
    ),
  ).to.have.string(
    text,
    `Element '${element}' doesn't contain the text ${text}`,
  );
}
