import { HStack, Heading } from 'native-base';

import Fju_km37_logo from '../../assets/imgs/fju_km37_logo.svg';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <HStack maxH={62} mb={2} justifyContent="space-between" alignItems="center">
      <Heading>{title}</Heading>

      <Fju_km37_logo width={180} />
    </HStack>
  );
}
