import { HStack, Image, Box, Heading } from 'native-base';

type VideoGalleryProps = {
  uri1: string;
  uri2: string;
  title?: string;
  textColor?: string;
};

export function VideoGallery({
  uri1,
  uri2,
  title,
  textColor = 'primary.800',
}: VideoGalleryProps) {
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
        <Image
          source={{
            uri: uri2,
          }}
          alt="Jovens louvando a Deus"
          size="lg"
          rounded={8}
        />
      </HStack>
    </Box>
  );
}
