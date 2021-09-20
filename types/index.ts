interface TodaysPhoto {
  copyright?: string;
  date?: string;
  explanation?: string;
  title?: string;
  url: string;
}

export interface ApiTypes {
  todaysPhoto: TodaysPhoto | undefined;
}
