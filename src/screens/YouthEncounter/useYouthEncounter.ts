import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { getYouthEncounterPhotosFromFirestore } from '@services/firebase/YouthEncounterService';

import { default_chat_photo, default_chat_photo_2 } from '@constants/img_url';

const defaultImages = [
  { uri: default_chat_photo },
  { uri: default_chat_photo_2 },
];

export function useYouthEncounter() {
  const {
    data: youthEncounterPhotoData,
    isLoading: isLoadingYouthEncounterPhotoData,
  } = useQuery(
    [QueryKeys.YOUTH_ENCOUNTER_PHOTOS],
    getYouthEncounterPhotosFromFirestore,
  );

  const photos = youthEncounterPhotoData
    ? youthEncounterPhotoData
    : defaultImages;

  return { photos, isLoadingYouthEncounterPhotoData };
}
