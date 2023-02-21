import { Center, Heading, Text, Skeleton } from 'native-base';

import { DaysOfTheWeek } from '@interfaces/church';

import { Transition } from '@components/Transition';

type TimeCardProps = {
  times: [string, string, string];
  day: DaysOfTheWeek;
  isLoading: boolean;
};

export function TimeCard({ day, times, isLoading }: TimeCardProps) {
  return (
    <>
      {isLoading ? (
        <Skeleton w={20} h={24} rounded={8} />
      ) : (
        <Transition>
          <Center w={20} p={2} rounded={8} bg="primary.800">
            <Heading size="sm" color="white" mb={2}>
              {day}
            </Heading>
            {times.map((time, index) => (
              <Text key={`${time}-${index}`} color="gray.300" fontWeight="700">
                {time}
              </Text>
            ))}
          </Center>
        </Transition>
      )}
    </>
  );
}
