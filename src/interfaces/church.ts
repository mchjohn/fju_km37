export type DaysOfTheWeek =
  | 'Domingo'
  | 'Segunda'
  | 'Terça'
  | 'Quarta'
  | 'Quinta'
  | 'Sexta'
  | 'Sábado';

export interface IMeetings {
  day: DaysOfTheWeek;
  schedules: [string, string, string];
}

export type Photos = { uri: string }[];

export interface IChurch {
  photos: Photos;
  address: string;
  meetings: IMeetings[];
  image_url: string;
  description: string;
}
