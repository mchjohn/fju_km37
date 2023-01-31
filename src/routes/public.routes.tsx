import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home/index';
import { Games } from '@screens/Games';

import { PropsNavigationBottom } from './Models';
import { options, screenIcon } from './config/options';

const { Navigator, Screen } = createBottomTabNavigator<PropsNavigationBottom>();

export function PublicNavigation() {
  return (
    <Navigator screenOptions={options} initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => screenIcon('home', color, size),
        }}
      />
      <Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ color, size }) =>
            screenIcon('game-controller', color, size),
        }}
      />
    </Navigator>
  );
}
