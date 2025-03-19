export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionData = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: ChampionImage;
  tags: string[];
  partype: string;
};

export type ChampionResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<string, ChampionData>;
};
