import styled, { css } from "styled-components";
import { Image as _Image, H5 as _H5 } from "components";

interface ActiveProps {
  active?: boolean;
}

export const PlayCard = styled.div(
  () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50px;
    &:nth-child(1) {
      margin-top: 0;
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
