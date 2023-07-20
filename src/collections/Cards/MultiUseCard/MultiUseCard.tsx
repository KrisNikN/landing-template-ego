import { useEffect, useRef } from "react";
import * as S from "./elements";

export interface MultiUseCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cardTitle: string;
  href: string;
}

export const MultiUseCard = ({ cardTitle, href, image, ...props }: MultiUseCardProps) => {
  const card = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.2
    };

    const handleIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          linkRef.current?.classList.add("slide-in");
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
    <S.MultiUseCard {...props} ref={card}>
      <S.Link href={href} ref={linkRef}>
        <S.Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          layout='intrinsic'
        />
      </S.Link>
      <S.CardTitle>{cardTitle}</S.CardTitle>
    </S.MultiUseCard>
  );
};
