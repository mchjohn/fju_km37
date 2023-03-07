import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type PropsNavigationBottom = {
  Home: undefined;
  ChurchInfo: undefined;
  DuelOfTribes: undefined;
  YouthEncounter: undefined;
  Stack: NavigatorScreenParams<PropsNavigationStack>;
};

export type PropsNavigationStack = {
  VideoPlayer: { id: string };
};

export type PropsBottom = BottomTabNavigationProp<PropsNavigationBottom>;

export type PropsScreenStack = NativeStackScreenProps<
  PropsNavigationStack,
  'VideoPlayer'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends PropsNavigationBottom,
        PropsNavigationStack {}
  }
}
