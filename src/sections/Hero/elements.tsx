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
  ({ theme: { colors, breakpoint } }) => css`
    font-family: "Barlow", sans-serif;
    text-shadow: rgba(114, 248, 210, 0.21) -20px 0px 27.52px;
    line-height: 103px;
    letter-spacing: 70px;
    font-weight: 700;
    font-size: 100px;

    @media ${breakpoint.max.L} {
      line-height: 63px;
      letter-spacing: 42px;
      font-size: 61px;
    }

    @media ${breakpoint.max.M} {
      line-height: 40px;
      letter-spacing: 14px;
      font-size: 40px;
    }

    color: ${colors.white};
  `
);

export const VersionSpan = styled.span(
  ({ theme: { colors, breakpoint } }) => css`
    font-family: "Barlow", sans-serif;
    text-align: center;
    line-height: 22px;
    letter-spacing: 14px;
    font-weight: 700;
    font-size: 20px;
    padding-left: 14px;
    padding-bottom: 15px;
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

    @media ${breakpoint.max.L} {
      border-bottom: 6px solid ${colors.white};
      padding-bottom: 10px;
      line-height: 22px;
      letter-spacing: 9px;
      font-weight: 700;
      font-size: 14px;
      padding-left: 9px;
      &:nth-child(1) {
        margin-right: 42px;
      }
    }

    @media ${breakpoint.max.M} {
      border-bottom: 3px solid ${colors.white};
      padding-bottom: 3px;
      line-height: 22px;
      letter-spacing: 7px;
      font-weight: 700;
      font-size: 12px;
      padding-left: 7px;
      &:nth-child(1) {
        margin-right: 14px;
      }
    }

    @media (max-width: 400px) {
      display: none;
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
    position: absolute;
    opacity: 0;
    transition: opacity 0.7s, transform 0.7s;
    transform: translateY(+400px);

    &.slide-in {
      position: relative;
      opacity: 1;
      transform: translateY(0);
    }
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
