import styled, { css } from "styled-components";
import { Image as _Image, H5 as _H5 } from "components";

interface ActiveProps {
  active?: boolean;
}

export const MultiUseCard = styled.div(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    &:nth-child(2) {
      margin: 0 30px;
      margin-top: 43px;
    }

    margin-top: 43px;

    display: flex;
    flex-direction: column;

    @media ${breakpoint.max.M} {
      &:nth-child(2) {
        margin: 0;
        margin-top: 43px;
      }
    }
  `
);

export const Image = styled(_Image)(() => css``);

export const Link = styled.a<ActiveProps>(
  ({ active }) => css`
    background-color: black;
    width: 100%;
    clip-path: inset(0 0 5px 0);

    img {
      transition: opacity 0.5s;
    }

    &:hover,
    &:focus {
      img {
        opacity: 0.3;
      }
    }

    opacity: 0;
    transition: opacity 0.9s, transform 0.9s;
    transform: translateY(+200px);

    ${active &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
  `
);

export const CardTitle = styled(_H5)<ActiveProps>(
  ({ theme: { colors }, active }) => css`
    font-family: "Barlow", sans-serif;
    text-align: center;
    text-transform: uppercase;
    margin-top: 32px;
    font-size: 20px;
    line-height: 1.4em;
    font-weight: 700;
    color: ${colors.white};

    opacity: 0;
    transition: opacity 0.9s, transform 0.9s;
    transform: translateY(+200px);

    ${active &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
  `
);
