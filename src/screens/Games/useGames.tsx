import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { getTribesDataFromFirestore } from '@services/firebase/TribesService';
import { useMemo } from 'react';

export function useGames() {
  const { data: tribesData } = useQuery(
    [QueryKeys.TRIBES],
    getTribesDataFromFirestore,
  );

  const tribes = useMemo(() => {
    if (tribesData) {
      const [juda, benjamin] = tribesData;

      return { juda, benjamin };
    }
  }, [tribesData]);

  return { tribes };
}
