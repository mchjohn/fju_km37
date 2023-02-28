import { Box, ScrollView } from 'native-base';

import { about_youth_encounter } from '@constants/youth_encounter';

import Carrousel from '@components/Carrousel';
import { Header } from '@components/Header';
import { ModalInfo } from '@components/ModalInfo';
import { InfoCardWithText } from '@components/InfoCardWithText';
import { YouthEncounterCard } from '@components/YouthEncounterCard';

import { useHome } from './useHome';

export function Home() {
  const {
    isOpen,
    newsData,
    textVerse,
    verseInfo,
    isLoadingNews,
    youthEncounterData,
    onOpen,
    onClose,
  } = useHome();

  return (
    <Box flex={1}>
      <Header title="Início" />

      <ScrollView px={4} bg="light.100" showsVerticalScrollIndicator={false}>
        <YouthEncounterCard info={youthEncounterData} onOpen={onOpen} />

        <Carrousel news={newsData} isLoading={isLoadingNews} />

        <InfoCardWithText title={textVerse} verseInfo={verseInfo} />
      </ScrollView>

      <ModalInfo
        title={
          youthEncounterData?.information.name ?? about_youth_encounter.title
        }
        description={
          youthEncounterData?.description ?? about_youth_encounter.description
        }
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}
