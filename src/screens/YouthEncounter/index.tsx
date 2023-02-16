import { Box, ScrollView } from 'native-base';

import { Header } from '@components/Header';

import { Chat } from './Chat';

export function YouthEncounter() {
  return (
    <Box flex={1}>
      <Header title="Encontro" />

      <ScrollView
        px={4}
        pt={2}
        bg="light.100"
        showsVerticalScrollIndicator={false}
      >
        <Chat />
      </ScrollView>
    </Box>
  );
}
