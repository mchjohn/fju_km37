import { Box, HStack, ScrollView } from 'native-base';

import { Header } from '@components/Header';

import { Chat } from './Chat';

export function YouthEncounter() {
  return (
    <Box px={4} pt={4} flex={1}>
      <Header title="Encontro" />

      <HStack h="2px" bg="gray.200" />

      <ScrollView pt={4} showsVerticalScrollIndicator={false}>
        <Chat />
      </ScrollView>
    </Box>
  );
}
