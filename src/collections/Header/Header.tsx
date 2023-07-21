import * as S from "./elements";

export interface HeaderProps {
  logo: {
    url: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  buttonText: string;
}

export const Header = ({ buttonText, logo, ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <S.ItemsContainer>
        <S.Link href={logo.url}>
          <S.Image
            src={logo.image.src}
            width={logo.image.width}
            height={logo.image.height}
            alt={logo.image.alt}
            layout='intrinsic'
          />
        </S.Link>
        <S.Button>{buttonText}</S.Button>
      </S.ItemsContainer>
    </S.Header>
  );
};
