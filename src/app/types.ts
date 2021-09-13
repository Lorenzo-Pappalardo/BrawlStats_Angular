export interface Player {
  club: {
    tag: string;
    name: string;
  };
  '3vs3Victories': 0;
  isQualifiedFromChampionshipChallenge: true;
  icon: {
    id: 0;
  };
  tag: string;
  name: string;
  trophies: 0;
  expLevel: 0;
  expPoints: 0;
  highestTrophies: 0;
  powerPlayPoints: 0;
  highestPowerPlayPoints: 0;
  soloVictories: 0;
  duoVictories: 0;
  bestRoboRumbleTime: 0;
  bestTimeAsBigBrawler: 0;
  brawlers: [
    {
      gadgets: [
        {
          name: Record<string, unknown>;
          id: 0;
        }
      ];
      starPowers: [
        {
          name: Record<string, unknown>;
          id: 0;
        }
      ];
      id: 0;
      rank: 0;
      trophies: 0;
      highestTrophies: 0;
      power: 0;
      name: Record<string, unknown>;
    }
  ];
  nameColor: string;
}

export interface Error {
  message: string;
  name: string;
  stack: string;
  config: Record<string, unknown>;
}

export const isError = (obj: any): obj is Error => {
  if ((obj as Error).message) {
    return true;
  }
  return false;
};
