import ImageView from 'react-native-image-viewing';
import {
  Text,
  Image,
  HStack,
  Center,
  ZStack,
  Heading,
  Pressable,
  useDisclose,
} from 'native-base';

import { theme } from '@styles/theme';

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
  const { isOpen, onOpen, onClose } = useDisclose();

  const images = [
    {
      uri: uri1,
    },
    {
      uri: uri2,
    },
  ];

  return (
    <Pressable onPress={onOpen}>
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

      <ImageView
        images={images}
        imageIndex={0}
        visible={isOpen}
        // eslint-disable-next-line react/no-unstable-nested-components
        FooterComponent={({ imageIndex }) => (
          <Center pb={4}>
            <Text fontSize="md" color="white" fontWeight={700}>
              {imageIndex + 1} / {images.length}
            </Text>
          </Center>
        )}
        backgroundColor={theme.colors.primary['800']}
        onRequestClose={onClose}
      />
    </Pressable>
  );
}
