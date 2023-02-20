import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { Box, Center, Text } from 'native-base';

import { theme } from '@styles/theme';
import { Transition } from '../Transition';

type InfoCardWithTextProps = {
  title: string;
  colors?: (string | number)[];
  verseInfo: string;
};

const defaultColors = [
  theme.colors.primary[600],
  theme.colors.primary[700],
  theme.colors.primary[900],
];

export function InfoCardWithText({
  title,
  verseInfo,
  colors = defaultColors,
}: InfoCardWithTextProps) {
  return (
    <Transition>
      <Box alignItems="center" my={2}>
        <Box
          w="100%"
          minH={100}
          rounded="lg"
          borderWidth="1"
          overflow="hidden"
          borderColor="gray.100"
        >
          <Box>
            <LinearGradient colors={colors} style={styles.linearGradient}>
              <Text fontSize="md" fontWeight="700" color="gray.50" mb={8}>
                {title}
              </Text>
            </LinearGradient>
            <Center
              px="3"
              py="1.5"
              bottom="0"
              roundedTopRight={4}
              bg="secondary.500"
              position="absolute"
              _text={{
                fontSize: 'xs',
                fontWeight: '700',
                color: 'gray.50',
              }}
            >
              {`Versículo do dia ${verseInfo}`}
            </Center>
          </Box>
        </Box>
      </Box>
    </Transition>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    padding: 8,
  },
});
