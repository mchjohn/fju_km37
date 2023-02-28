import { Box, Heading, ScrollView } from 'native-base';

import { iurd_km37 } from '@constants/img_url';
import {
  social_media,
  address_church,
  description_church,
} from '@constants/church';

import { Header } from '@components/Header';
import { InfoCard } from '@components/InfoCard';
import { SocialMedia } from '@components/SocialMedia';
import { PhotoGallery } from '@components/PhotoGallery';

import { Meetings } from './Meetings';
import { useChurchInfo } from './useChurchInfo';

export function ChurchInfo() {
  const { photos, churchData, isLoadingChurchData } = useChurchInfo();

  return (
    <Box pb={2} flex={1} bg="light.100">
      <Header title="Informações" />

      <ScrollView px={4} bg="light.100" showsVerticalScrollIndicator={false}>
        <InfoCard
          url={churchData?.image_url || iurd_km37}
          title={churchData?.address || address_church}
          isLoading={isLoadingChurchData}
          description={churchData?.description || description_church}
        />

        <Meetings
          meetings={churchData?.meetings}
          isLoading={isLoadingChurchData}
        />

        <PhotoGallery
          title="Galeria"
          photos={photos}
          isLoading={isLoadingChurchData}
        />

        <Box mt={4}>
          <Heading size="md" color="primary.800" mb={1}>
            Redes
          </Heading>

          <SocialMedia socialMedia={social_media} />
        </Box>
      </ScrollView>
    </Box>
  );
}
