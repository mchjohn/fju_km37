import { Box, AspectRatio, Center, Image } from 'native-base';

type InfoCardProps = {
  url: string;
  title: string;
};

export function InfoCard({ url, title }: InfoCardProps) {
  return (
    <Box alignItems="center" mt={4}>
      <Box
        w="100%"
        rounded="lg"
        overflow="hidden"
        borderWidth="1"
        borderColor="gray.100"
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
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
            bg="secondary.500"
            bottom="0"
            position="absolute"
            roundedTopRight={4}
            _text={{
              fontSize: 'xs',
              color: 'gray.50',
              fontWeight: '700',
            }}
          >
            {title}
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
