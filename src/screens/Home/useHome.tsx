import { useEffect, useState } from 'react';

import { Team } from '@interfaces/team';

import { getTeamsFromFirestore } from '@services/TeamsService';

export function useHome() {
  const [teams, setTeams] = useState([] as Team[]);

  async function getTeams() {
    try {
      const data = await getTeamsFromFirestore();
      setTeams(data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  useEffect(() => {
    getTeams();
  }, []);

  return { teams };
}
