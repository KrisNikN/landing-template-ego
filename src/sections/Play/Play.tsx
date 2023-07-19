import { PlayColumnCardProps } from "collections";
import * as S from "./elements";

export interface PlayProps {
  title: string;
  paragraph: string;
  columns: PlayColumnCardProps[];
  laptopImage: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

export const Play = ({ columns, paragraph, title, laptopImage, ...props }: PlayProps) => {
  return (
    <S.Play {...props}>
      <S.Title>{title}</S.Title>
      <S.CentrincContainer>
        <S.BorderBottom></S.BorderBottom>
      </S.CentrincContainer>
      <S.CentrincContainer>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.CentrincContainer>
      <S.ColumnsContainer>
        {columns.map((column, index) => {
          const key = index + "column";
          return <S.PlayColumnCard key={key} cards={column.cards} />;
        })}
      </S.ColumnsContainer>
      <S.ImageContainer>
        <S.Image
          src={laptopImage.src}
          alt={laptopImage.alt}
          height={laptopImage.height}
          width={laptopImage.width}
        />
      </S.ImageContainer>
    </S.Play>
  );
};
