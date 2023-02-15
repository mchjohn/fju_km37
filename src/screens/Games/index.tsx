import { Box, Heading, ScrollView } from 'native-base';

import TextGradient from '../../assets/imgs/chose_tribe_text.svg';

import { FlagsCard } from './FlagsCard';
import { Header } from '@components/Header';
import { SliderComponent } from '@components/SliderComponent';

export function Games() {
  return (
    <Box flex={1}>
      <Header title="Duelo" />

      <ScrollView
        py={4}
        px={4}
        bg="primary.800"
        borderTopRadius={20}
        showsVerticalScrollIndicator={false}
      >
        <Heading color="white" fontSize="lg">
          Duelo das Tribos
        </Heading>

        <TextGradient />

        <FlagsCard />

        <SliderComponent tribeInFirstPlace="juda" />
      </ScrollView>
    </Box>
  );
}
