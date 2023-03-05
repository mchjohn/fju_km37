import { Box, Center, Heading, ScrollView, VStack } from 'native-base';

import TextGradient from '../../assets/imgs/chose_tribe_text.svg';

import { Scoreboard } from '@components/Scoreboard';
import { VideoGallery } from '@components/VideoGallery';
import { PhotoGallery } from '@components/PhotoGallery';

import { FlagsCard } from './FlagsCard';
import { useDuelOfTribes } from './useDuelOfTribes';

export function DuelOfTribes() {
  const {
    tribes,
    photos,
    videos,
    loadingTribesData,
    loadingTribesPhotos,
    loadingTribesVideos,
  } = useDuelOfTribes();

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
            isLoading={loadingTribesData}
            uri_juda={tribes?.juda.image_url}
            uri_benjamin={tribes?.benjamin.image_url}
          />

          <Scoreboard
            juda={tribes?.juda}
            benjamin={tribes?.benjamin}
            isLoading={loadingTribesData}
          />

          <PhotoGallery
            title="Fotos"
            photos={photos}
            textColor="white"
            isLoading={loadingTribesPhotos}
          />

          <VideoGallery
            ids={videos}
            isLoading={loadingTribesVideos}
            textColor="white"
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
