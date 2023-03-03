import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type PropsNavigationBottom = {
  Home: undefined;
  ChurchInfo: undefined;
  DuelOfTribes: undefined;
  YouthEncounter: undefined;
};

export type PropsBottom = BottomTabNavigationProp<PropsNavigationBottom>;
