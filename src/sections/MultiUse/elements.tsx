import styled, { css } from "styled-components";
import { H2 as _H2, Paragraph as _Paragraph } from "components";
import { MultiUseRowCard as _MultiUseRowCard } from "collections";

export const MultiUse = styled.section(
  ({ theme: { breakpoint } }) => css`
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    margin-top: 57px;
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

export const RowsContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
  `
);

export const MultiUseRowCard = styled(_MultiUseRowCard)(() => css``);
