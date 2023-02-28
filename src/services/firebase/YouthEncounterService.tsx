import firestore from '@react-native-firebase/firestore';

import { Photos } from '@interfaces/church';
import { IYouthEncounter } from '@interfaces/youth_encounter';

import PhotosMapper from '@services/mappers/PhotosMapper';
import YouthEncounterMapper from '@services/mappers/YouthEncounterMapper';

export async function getYouthEncounterDataFromFirestore() {
  const doc = await firestore().collection('youth-encounter').get();

  let youthEncounterData = {} as IYouthEncounter;

  doc.forEach(docData => {
    if (!docData.exists) return;

    youthEncounterData = YouthEncounterMapper.toDomain(
      docData.data() as IYouthEncounter,
    );
  });

  return youthEncounterData;
}

export async function getYouthEncounterPhotosFromFirestore() {
  const doc = await firestore().collection('youth-encounter-photos').get();

  let youthEncounterPhotoData = [] as Photos;

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { photos } = docData.data();

    youthEncounterPhotoData = PhotosMapper.toDomain(photos as Photos);
  });

  return youthEncounterPhotoData;
}
