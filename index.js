/** @format */

import { AppRegistry } from 'react-native';

// import App from './App';
// import App from './src/components/app.ctrl';
import App from './src/nav.page';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
