import { Box, Button, HStack, Heading } from 'native-base';

import { SocialIcon } from '@components/SocialIcon';
import { useNavigation } from '@react-navigation/native';

type VideoGalleryProps = {
  ids: string[];
  textColor?: string;
};

export function VideoGallery({
  ids,
  textColor = 'primary.800',
}: VideoGalleryProps) {
  const { navigate } = useNavigation();

  function handleGoToVideoPlayer(id: string) {
    navigate('Stack', {
      screen: 'VideoPlayer',
      params: {
        id,
      },
    });
  }

  return (
    <Box>
      <Heading mt={4} mb={2} size="md" color={textColor}>
        Vídeos
      </Heading>

      <HStack space={2}>
        {ids.map(id => (
          <Button
            key={id}
            bg="black"
            width={32}
            height={24}
            rounded="lg"
            alignItems="center"
            justifyContent="center"
            onPress={() => handleGoToVideoPlayer(id)}
          >
            <SocialIcon iconName="ios-logo-youtube" />
          </Button>
        ))}
      </HStack>
    </Box>
  );
}
