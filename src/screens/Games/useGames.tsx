import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import {
  getTribesDataFromFirestore,
  getTribesPhotosFromFirestore,
} from '@services/firebase/TribesService';

import { default_chat_photo, default_chat_photo_2 } from '@constants/img_url';

const defaultImages = [
  { uri: default_chat_photo },
  { uri: default_chat_photo_2 },
];

export function useGames() {
  const { data: tribesPhotos, isLoading: loadingTribesPhotos } = useQuery(
    [QueryKeys.TRIBES_PHOTOS],
    getTribesPhotosFromFirestore,
  );

  const { data: tribesData, isLoading: loadingTribesData } = useQuery(
    [QueryKeys.TRIBES],
    getTribesDataFromFirestore,
  );

  const tribes = useMemo(() => {
    if (tribesData) {
      const [juda, benjamin] = tribesData;

      return { juda, benjamin };
    }
  }, [tribesData]);

  const photos = tribesPhotos ? tribesPhotos : defaultImages;

  return { tribes, loadingTribesData, photos, loadingTribesPhotos };
}
