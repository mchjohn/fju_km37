import { Box, HStack, Text } from 'native-base';

import { ITribe } from '@interfaces/tribes';

import { Skeleton } from '../Skeleton';
import { Transition } from '../Transition';
import { ScoreCard } from './ScoreCard';

type ScoreboardProps = {
  juda?: ITribe;
  benjamin?: ITribe;
  isLoading: boolean;
};

export function Scoreboard({ juda, benjamin, isLoading }: ScoreboardProps) {
  return (
    <>
      {isLoading ? (
        <Skeleton h={12} />
      ) : (
        <Transition>
          <Box alignItems="center" w="100%">
            <HStack
              w="full"
              space={4}
              alignItems="flex-start"
              justifyContent="center"
            >
              <ScoreCard
                name={benjamin?.name ?? 'Benjamin'}
                points={benjamin?.points}
              />

              <Text
                mt={0.5}
                color="yellow.200"
                textAlign="center"
                fontWeight={700}
                textTransform="uppercase"
              >
                pts
                <Text fontSize="xs">
                  {'\n'}
                  vs
                </Text>
              </Text>

              <ScoreCard name={juda?.name ?? 'Judá'} points={juda?.points} />
            </HStack>
          </Box>
        </Transition>
      )}
    </>
  );
}
