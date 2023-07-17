import { useEffect, useRef } from "react";
import * as S from "./elements";

export const Hero = () => {
  const leftVersionSpanRef = useRef<HTMLSpanElement>(null);
  const rightVersionSpanRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

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
        } else {
          leftVersionSpanRef.current?.classList.remove("slide-in");
          rightVersionSpanRef.current?.classList.remove("slide-in");
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
    <S.Hero>
      <S.HeroTitleDiv>
        <S.VersionSpan ref={leftVersionSpanRef}>2.0</S.VersionSpan>
        <S.HeroTitle ref={titleRef}>ENTROPIA</S.HeroTitle>
        <S.VersionSpan ref={rightVersionSpanRef}>2.0</S.VersionSpan>
      </S.HeroTitleDiv>
      <S.LinkDownContainer>
        <S.PolygonBackground></S.PolygonBackground>

        <S.PolygonButton></S.PolygonButton>
      </S.LinkDownContainer>
    </S.Hero>
  );
};
