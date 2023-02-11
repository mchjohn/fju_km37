import { Box } from 'native-base';

import { Card } from '@components/Card';
import { Header } from '@components/Header';

export function Home() {
  return (
    <Box h="full" px={4} bg="light.100">
      <Header title="Início" />

      <Card title="Encontro Jovem - Domingo dia 12 às 16 horas" />
    </Box>
  );
}
