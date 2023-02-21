import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';

import { getChurchDataFromFirestore } from '@services/firebase/ChurchService';

export function useChurchInfo() {
  const { data: churchData, isLoading: isLoadingChurchData } = useQuery(
    [QueryKeys.CHURCH],
    getChurchDataFromFirestore,
  );

  return { churchData, isLoadingChurchData };
}
