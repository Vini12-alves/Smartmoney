import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main/index';
import NewEntry from './pages/NewEntry/index';
import Report from './pages/Report/index';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;


