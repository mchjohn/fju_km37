import { Box, AspectRatio, Center, Image } from 'native-base';

type CardProps = {
  url?: string;
  title?: string;
};

const defaultUrl =
  'https://firebasestorage.googleapis.com/v0/b/fju-km37.appspot.com/o/youth_encounter%2Fretrovisor.jpeg?alt=media&token=13cf60f6-2084-4f29-89b3-8d194e3ab699';

export function Card({
  url = defaultUrl,
  title = 'Encontro Jovem - Domingo às 16 horas',
}: CardProps) {
  return (
    <Box alignItems="center">
      <Box
        w="100%"
        rounded="lg"
        borderWidth="1"
        overflow="hidden"
        borderColor="gray.100">
        <Box>
          <AspectRatio w="100%" ratio={4 / 3}>
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
            }}>
            {title}
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
