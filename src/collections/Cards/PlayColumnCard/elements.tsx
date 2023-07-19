import styled, { css } from "styled-components";
import { PlayCard as _PlayCard } from "../PlayCard";

export const PlayColumnCard = styled.div(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      margin: 0 50px;
    }

    @media ${breakpoint.max.M} {
      &:nth-child(2) {
        margin: 0 20px;
      }
    }

    @media ${breakpoint.max.S} {
      &:nth-child(2),
      &:nth-child(3) {
        margin: 0;
        margin-top: 50px;
      }
    }
  `
);

export const PlayCard = styled(_PlayCard)(() => css``);
