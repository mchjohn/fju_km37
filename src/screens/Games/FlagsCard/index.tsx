import { HStack } from 'native-base';

import { FlagImage } from '@components/LinearGradientCard/FlagImage';
import { LinearGradientCard } from '@components/LinearGradientCard';

import { flag_juda, flag_benjamin } from '@constants/img_url';

type FlagsCardProps = {
  uri_juda?: string;
  uri_benjamin?: string;
};

export function FlagsCard({
  uri_juda = flag_juda,
  uri_benjamin = flag_benjamin,
}: FlagsCardProps) {
  return (
    <LinearGradientCard>
      <HStack space={2} w="full">
        <FlagImage
          alt="Lobo na bandeira - Tribo de Benjamin"
          uri={uri_benjamin}
        />
        <FlagImage alt="Leão na bandeira - Tribo de Judá" uri={uri_juda} />
      </HStack>
    </LinearGradientCard>
  );
}
