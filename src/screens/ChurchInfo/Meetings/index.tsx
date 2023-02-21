import { Box, HStack, Heading, ScrollView } from 'native-base';

import { IMeetings } from '@interfaces/church';
import { default_meetings } from '@constants/church';

import { TimeCard } from '@components/TimeCard';

type MeetingsProps = {
  meetings: IMeetings[] | undefined;
  isLoading: boolean;
};

export function Meetings({ meetings, isLoading }: MeetingsProps) {
  const renderMeetings = meetings ? meetings : default_meetings;

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
          {renderMeetings.map(({ day, schedules }) => (
            <TimeCard
              key={day}
              day={day}
              times={schedules}
              isLoading={isLoading}
            />
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
}
