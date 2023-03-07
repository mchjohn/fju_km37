import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home/index';
import { ChurchInfo } from '@screens/ChurchInfo';
import { DuelOfTribes } from '@screens/DuelOfTribes';
import { YouthEncounter } from '@screens/YouthEncounter';

import { StackNavigator } from './stack';
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
        name="YouthEncounter"
        component={YouthEncounter}
        options={{
          tabBarIcon: ({ color, size }) => screenIcon('people', color, size),
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
      <Screen
        name="ChurchInfo"
        component={ChurchInfo}
        options={{
          tabBarIcon: ({ color, size }) => screenIcon('location', color, size),
        }}
      />
      <Screen name="Stack" component={StackNavigator} />
    </Navigator>
  );
}
