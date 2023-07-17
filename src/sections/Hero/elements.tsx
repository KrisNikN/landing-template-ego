import styled, { css } from "styled-components";

export const Hero = styled.section(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
  `
);

export const HeroTitleDiv = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `
);

export const HeroTitle = styled.span(
  ({ theme: { colors } }) => css`
    line-height: 60px;
    letter-spacing: 40px;
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    font-size: 58px;

    color: ${colors.white};
  `
);

export const VersionSpan = styled.span(
  ({ theme: { colors } }) => css`
    font-family: "Barlow", sans-serif;
    text-align: center;
    line-height: 21px;
    letter-spacing: 9px;
    padding-left: 9px;
    font-weight: 700;
    font-size: 13px;
    padding-bottom: 10px;
    color: ${colors.white};
    border-bottom: 6px solid ${colors.white};
    &:nth-child(1) {
      margin-right: 40px;
    }
  `
);
