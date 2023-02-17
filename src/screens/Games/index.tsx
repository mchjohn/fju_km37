import { Box, Heading, ScrollView, VStack } from 'native-base';

import TextGradient from '../../assets/imgs/chose_tribe_text.svg';

import { chat_photo, iurd_km37 } from '@constants/img_url';

import { FlagsCard } from './FlagsCard';
import { Header } from '@components/Header';
import { PhotoGallery } from '@components/PhotoGallery';
import { VideoGallery } from '@components/VideoGallery';
import { SliderComponent } from '@components/SliderComponent';

export function Games() {
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
            uri1={chat_photo}
            uri2={iurd_km37}
          />

          <VideoGallery
            title="Vídeos"
            textColor="white"
            uri1={chat_photo}
            uri2={chat_photo}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
