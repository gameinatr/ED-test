export interface IToDoCard {
  content: string;
  date: number;
  id: number;
}

export interface IToDoCardProps {
  card: IToDoCard;
  cards: any[];
  setCards: React.Dispatch<React.SetStateAction<any>>;
}
