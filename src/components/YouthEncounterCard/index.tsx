import { Box, AspectRatio, Center, Image } from 'native-base';

import { IYouthEncounter } from '@interfaces/youth_encounter';

import { Skeleton } from '@components/Skeleton';
import { Transition } from '@components/Transition';

type CardProps = {
  info: IYouthEncounter | undefined;
};

export function YouthEncounterCard({ info }: CardProps) {
  return (
    <Box alignItems="center">
      {info ? (
        <Transition>
          <Box
            mt={2}
            w="100%"
            rounded="lg"
            borderWidth="1"
            overflow="hidden"
            borderColor="gray.100"
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 11}>
                <Image
                  source={{
                    uri: info.image_url,
                  }}
                  resizeMode="stretch"
                  alt="Tema do encontro"
                />
              </AspectRatio>
              <Center
                px="3"
                py="1.5"
                bottom="0"
                roundedTopRight={4}
                bg="secondary.500"
                position="absolute"
                _text={{
                  fontSize: 'xs',
                  fontWeight: '700',
                  color: 'gray.50',
                }}
              >
                {`${info.information?.name} - ${info.information?.week_day} dia ${info.information?.day} às ${info.information?.hour} horas`}
              </Center>
            </Box>
          </Box>
        </Transition>
      ) : (
        <Skeleton />
      )}
    </Box>
  );
}
