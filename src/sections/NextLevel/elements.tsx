import styled, { css } from "styled-components";
import { H2 as _H2, Paragraph as _Paragraph } from "components";

export const NextLevel = styled.section(
  ({ theme: { breakpoint } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    margin-top: 127px;
    display: flex;
    flex-direction: column;

    padding: 0 170px;

    @media ${breakpoint.max.L} {
      padding: 0 120px;
    }

    @media ${breakpoint.max.M} {
      padding: 0 80px;
    }

    @media ${breakpoint.max.S} {
      padding: 0 30px;
    }
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    font-family: "Barlow", sans-serif;
    text-align: center;
    font-weight: 700px;
    text-transform: uppercase;
    line-height: 1.12em;
    color: ${colors.white};
    max-width: 395px;
    font-size: 50px;

    @media ${breakpoint.max.L} {
      font-size: 45px;
    }

    @media ${breakpoint.max.M} {
      font-size: 40px;
    }

    @media ${breakpoint.max.S} {
      font-size: 36px;
    }
  `
);

export const CentrincContainer = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
);

export const BorderBottom = styled.div(
  ({ theme: { colors } }) => css`
    width: 271px;
    height: 6.4px;
    background-color: ${colors.buttonBackground};

    margin-top: 42px;
    margin-bottom: 34px;
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: 635px;
    text-align: center;
    margin: 10px 0;
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: ${colors.white};
  `
);

export const Link = styled.a(
  ({ theme: { colors } }) => css`
    position: relative;
    width: 232px;
    height: 66px;
    background-color: ${colors.buttonBackground};
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.5);

    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 40px 5px rgba(255, 255, 255, 0.5);
    }
    margin-top: 75px;
    margin-bottom: 190px;
  `
);

export const Button = styled.div(
  ({ theme: { colors } }) => css`
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    line-height: 2em;
    letter-spacing: 0.14em;
    font-weight: 700;
    text-transform: uppercase;

    transform: translateX(-5px) translateY(-5px);
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    color: red;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(0) translateY(0);
    }
  `
);
