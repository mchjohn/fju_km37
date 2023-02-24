import {
  Text,
  Image,
  HStack,
  Center,
  ZStack,
  Heading,
  Skeleton,
  Pressable,
  useDisclose,
} from 'native-base';
import ImageView from 'react-native-image-viewing';

import { theme } from '@styles/theme';

import { avatar_fju } from '@constants/img_url';

import { Transition } from '@components/Transition';

type PhotoGalleryProps = {
  photos: { uri: string }[];
  title?: string;
  textColor?: string;
  isLoading: boolean;
};

export function PhotoGallery({
  title,
  photos,
  textColor = 'primary.800',
  isLoading,
}: PhotoGalleryProps) {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Pressable onPress={onOpen}>
      {title && (
        <Heading mt={4} mb={2} size="md" color={textColor}>
          {title}
        </Heading>
      )}

      {isLoading ? (
        <Skeleton w={20} h={24} rounded={8} />
      ) : (
        <Transition>
          <HStack space={2} minH={24} maxH={24}>
            <Image
              source={{ uri: String(photos[0].uri) }}
              alt="Templo da IURD no KM37"
              size="lg"
              rounded={8}
              fallbackSource={{ uri: avatar_fju }}
            />

            <Center w={24}>
              <ZStack alignItems="center" justifyContent="center">
                <Image
                  source={{ uri: String(photos[1].uri) }}
                  alt="Jovens louvando a Deus"
                  size="lg"
                  rounded={8}
                  fallbackSource={{ uri: avatar_fju }}
                />
                <Center bg="black" opacity={0.8} size="24" rounded="lg" />
                <Text color="white" fontSize="2xl" fontWeight="700">
                  +8
                </Text>
              </ZStack>
            </Center>
          </HStack>
        </Transition>
      )}

      <ImageView
        images={photos}
        imageIndex={0}
        visible={isOpen}
        // eslint-disable-next-line react/no-unstable-nested-components
        FooterComponent={({ imageIndex }) => (
          <Center key={imageIndex + 1} pb={4}>
            <Text fontSize="md" color="white" fontWeight={700}>
              {imageIndex + 1} / {photos.length}
            </Text>
          </Center>
        )}
        backgroundColor={theme.colors.primary['800']}
        onRequestClose={onClose}
      />
    </Pressable>
  );
}
