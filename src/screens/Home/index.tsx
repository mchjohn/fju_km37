import { Box, ScrollView } from 'native-base';

import Carrousel from '@components/Carrousel';
import { Header } from '@components/Header';
import { InfoCardWithText } from '@components/InfoCardWithText';
import { YouthEncounterCard } from '@components/YouthEncounterCard';

import { useHome } from './useHome';

export function Home() {
  const { newsData, textVerse, verseInfo, youthEncounterData } = useHome();

  return (
    <Box flex={1}>
      <Header title="Início" />

      <ScrollView px={4} bg="light.100" showsVerticalScrollIndicator={false}>
        <YouthEncounterCard info={youthEncounterData} />

        <Carrousel news={newsData} />

        <InfoCardWithText title={textVerse} verseInfo={verseInfo} />
      </ScrollView>
    </Box>
  );
}
