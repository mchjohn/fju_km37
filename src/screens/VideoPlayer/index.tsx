import Ionicons from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
  Box,
  Icon,
  Center,
  VStack,
  ZStack,
  Button,
  Heading,
  Spinner,
} from 'native-base';

import { PropsScreenStack } from '@routes/Models';

const width = Dimensions.get('window').width;

export function VideoPlayer({ route }: PropsScreenStack) {
  const { navigate } = useNavigation();
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        setPlaying(false);

        navigate('DuelOfTribes');
      }
    },
    [navigate],
  );

  function handleGoBack() {
    setPlaying(false);
    navigate('DuelOfTribes');
  }

  return (
    <Box flex={1} bg="primary.800">
      <Button
        m={4}
        maxW="1/4"
        justifyContent="flex-start"
        leftIcon={
          <Icon
            as={Ionicons}
            size="lg"
            name="md-arrow-back-sharp"
            color="white"
          />
        }
        onPress={handleGoBack}
      >
        Voltar
      </Button>

      <Center flex={1}>
        <ZStack alignItems="center" justifyContent="center">
          <YoutubePlayer
            play={playing}
            width={width}
            height={ready ? 400 : 0}
            videoId={route.params.id}
            onReady={() => setReady(true)}
            onChangeState={onStateChange}
          />

          {!ready && (
            <VStack space={2} justifyContent="center">
              <Spinner
                size="lg"
                color="red.600"
                accessibilityLabel="Carregando vídeo"
              />
              <Heading color="red.600" fontSize="md">
                Calma jovem, estamos carregando o vídeo...
              </Heading>
            </VStack>
          )}
        </ZStack>
      </Center>
    </Box>
  );
}
