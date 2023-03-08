import { Icon } from 'native-base';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '@styles/theme';

const width = Dimensions.get('window').width;
const tabSpace = width / 25;

export const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: theme.colors.white,
  tabBarInactiveTintColor: theme.colors.primary[700],
  tabBarStyle: {
    height: 58,
    elevation: 0,
    paddingLeft: `${tabSpace}%`,
    backgroundColor: theme.colors.primary[800],
  },
};

export const screenIcon = (iconName: string, color: string, size: number) => {
  return <Icon as={<Ionicons name={iconName} />} size={size} color={color} />;
};
