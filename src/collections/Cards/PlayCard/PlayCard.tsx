import { useEffect, useRef, useState } from "react";
import * as S from "./elements";

export interface PlayCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cardTitle: string;
  href: string;
}

export const PlayCard = ({ cardTitle, image, ...props }: PlayCardProps) => {
  const card = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.2
    };

    const handleIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const cardRefcurent = card.current;
    if (cardRefcurent) {
      observer.observe(cardRefcurent);
    }

    return () => {
      if (cardRefcurent) {
        observer.unobserve(cardRefcurent);
      }
    };
  }, []);

  return (
    <S.PlayCard {...props} ref={card}>
      <S.Link href='/' active={active}>
        <S.Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          layout='intrinsic'
        />
      </S.Link>
      <S.CardTitle active={active}>{cardTitle}</S.CardTitle>
    </S.PlayCard>
  );
};
