import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { getTribesDataFromFirestore } from '@services/firebase/TribesService';

export function useGames() {
  const { data: tribes } = useQuery(
    [QueryKeys.TRIBES],
    getTribesDataFromFirestore,
  );

  console.debug('tribes_', tribes);

  return { tribes };
}
