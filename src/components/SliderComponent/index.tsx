import { Box, Icon, Slider } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SliderComponentProps = {
  tribeInFirstPlace: 'juda' | 'benjamin';
};

const benjamin_points = 14700;
const juda_points = 10700;

const diff_points = benjamin_points - juda_points;

const points = 100 - Math.abs(diff_points) / 100;
console.log(points);

export function SliderComponent({ tribeInFirstPlace }: SliderComponentProps) {
  return (
    <Box alignItems="center" w="100%">
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
    </Box>
  );
}
