export type Version = 'acf' | 'apee' | 'bbe' | 'kjv' | 'nvi' | 'ra' | 'rvr';

export interface IVerse {
  book: {
    abbrev: { pt: string; en: string };
    name: string;
    author: string;
    group: string;
    version: Version;
  };
  chapter: number;
  number: number;
  text: string;
}
