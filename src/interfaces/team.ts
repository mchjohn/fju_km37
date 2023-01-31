interface Player {
  player: {
    name: string;
  };
}

interface Team {
  team: {
    id: string;
    slug: string;
    name: string;
    players: Player[];
  };
}

export type {Team, Player};
