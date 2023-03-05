import { Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { PropsScreenStack } from '@routes/Models';

export function VideoPlayer({ route }: PropsScreenStack) {
  const { navigate } = useNavigation();
  const [playing, setPlaying] = useState(false);

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
    <Box>
      <YoutubePlayer
        play={playing}
        height={300}
        videoId={route.params.id}
        onChangeState={onStateChange}
      />
    </Box>
  );
}
