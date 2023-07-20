import styled, { css } from "styled-components";
import { MultiUseCard as _MultiUseCard } from "../MultiUseCard";

export const Row = styled.div(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    display: flex;

    @media ${breakpoint.max.M} {
      flex-direction: column;
    }
  `
);

export const MultiUseCard = styled(_MultiUseCard)(() => css``);
