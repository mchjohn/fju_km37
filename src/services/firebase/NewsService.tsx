import firestore from '@react-native-firebase/firestore';

import { INews } from '@interfaces/news';

import NewsMapper from '@services/mappers/NewsMapper';

export async function getNewsDataFromFirestore() {
  const doc = await firestore().collection('news').get();

  let newsData = [] as INews[];

  doc.forEach(docData => {
    if (!docData.exists) return;

    const news: INews = NewsMapper.toDomain(docData.data());

    newsData.push(news);
  });

  return newsData;
}
