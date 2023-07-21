import { useEffect, useRef } from "react";
import * as S from "./elements";

export interface HeroProps {
  title: string;
  version: string;
}

export const Hero = ({ title, version, ...props }: HeroProps) => {
  const leftVersionSpanRef = useRef<HTMLSpanElement>(null);
  const rightVersionSpanRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5
    };

    const handleIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          leftVersionSpanRef.current?.classList.add("slide-in");
          rightVersionSpanRef.current?.classList.add("slide-in");
          buttonRef.current?.classList.add("slide-in");
        } else {
          //leftVersionSpanRef.current?.classList.remove("slide-in");
          //rightVersionSpanRef.current?.classList.remove("slide-in");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const titleRefcurent = titleRef.current;
    if (titleRefcurent) {
      observer.observe(titleRefcurent);
    }

    return () => {
      if (titleRefcurent) {
        observer.unobserve(titleRefcurent);
      }
    };
  }, []);

  return (
    <S.Hero {...props}>
      <S.HeroTitleDiv>
        <S.VersionSpan ref={leftVersionSpanRef}>{version}</S.VersionSpan>
        <S.HeroTitle ref={titleRef}>{title}</S.HeroTitle>
        <S.VersionSpan ref={rightVersionSpanRef}>{version}</S.VersionSpan>
      </S.HeroTitleDiv>
      <S.LinkDownContainer>
        <S.Link href='#scrollTo' ref={buttonRef}>
          <S.PolygonBackground></S.PolygonBackground>
          <S.PolygonButton></S.PolygonButton>
        </S.Link>
      </S.LinkDownContainer>
    </S.Hero>
  );
};
