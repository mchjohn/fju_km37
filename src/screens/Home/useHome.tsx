import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { VerseOfTheDayService } from '@services/VerseOfTheDayService';
import { getYouthEncounterDataFromFirestore } from '@services/firebase/YouthEncounterService';

import { parseVerseInfo, parseVerseText } from './utils/verse_the_day';

export function useHome() {
  const { data: youthEncounterData } = useQuery(
    [QueryKeys.YOUTH_ENCOUNTER],
    getYouthEncounterDataFromFirestore,
  );

  const { data: verseOfTheDay } = useQuery(
    [QueryKeys.VERSE_OF_THE_DAY],
    () => VerseOfTheDayService.getRandomVerse('nvi'),
    { staleTime: 86400000 },
  );

  const verseInfo = useMemo(
    () => parseVerseInfo(verseOfTheDay),
    [verseOfTheDay],
  );

  const textVerse = useMemo(
    () => parseVerseText(verseOfTheDay),
    [verseOfTheDay],
  );

  return { textVerse, verseInfo, youthEncounterData };
}
