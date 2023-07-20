import { MultiUseRowCardProps } from "collections";
import * as S from "./elements";

export interface MultiUseProps {
  title: string;
  paragraph: string;
  columns: MultiUseRowCardProps[];
}

export const MultiUse = ({ columns, paragraph, title, ...props }: MultiUseProps) => {
  return (
    <S.MultiUse {...props}>
      <S.Title>{title} </S.Title>
      <S.CentrincContainer>
        <S.BorderBottom></S.BorderBottom>
      </S.CentrincContainer>
      <S.CentrincContainer>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.CentrincContainer>
      <S.RowsContainer>
        {columns.map((column, index) => {
          const key = index + "rowM";
          return <S.MultiUseRowCard key={key} cards={column.cards} />;
        })}
      </S.RowsContainer>
    </S.MultiUse>
  );
};
