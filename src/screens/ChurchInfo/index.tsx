import { Box, HStack, Heading, ScrollView } from 'native-base';

import { youth_encounter, iurd_km37 } from '@constants/img_url';
import { address_church, description_church } from '@constants/church';

import { Header } from '@components/Header';
import { InfoCard } from '@components/InfoCard';
import { SocialIcon } from '@components/SocialIcon';
import { PhotoGallery } from '@components/PhotoGallery';

import { Meetings } from './Meetings';
import { useChurchInfo } from './useChurchInfo';

export function ChurchInfo() {
  const { churchData, isLoadingChurchData } = useChurchInfo();

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

        <Meetings />

        <PhotoGallery
          title="Galeria"
          uri1={youth_encounter}
          uri2={youth_encounter}
        />

        <Box mt={4}>
          <Heading size="md" color="primary.800" mb={1}>
            Redes
          </Heading>

          <HStack space={1} alignItems="center">
            <SocialIcon iconName="ios-logo-youtube" />
            <SocialIcon iconName="ios-logo-instagram" />
            <SocialIcon iconName="ios-logo-facebook" />
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
