import firestore from '@react-native-firebase/firestore';

import { IYouthEncounter } from '@interfaces/youth_encounter';

import YouthEncounterMapper from '@services/mappers/YouthEncounterMapper';

export async function getYouthEncounterDataFromFirestore() {
  const doc = await firestore().collection('youth-encounter').get();

  let youthEncounterData = {} as IYouthEncounter;

  doc.forEach(docData => {
    if (!docData.exists) return {} as IYouthEncounter;

    youthEncounterData = YouthEncounterMapper.toDomain(docData.data());
  });

  return youthEncounterData;
}
