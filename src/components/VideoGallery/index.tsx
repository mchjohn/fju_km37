import { useNavigation } from '@react-navigation/native';
import { Box, Button, HStack, Heading } from 'native-base';

import { Skeleton } from '@components/Skeleton';
import { SocialIcon } from '@components/SocialIcon';

type VideoGalleryProps = {
  ids: { id: string }[];
  isLoading: boolean;
  textColor?: string;
};

export function VideoGallery({
  ids,
  isLoading,
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

      {isLoading ? (
        <Skeleton w={32} h={24} />
      ) : (
        <HStack space={2}>
          {ids.map(({ id }) => (
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
      )}
    </Box>
  );
}
