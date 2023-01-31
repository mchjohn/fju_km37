import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '@styles/theme';

export const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: theme.colors.white,
  tabBarInactiveTintColor: theme.colors.primary[700],
  tabBarStyle: {
    height: 58,
    elevation: 0,
    backgroundColor: theme.colors.primary[800],
  },
};

export const screenIcon = (iconName: string, color: string, size: number) => {
  return <Icon as={<Ionicons name={iconName} />} size={size} color={color} />;
};
