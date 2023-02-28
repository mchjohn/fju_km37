import { HStack, Link } from 'native-base';

import { SocialIcon } from '../SocialIcon';

export type SocialMedia = {
  href: string;
  iconName: 'ios-logo-facebook' | 'ios-logo-instagram' | 'ios-logo-youtube';
};

type SocialMediaProps = {
  socialMedia: SocialMedia[];
};

export function SocialMedia({ socialMedia }: SocialMediaProps) {
  return (
    <HStack space={1} alignItems="center">
      {socialMedia.map(({ href, iconName }) => (
        <Link key={href} href={href}>
          <SocialIcon iconName={iconName} />
        </Link>
      ))}
    </HStack>
  );
}
