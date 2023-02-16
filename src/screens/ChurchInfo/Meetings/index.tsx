import { Box, HStack, Heading, ScrollView } from 'native-base';

import { TimeCard } from '@components/TimeCard';

export function Meetings() {
  return (
    <Box mt={4}>
      <Heading size="md" mb={2} color="primary.800">
        Reuniões
      </Heading>

      <ScrollView
        bg="light.100"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={2}>
          <TimeCard day="Domingo" times={['07:00 h', '-', '18:00 h']} />
          <TimeCard day="Segunda" times={['07:00 h', '15:00 h', '19:00 h']} />
          <TimeCard day="Terça" times={['07:00 h', '15:00 h', '19:00 h']} />
          <TimeCard day="Quarta" times={['07:00 h', '15:00 h', '19:00 h']} />
          <TimeCard day="Quinta" times={['07:00 h', '15:00 h', '19:00 h']} />
          <TimeCard day="Sexta" times={['07:00 h', '15:00 h', '19:00 h']} />
          <TimeCard day="Sábado" times={['-', '-', '-']} />
        </HStack>
      </ScrollView>
    </Box>
  );
}
