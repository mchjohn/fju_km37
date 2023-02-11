import { Box, HStack, Heading } from 'native-base';

import Fju_km37_logo from '../../assets/imgs/fju_km37_logo.svg';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <HStack justifyContent="space-between">
      <Heading height={83}>{title}</Heading>

      <Box mt={-4}>
        <Fju_km37_logo width={180} />
      </Box>
    </HStack>
  );
}
