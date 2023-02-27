import { Box, Heading, ScrollView, VStack } from 'native-base';

import TextGradient from '../../assets/imgs/chose_tribe_text.svg';

import { default_chat_photo, default_chat_photo_2 } from '@constants/img_url';

import { FlagsCard } from './FlagsCard';

import { Header } from '@components/Header';
import { VideoGallery } from '@components/VideoGallery';
import { PhotoGallery } from '@components/PhotoGallery';
import { SliderComponent } from '@components/SliderComponent';

const defaultImages = [
  { uri: default_chat_photo },
  { uri: default_chat_photo_2 },
];

export function Games() {
  // TODO: const photos = gamesData?.photos ? gamesData.photos : defaultImages;
  const photos = defaultImages;

  return (
    <Box flex={1}>
      <Header title="Duelo" />

      <ScrollView
        bg="primary.800"
        borderTopRadius={20}
        showsVerticalScrollIndicator={false}
      >
        <VStack py={4} px={4} space={4}>
          <Heading color="white" fontSize="lg">
            Duelo das Tribos
          </Heading>

          <TextGradient />

          <FlagsCard />

          <SliderComponent tribeInFirstPlace="benjamin" />

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
