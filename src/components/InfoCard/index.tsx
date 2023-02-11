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
        borderWidth="1"
        overflow="hidden"
        borderColor="gray.100">
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
