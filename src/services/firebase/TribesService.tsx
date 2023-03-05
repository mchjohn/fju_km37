import firestore from '@react-native-firebase/firestore';

import { Photos } from '@interfaces/church';
import { ITribe, Videos } from '@interfaces/tribes';

import TribesMapper from '@services/mappers/TribesMapper';
import PhotosMapper from '@services/mappers/PhotosMapper';
import VideosMapper from '@services/mappers/VideosMapper';

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

export async function getDuelTribesVideosFromFirestore() {
  const doc = await firestore().collection('duel-tribes-videos').get();

  let duelTribesVideosData = [] as Videos;

  doc.forEach(docData => {
    if (!docData.exists) return;

    const { videos } = docData.data();

    duelTribesVideosData = VideosMapper.toDomain(videos as Videos);
  });

  return duelTribesVideosData;
}
