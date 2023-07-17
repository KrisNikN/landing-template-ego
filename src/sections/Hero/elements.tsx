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
    align-items: center;
  `
);

export const HeroTitle = styled.span(
  ({ theme: { colors } }) => css`
    line-height: 60px;
    letter-spacing: 40px;
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    font-size: 58px;

    line-height: 103px;
    letter-spacing: 70px;
    font-weight: 700;
    font-size: 100px;

    color: ${colors.white};
  `
);

export const VersionSpan = styled.span(
  ({ theme: { colors } }) => css`
    font-family: "Barlow", sans-serif;
    text-align: center;
    line-height: 22px;
    letter-spacing: 14px;
    font-weight: 700;
    font-size: 20px;
    padding-left: 14px;
    padding-bottom: 10px;
    color: ${colors.white};
    border-bottom: 10px solid ${colors.white};

    &:nth-child(1) {
      margin-right: 70px;
    }

    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;

    &:nth-child(1) {
      transform: translateX(-13000px);

      &.slide-in {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &:last-child {
      transform: translateX(13000px);

      &.slide-in {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `
);

export const LinkDownContainer = styled.div(
  () => css`
    width: 100%;
    margin-top: 200px;
    display: flex;
    justify-content: center;
  `
);

export const Link = styled.a(
  () => css`
    position: relative;
  `
);

export const PolygonBackground = styled.div(
  ({ theme: { colors } }) => css`
    transform: translateY(-8px);
    position: absolute;
    width: 0;
    height: 0;
    border-left: 48px solid transparent;
    border-right: 48px solid transparent;
    border-top: 50px solid ${colors.buttonBackground};
    cursor: pointer;

    transition: transform 0.2s;
    &:hover,
    &:focus {
      transform: translateY(0);
    }
    /* Replace with your desired background color */
  `
);

export const PolygonButton = styled.div(
  ({ theme: { colors } }) => css`
    pointer-events: none;
    position: relative;
    width: 0;
    height: 0;
    border-left: 48px solid transparent;
    border-right: 48px solid transparent;
    border-top: 50px solid ${colors.white}; /* Replace with your desired background color */
  `
);
