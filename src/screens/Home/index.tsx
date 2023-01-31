import { Text, View } from 'react-native';

import { useHome } from './useHome';

export function Home() {
  const { teams } = useHome();

  return (
    <View>
      {teams.map(({ team }) => (
        <Text key={team.id}>{team.name}</Text>
      ))}
    </View>
  );
}
