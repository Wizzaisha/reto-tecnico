export interface Films {
  title: string;
  release_date: string;
  director: string;
  producer: string;
}
export interface FilmsDetails extends Films {
  opening_crawl: string;
  characters: Character[];
}

export interface Character {
  url: string;
  name: string;
  birth_year: string;
  gender: string;
  mass: string;
  height: string;
}

export interface CharacterDetails extends Character {
  starships: Starships[];
}

export interface Starships {
  name: string;
  model: string;
  starship_class: string;
  passengers: string;
}
