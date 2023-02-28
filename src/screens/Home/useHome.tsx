import { useMemo } from 'react';
import { useDisclose } from 'native-base';
import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@services/QueryKeys';
import { VerseOfTheDayService } from '@services/VerseOfTheDayService';
import { getNewsDataFromFirestore } from '@services/firebase/NewsService';
import { getYouthEncounterDataFromFirestore } from '@services/firebase/YouthEncounterService';

import { parseVerseInfo, parseVerseText } from './utils/verse_the_day';

export function useHome() {
  const { isOpen, onOpen, onClose } = useDisclose();

  const { data: youthEncounterData } = useQuery(
    [QueryKeys.YOUTH_ENCOUNTER],
    getYouthEncounterDataFromFirestore,
  );

  const { data: newsData, isLoading: isLoadingNews } = useQuery(
    [QueryKeys.NEWS],
    getNewsDataFromFirestore,
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

  return {
    isOpen,
    newsData,
    textVerse,
    verseInfo,
    isLoadingNews,
    youthEncounterData,
    onOpen,
    onClose,
  };
}
