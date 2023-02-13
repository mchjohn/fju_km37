import { Center, Heading, Text } from 'native-base';

type TimeCardProps = {
  times: [string, string, string];
  day:
    | 'Domingo'
    | 'Segunda'
    | 'Terça'
    | 'Quarta'
    | 'Quinta'
    | 'Sexta'
    | 'Sábado';
};

export function TimeCard({ day, times }: TimeCardProps) {
  return (
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
  );
}
