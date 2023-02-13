import { Box, AspectRatio, Center, Image } from 'native-base';

import { youth_encounter } from '@constants/img_url';

type CardProps = {
  url?: string;
  title?: string;
};

export function YouthEncounterCard({
  url = youth_encounter,
  title = 'Encontro Jovem - Domingo às 16 horas',
}: CardProps) {
  return (
    <Box alignItems="center">
      <Box
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
                uri: url,
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
            {title}
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
