import * as S from "./elements";

export interface NextLevelProps {
  title: string;
  paragraph: string;
  link: {
    text: string;
    href: string;
  };
}

export const NextLevel = ({ title, link, paragraph, ...props }: NextLevelProps) => {
  return (
    <S.NextLevel {...props}>
      <S.CentrincContainer>
        <S.Title>{title}</S.Title>
      </S.CentrincContainer>
      <S.CentrincContainer>
        <S.BorderBottom></S.BorderBottom>
      </S.CentrincContainer>
      <S.CentrincContainer>
        <S.Paragraph>{paragraph}</S.Paragraph>
      </S.CentrincContainer>
      <S.CentrincContainer>
        <S.Link href={link.href} target='_blank'>
          <S.Button>{link.text}</S.Button>
        </S.Link>
      </S.CentrincContainer>
    </S.NextLevel>
  );
};
