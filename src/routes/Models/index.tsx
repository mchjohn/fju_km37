import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type PropsNavigationBottom = {
  Home: undefined;
  Games: undefined;
  ChurchInfo: undefined;
  YouthEncounter: undefined;
};

export type PropsBottom = BottomTabNavigationProp<PropsNavigationBottom>;
