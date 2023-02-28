import { useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box, HStack, Icon, Slider, Text, VStack } from 'native-base';

import { ITribe } from '@interfaces/tribes';

import { Skeleton } from '../Skeleton';
import { Transition } from '../Transition';

type SliderComponentProps = {
  juda?: ITribe;
  benjamin?: ITribe;
  isLoading: boolean;
};

export function SliderComponent({
  juda,
  benjamin,
  isLoading,
}: SliderComponentProps) {
  const sliderValue = useMemo(() => {
    const judaPoints = juda?.points;
    const benjaminPoints = benjamin?.points;

    if (typeof judaPoints !== 'number' || typeof benjaminPoints !== 'number')
      return 50;

    if (benjaminPoints > judaPoints) {
      const judaIsGreater = (judaPoints / benjaminPoints) * 100;
      const judaHasMorePoints =
        judaIsGreater <= 50 ? 100 - judaIsGreater : judaIsGreater;

      return judaHasMorePoints;
    }

    if (judaPoints > benjaminPoints) {
      const benjaminIsGreater = (benjaminPoints / judaPoints) * 100;
      const benjaminHasMorePoints =
        benjaminIsGreater >= 50 ? 100 - benjaminIsGreater : benjaminIsGreater;

      return benjaminHasMorePoints;
    }

    return 50;
  }, [benjamin, juda]);

  const tribeInFirstPlace = useMemo(() => {
    if (
      typeof benjamin?.points === 'number' &&
      typeof juda?.points === 'number'
    )
      return benjamin.points > juda.points ? 'benjamin' : 'juda';

    return 'default';
  }, [benjamin, juda]);

  return (
    <>
      {isLoading ? (
        <Skeleton h={12} />
      ) : (
        <Transition>
          <Box alignItems="center" w="100%">
            <VStack w="full" alignItems="center">
              <HStack w="90%" justifyContent="space-between">
                <Text color="white" fontWeight={700}>
                  {benjamin?.points ?? 0} pts
                </Text>
                <Text color="white" fontWeight={700}>
                  {juda?.points ?? 0} pts
                </Text>
              </HStack>

              <Slider w="90%" size="lg" value={sliderValue}>
                <Slider.Track bg="flag.juda">
                  <Slider.FilledTrack bg="flag.benjamin" />
                </Slider.Track>

                <Slider.Thumb borderWidth="0" bg={`flag.${tribeInFirstPlace}`}>
                  <Icon
                    as={Ionicons}
                    size="lg"
                    name="radio-button-on"
                    color={`flag.${tribeInFirstPlace}`}
                  />
                </Slider.Thumb>
              </Slider>

              <HStack w="90%" justifyContent="space-between">
                <Text
                  textTransform="uppercase"
                  color="yellow.200"
                  fontWeight={700}
                >
                  {benjamin?.name ?? 'Benjamin'}
                </Text>
                <Text
                  textTransform="uppercase"
                  color="yellow.200"
                  fontWeight={700}
                >
                  {juda?.name ?? 'Judá'}
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Transition>
      )}
    </>
  );
}
