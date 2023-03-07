import { Dimensions } from 'react-native';
import { useCallback, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
import { Center, VStack, Heading, Spinner, ZStack } from 'native-base';

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

  return (
    <Center flex={1} bg="primary.800">
      <ZStack alignItems="center" justifyContent="center">
        <YoutubePlayer
          play={playing}
          width={width}
          height={ready ? 400 : 0}
          videoId={route.params.id}
          onChangeState={onStateChange}
          onReady={() => setReady(true)}
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
  );
}
