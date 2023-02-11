import { api } from '@services/api';

import { IVerse, Version } from '@interfaces/verse';

const getRandomVerse = async (version: Version): Promise<IVerse> => {
  try {
    const { data } = await api.get<IVerse>(
      `https://www.abibliadigital.com.br/api/verses/${version}/random`,
    );

    return data;
  } catch (error) {
    return {} as IVerse;
  }
};

export const VerseOfTheDayService = {
  getRandomVerse,
};
