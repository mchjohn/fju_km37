import { Box, ScrollView } from 'native-base';

import { Header } from '@components/Header';

import { Chat } from './Chat';

export function YouthEncounter() {
  return (
    <Box px={4} flex={1}>
      <Header title="Encontro" />

      <ScrollView bg="light.100" pt={2} showsVerticalScrollIndicator={false}>
        <Chat />
      </ScrollView>
    </Box>
  );
}
