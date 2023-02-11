import { ScrollView } from 'native-base';

import { bg_blue, duel_tribes } from '@constants/img_url';

import { Header } from '@components/Header';
import { InfoCard } from '@components/InfoCard';
import { InfoCardWithText } from '@components/InfoCardWithText';
import { YouthEncounterCard } from '@components/YouthEncounterCard';

export function Home() {
  return (
    <ScrollView
      px={4}
      pt={2}
      pb={10}
      // style={{ marginBottom: 20 }}
      showsVerticalScrollIndicator={false}
      bg="light.100">
      <Header title="Início" />

      <YouthEncounterCard title="Encontro Jovem - Domingo dia 12 às 16 horas" />

      <InfoCard url={duel_tribes} title="Duelo das Tribos" />

      <InfoCardWithText url={bg_blue} title="Versículo do dia" />
    </ScrollView>
  );
}
