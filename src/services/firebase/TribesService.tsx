import firestore from '@react-native-firebase/firestore';

import { ITribe } from '@interfaces/tribes';
import { Photos } from '@interfaces/church';

import TribesMapper from '@services/mappers/TribesMapper';
import PhotosMapper from '@services/mappers/PhotosMapper';

export async function getTribesDataFromFirestore() {
  const doc = await firestore().collection('duel-tribes').get();

  let tribesData = [] as ITribe[];

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { tribes } = docData.data();

    tribesData = TribesMapper.toDomain(tribes as ITribe[]);

    return tribesData;
  });

  return tribesData;
}

export async function getTribesPhotosFromFirestore() {
  const doc = await firestore().collection('duel-tribes-photos').get();

  let tribesPhotoData = [] as Photos;

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { photos } = docData.data();

    tribesPhotoData = PhotosMapper.toDomain(photos as Photos);
  });

  return tribesPhotoData;
}
