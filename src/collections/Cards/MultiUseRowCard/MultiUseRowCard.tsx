import { MultiUseCardProps } from "../MultiUseCard";
import * as S from "./elements";
import { v4 as uuidv4 } from "uuid";

export interface MultiUseRowCardProps {
  cards: MultiUseCardProps[];
}

export const MultiUseRowCard = ({ cards, ...props }: MultiUseRowCardProps) => {
  return (
    <S.Row {...props}>
      {cards.map(card => {
        return <S.MultiUseCard {...card} key={uuidv4()} />;
      })}
    </S.Row>
  );
};
