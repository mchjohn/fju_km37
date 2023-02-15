import { HStack } from 'native-base';

import { flag_benjamin, flag_juda } from '@constants/img_url';

import { FlagImage } from '@components/LinearGradientCard/FlagImage';
import { LinearGradientCard } from '@components/LinearGradientCard';

export function FlagsCard() {
  return (
    <LinearGradientCard>
      <HStack space={2} w="full">
        <FlagImage
          alt="Lobo na bandeira - Tribo de Benjamin"
          uri={flag_benjamin}
        />
        <FlagImage alt="Leão na bandeira - Tribo de Judá" uri={flag_juda} />
      </HStack>
    </LinearGradientCard>
  );
}
