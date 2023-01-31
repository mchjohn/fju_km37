import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const options = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: '#323C54',
  tabBarStyle: {
    height: 58,
    elevation: 0,
    backgroundColor: '#00183A',
  },
};

export const screenIcon = (iconName: string, color: string, size: number) => {
  return <Icon as={<Ionicons name={iconName} />} size={size} color={color} />;
};
