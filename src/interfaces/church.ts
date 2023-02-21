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

export interface IChurch {
  address: string;
  meetings: IMeetings[];
  image_url: string;
  description: string;
}
