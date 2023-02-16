import { HStack, Heading } from 'native-base';

import Fju_km37_logo from '../../assets/imgs/fju_km37_logo.svg';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <HStack
      mb={2}
      mx={4}
      maxH={64}
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={2}
      borderBottomColor="gray.200"
    >
      <Heading color="primary.800">{title}</Heading>

      <Fju_km37_logo width={180} />
    </HStack>
  );
}
