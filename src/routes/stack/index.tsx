import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PropsNavigationStack } from '@routes/Models';

import { VideoPlayer } from '@screens/VideoPlayer';

const { Navigator, Screen } =
  createNativeStackNavigator<PropsNavigationStack>();

export function StackNavigator() {
  return (
    <Navigator
      initialRouteName="VideoPlayer"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="VideoPlayer" component={VideoPlayer} />
    </Navigator>
  );
}
