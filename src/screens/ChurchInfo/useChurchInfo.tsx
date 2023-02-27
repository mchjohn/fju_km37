import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { getChurchDataFromFirestore } from '@services/firebase/ChurchService';

import { iurd_km37, iurd_km37_2 } from '@constants/img_url';

const defaultImages = [{ uri: iurd_km37 }, { uri: iurd_km37_2 }];

export function useChurchInfo() {
  const { data: churchData, isLoading: isLoadingChurchData } = useQuery(
    [QueryKeys.CHURCH],
    getChurchDataFromFirestore,
  );

  const photos = defaultImages;

  return { photos, churchData, isLoadingChurchData };
}
