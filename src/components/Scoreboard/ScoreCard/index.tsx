import { useMemo } from 'react';
import { Center, HStack, Text } from 'native-base';

type ScoreCardProps = {
  name: string;
  points?: number;
};

export function ScoreCard({ name, points }: ScoreCardProps) {
  const benjaminPoints = useMemo(() => {
    const str = String(points).split('');
    return str;
  }, [points]);

  return (
    <Center>
      <HStack space={0.5}>
        {benjaminPoints.map((number, index) => (
          <Center w={6} h={6} bg="white" key={number + index} rounded={8}>
            <Text color="primary.800" fontWeight="black" fontSize="md">
              {number}
            </Text>
          </Center>
        ))}
      </HStack>

      <Text
        pt={2}
        color="yellow.200"
        fontWeight={700}
        letterSpacing={3}
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Center>
  );
}
