import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PropsNavigationStack = {
  Home: undefined;
  Games: undefined;
};

export type PropsNavigationBottom = {
  Home: undefined;
  Games: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
export type PropsBottom = BottomTabNavigationProp<PropsNavigationBottom>;
