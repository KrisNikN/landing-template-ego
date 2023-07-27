import { PlayCardProps } from "../PlayCard";
import * as S from "./elements";
import { v4 as uuidv4 } from "uuid";

export interface PlayColumnCardProps {
  cards: PlayCardProps[];
}

export const PlayColumnCard = ({ cards, ...props }: PlayColumnCardProps) => {
  return (
    <S.PlayColumnCard {...props}>
      {cards.map(card => {
        return <S.PlayCard key={uuidv4()} {...card} />;
      })}
    </S.PlayColumnCard>
  );
};
