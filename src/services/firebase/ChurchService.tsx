import firestore from '@react-native-firebase/firestore';

import { IChurch } from '@interfaces/church';

import ChurchMapper from '@services/mappers/ChurchMapper';

export async function getChurchDataFromFirestore() {
  const doc = await firestore().collection('church').get();

  let churchData = {} as IChurch;

  doc.forEach(docData => {
    if (!docData.exists) return;

    churchData = ChurchMapper.toDomain(docData.data() as IChurch);

    return churchData;
  });

  return churchData;
}
