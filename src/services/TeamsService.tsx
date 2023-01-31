import firestore from '@react-native-firebase/firestore';

import { Player, Team } from '@interfaces/team';

export async function getTeamsFromFirestore(): Promise<Team[]> {
  const teams = [] as Team[];

  const doc = await firestore().collection('teams').get();

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { name, players, slug } = docData.data().team;

    const parsePlayers: Player[] = players.map((player: Player) => player);

    teams.push({
      team: {
        id: docData.id,
        slug,
        name,
        players: parsePlayers,
      },
    });
  });

  return teams;
}
