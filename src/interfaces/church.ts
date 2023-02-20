type DaysOfTheWeek =
  | 'Domingo'
  | 'Segunda'
  | 'Terça'
  | 'Quarta'
  | 'Quinta'
  | 'Sexta'
  | 'Sábado';

interface IMeetings {
  day: DaysOfTheWeek;
  schedules: [string, string, string];
}

export interface IChurch {
  address: string;
  meetings: IMeetings[];
  image_url: string;
  description: string;
}
