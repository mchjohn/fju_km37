import { HStack, Text, Center, Image, ZStack, Box, Heading } from 'native-base';

type PhotoGalleryProps = {
  uri1: string;
  uri2: string;
  title?: string;
  textColor?: string;
};

export function PhotoGallery({
  uri1,
  uri2,
  title,
  textColor = 'primary.800',
}: PhotoGalleryProps) {
  return (
    <Box>
      {title && (
        <Heading mt={4} mb={2} size="md" color={textColor}>
          {title}
        </Heading>
      )}

      <HStack space={2}>
        <Image
          source={{
            uri: uri1,
          }}
          alt="Jovens louvando a Deus"
          size="lg"
          rounded={8}
        />
        <Center w={24}>
          <ZStack alignItems="center" justifyContent="center">
            <Image
              source={{
                uri: uri2,
              }}
              alt="Jovens louvando a Deus"
              size="lg"
              rounded={8}
            />
            <Center bg="black" opacity={0.8} size="24" rounded="lg" />
            <Text color="white" fontSize="2xl" fontWeight="700">
              +8
            </Text>
          </ZStack>
        </Center>
      </HStack>
    </Box>
  );
}
