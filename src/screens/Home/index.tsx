import { Box, ScrollView } from 'native-base';

import { duel_tribes } from '@constants/img_url';

import { Header } from '@components/Header';
import { InfoCard } from '@components/InfoCard';
import { InfoCardWithText } from '@components/InfoCardWithText';
import { YouthEncounterCard } from '@components/YouthEncounterCard';

import { useHome } from './useHome';

export function Home() {
  const { textVerse, verseInfo } = useHome('nvi');

  return (
    <Box flex={1}>
      <Header title="Início" />

      <ScrollView px={4} bg="light.100" showsVerticalScrollIndicator={false}>
        <YouthEncounterCard title="Encontro Jovem - Domingo dia 12 às 16 horas" />

        <InfoCard url={duel_tribes} title="Duelo das Tribos" />

        <InfoCardWithText title={textVerse} verseInfo={verseInfo} />
      </ScrollView>
    </Box>
  );
}
