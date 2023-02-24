import firestore from '@react-native-firebase/firestore';

import { Photos } from '@interfaces/church';
import { IYouthEncounter } from '@interfaces/youth_encounter';

import YouthEncounterMapper from '@services/mappers/YouthEncounterMapper';
import YouthEncounterPhotosMapper from '@services/mappers/YouthEncounterPhotosMapper';

export async function getYouthEncounterDataFromFirestore() {
  const doc = await firestore().collection('youth-encounter').get();

  let youthEncounterData = {} as IYouthEncounter;

  doc.forEach(docData => {
    if (!docData.exists) return {} as IYouthEncounter;

    youthEncounterData = YouthEncounterMapper.toDomain(
      docData.data() as IYouthEncounter,
    );
  });

  return youthEncounterData;
}

export async function getYouthEncounterPhotosFromFirestore() {
  const doc = await firestore().collection('youth-encounter-photos').get();

  let youthEncounterData = [] as Photos;

  doc.forEach(docData => {
    if (!docData.exists) return {} as IYouthEncounter;

    youthEncounterData = YouthEncounterPhotosMapper.toDomain(
      docData.data() as Photos,
    );
  });

  return youthEncounterData;
}
