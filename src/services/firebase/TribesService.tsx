import firestore from '@react-native-firebase/firestore';

import { ITribes } from '@interfaces/tribes';

import TribesMapper from '@services/mappers/TribesMapper';

export async function getTribesDataFromFirestore() {
  const doc = await firestore().collection('duel-tribes').get();

  let tribesData = [] as ITribes[];

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { tribes } = docData.data();

    tribesData = TribesMapper.toDomain(tribes as ITribes[]);

    return tribesData;
  });

  return tribesData;
}
