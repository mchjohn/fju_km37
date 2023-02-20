import { IVerse } from '@interfaces/verse';

import { defaultVerse, defaultVerseInfo } from '@constants/verse';

export function parseVerseInfo(verseOfTheDay: IVerse | undefined) {
  return verseOfTheDay?.book
    ? `${verseOfTheDay?.book?.name} ${verseOfTheDay?.chapter}:${verseOfTheDay?.number}`
    : defaultVerseInfo;
}

export function parseVerseText(verseOfTheDay: IVerse | undefined) {
  return verseOfTheDay?.book ? `${verseOfTheDay?.text}` : defaultVerse;
}
