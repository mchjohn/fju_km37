import { Box, Center, Heading, ScrollView, VStack } from 'native-base';

import TextGradient from '../../assets/imgs/chose_tribe_text.svg';

import { default_chat_photo, default_chat_photo_2 } from '@constants/img_url';

import { VideoGallery } from '@components/VideoGallery';
import { PhotoGallery } from '@components/PhotoGallery';
import { SliderComponent } from '@components/SliderComponent';

import { useGames } from './useGames';
import { FlagsCard } from './FlagsCard';

const defaultImages = [
  { uri: default_chat_photo },
  { uri: default_chat_photo_2 },
];

export function Games() {
  const { tribes } = useGames();
  // TODO: const photos = gamesData?.photos ? gamesData.photos : defaultImages;
  const photos = defaultImages;

  return (
    <Box flex={1}>
      <Heading color="primary.800" fontSize="lg" px={4} py={2}>
        Duelo das Tribos
      </Heading>

      <Center py={4}>
        <TextGradient />
      </Center>

      <ScrollView
        bg="primary.800"
        borderTopRadius={20}
        showsVerticalScrollIndicator={false}
      >
        <VStack py={4} px={4} space={4}>
          <FlagsCard
            uri_juda={tribes?.juda.image_url}
            uri_benjamin={tribes?.benjamin.image_url}
          />

          <SliderComponent juda={tribes?.juda} benjamin={tribes?.benjamin} />

          <PhotoGallery
            title="Fotos"
            textColor="white"
            photos={photos}
            isLoading={false}
          />

          <VideoGallery
            title="Vídeos"
            textColor="white"
            uri1={default_chat_photo}
            uri2={default_chat_photo_2}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
