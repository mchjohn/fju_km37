import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SocialIconProps = {
  iconName: 'ios-logo-facebook' | 'ios-logo-instagram' | 'ios-logo-youtube';
};

const colors = {
  'ios-logo-facebook': 'primary.600',
  'ios-logo-instagram': 'pink.500',
  'ios-logo-youtube': 'secondary.500',
};

export function SocialIcon({ iconName }: SocialIconProps) {
  const size = iconName === 'ios-logo-facebook' ? 8 : 9;

  return (
    <Icon as={Ionicons} size={size} name={iconName} color={colors[iconName]} />
  );
}
