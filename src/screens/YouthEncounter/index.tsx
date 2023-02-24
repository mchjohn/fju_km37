import { Box, ScrollView } from 'native-base';

import { Header } from '@components/Header';

import { Chat } from './Chat';
import { useYouthEncounter } from './useYouthEncounter';

export function YouthEncounter() {
  const { photos, isLoadingYouthEncounterPhotoData } = useYouthEncounter();

  return (
    <Box flex={1}>
      <Header title="Encontro" />

      <ScrollView
        px={4}
        pt={2}
        bg="light.100"
        showsVerticalScrollIndicator={false}
      >
        <Chat photos={photos} isLoading={isLoadingYouthEncounterPhotoData} />
      </ScrollView>
    </Box>
  );
}
