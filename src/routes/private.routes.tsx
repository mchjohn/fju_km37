import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { DuelOfTribes } from '@screens/DuelOfTribes';

import { PropsNavigationBottom } from './Models';
import { options, screenIcon } from './config/options';

const { Navigator, Screen } = createBottomTabNavigator<PropsNavigationBottom>();

export function PrivateNavigation() {
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
        name="DuelOfTribes"
        component={DuelOfTribes}
        options={{
          tabBarIcon: ({ color, size }) =>
            screenIcon('game-controller', color, size),
        }}
      />
    </Navigator>
  );
}
