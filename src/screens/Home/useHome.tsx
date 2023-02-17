import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Version } from '@interfaces/verse';

import { QueryKeys } from '@services/QueryKeys';
import { VerseOfTheDayService } from '@services/VerseOfTheDayService';
import { getYouthEncounterDataFromFirestore } from '@services/firebase/YouthEncounterService';

import { defaultVerse, defaultVerseInfo } from '@constants/verse';

export function useHome(version: Version) {
  const { data: youthEncounterData } = useQuery(
    [QueryKeys.YOUTH_ENCOUNTER],
    getYouthEncounterDataFromFirestore,
  );

  const { data: verseOfTheDay } = useQuery(
    [QueryKeys.VERSE_OF_THE_DAY, version],
    () => VerseOfTheDayService.getRandomVerse(version),
    { staleTime: 86400000 },
  );

  const verseInfo = useMemo(() => {
    return verseOfTheDay
      ? `${verseOfTheDay?.book?.name} ${verseOfTheDay?.chapter}:${verseOfTheDay?.number}`
      : defaultVerseInfo;
  }, [verseOfTheDay]);

  const textVerse = useMemo(() => {
    return verseOfTheDay ? `${verseOfTheDay?.text}` : defaultVerse;
  }, [verseOfTheDay]);

  return { textVerse, verseInfo, youthEncounterData };
}
