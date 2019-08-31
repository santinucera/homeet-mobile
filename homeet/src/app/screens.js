// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Routes from '@constants/routes';
import { stackNavConfig, screensNavOptions, tabNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import InitialLoading from '@screens/InitialLoading';
import Login from '@screens/Login';
import Home from '@screens/Home';
import Camera from '@screens/Camera';

export default createStackNavigator(
  {
    ...inferRoute({ InitialLoading }),
    ...inferRoute({ Login }),
    [Routes.Home]: {
      screen: createBottomTabNavigator(
        {
          ...inferRoute({ Tab1: Camera }),
          ...inferRoute({ Tab2: Home })
        },
        tabNavConfig
      ),
      navigationOptions: screensNavOptions[Routes.Home]
    }
  },
  stackNavConfig
);
