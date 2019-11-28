import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
}, 
// {
//   headerMode: 'screen',  // should work here
// }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
