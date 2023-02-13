import { Box, HStack, Heading, ScrollView } from 'native-base';

import { youth_encounter } from '@constants/img_url';

import { ChatMessagePhoto } from '@components/ChatMessagePhoto';

export function PhotoGallery() {
  return (
    <Box mt={4}>
      <Heading size="md" mb={2}>
        Galeria
      </Heading>

      <ScrollView
        bg="light.100"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <HStack space={2}>
          <ChatMessagePhoto uri1={youth_encounter} uri2={youth_encounter} />
        </HStack>
      </ScrollView>
    </Box>
  );
}
