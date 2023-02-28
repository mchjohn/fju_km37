import { HStack } from 'native-base';

import { Skeleton } from '@components/Skeleton';
import { FlagImage } from '@components/LinearGradientCard/FlagImage';
import { Transition } from '@components/Transition';
import { LinearGradientCard } from '@components/LinearGradientCard';

import { flag_juda, flag_benjamin } from '@constants/img_url';

type FlagsCardProps = {
  isLoading: boolean;
  uri_juda?: string;
  uri_benjamin?: string;
};

export function FlagsCard({
  isLoading,
  uri_juda = flag_juda,
  uri_benjamin = flag_benjamin,
}: FlagsCardProps) {
  return (
    <>
      {isLoading ? (
        <Skeleton h={40} />
      ) : (
        <Transition>
          <LinearGradientCard>
            <HStack space={2} w="full">
              <FlagImage
                alt="Lobo na bandeira - Tribo de Benjamin"
                uri={uri_benjamin}
              />
              <FlagImage
                alt="Leão na bandeira - Tribo de Judá"
                uri={uri_juda}
              />
            </HStack>
          </LinearGradientCard>
        </Transition>
      )}
    </>
  );
}
