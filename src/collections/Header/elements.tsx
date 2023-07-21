import styled, { css } from "styled-components";
import type { HTMLHeaderProps } from "types";
import { Image as _Image, Link as _Link, Button as _Button } from "components";

export const Header = styled("header")<HTMLHeaderProps>`
  /* position: sticky;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.headerBackground};
  z-index: 100;
  font-size: 12px;
  height: 54px;
  line-height: 54px; */
`;

export const ItemsContainer = styled.div(
  () => css`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 20px;
  `
);

export const Image = styled(_Image)(() => css``);

export const Link = styled(_Link)(
  () => css`
    padding-top: 5px;
  `
);

export const Button = styled(_Button)(
  () => css`
    align-self: center;
    margin-bottom: 5px;
  `
);
