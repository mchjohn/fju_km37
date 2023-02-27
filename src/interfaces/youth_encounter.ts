type DaysOfTheWeek =
  | 'Domingo'
  | 'Segunda'
  | 'Terça'
  | 'Quarta'
  | 'Quinta'
  | 'Sexta'
  | 'Sábado';

export interface IYouthEncounter {
  image_url: string;
  information: {
    name: string;
    day: number;
    hour: string;
    week_day: DaysOfTheWeek;
  };
}
