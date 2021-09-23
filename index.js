/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/pages/Main';
import Report from './src/pages/Report';
import NewEntry from './src/pages/NewEntry';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);