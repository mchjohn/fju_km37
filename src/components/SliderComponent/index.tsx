import { Box, HStack, Icon, Slider, Text, VStack } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SliderComponentProps = {
  tribe_1?: 'Judá' | 'Benjamin';
  tribe_2?: 'Judá' | 'Benjamin';
  tribeInFirstPlace: 'juda' | 'benjamin';
};

const benjamin_points = 14700;
const juda_points = 10700;

const diff_points = benjamin_points - juda_points;

const points = 100 - Math.abs(diff_points) / 100;

export function SliderComponent({
  tribe_1 = 'Benjamin',
  tribe_2 = 'Judá',
  tribeInFirstPlace,
}: SliderComponentProps) {
  return (
    <Box alignItems="center" w="100%">
      <VStack w="full" alignItems="center">
        <HStack w="90%" justifyContent="space-between">
          <Text color="white" fontWeight={700}>
            {benjamin_points} pts
          </Text>
          <Text color="white" fontWeight={700}>
            {juda_points} pts
          </Text>
        </HStack>

        <Slider w="90%" size="lg" value={points}>
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
          <Text textTransform="uppercase" color="yellow.200" fontWeight={700}>
            {tribe_1}
          </Text>
          <Text textTransform="uppercase" color="yellow.200" fontWeight={700}>
            {tribe_2}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
