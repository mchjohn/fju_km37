import { Box, ScrollView } from 'native-base';

import { iurd_km37 } from '@constants/img_url';

import { Header } from '@components/Header';
import { InfoCard } from '@components/InfoCard';

export function ChurchInfo() {
  return (
    <Box px={4} flex={1}>
      <Header title="Início" />

      <ScrollView bg="light.100" showsVerticalScrollIndicator={false}>
        <InfoCard
          url={iurd_km37}
          title="Estr. Humaitá, 25 - L 15 Q 25 - Lagoinha, Nova Iguaçu, RJ"
        />
      </ScrollView>
    </Box>
  );
}
