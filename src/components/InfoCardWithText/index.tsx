import { Box, AspectRatio, Center, Image } from 'native-base';

type InfoCardWithTextProps = {
  url: string;
  title: string;
};

export function InfoCardWithText({ url, title }: InfoCardWithTextProps) {
  return (
    <Box alignItems="center" my={4}>
      <Box
        w="100%"
        rounded="lg"
        borderWidth="1"
        overflow="hidden"
        borderColor="gray.100">
        <Box>
          <AspectRatio w="100%" ratio={16 / 6}>
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
            top="0"
            position="absolute"
            _text={{
              fontSize: 'md',
              fontWeight: '700',
              color: 'gray.50',
            }}>
            Quando isso acontecer, e vocês comerem e ficarem satisfeitos, tenham
            cuidado! Não esqueçam o Senhor que os tirou do Egito, da terra da
            escravidão.
          </Center>
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
            {`${title} - Deuteronômio 6:11-12`}
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
