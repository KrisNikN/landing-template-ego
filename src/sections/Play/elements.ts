import styled, { css } from "styled-components";
import { H2 as _H2, Paragraph as _Paragraph, Image as _Image } from "components";
import { PlayColumnCard as _PlayColumnCard } from "collections";

export const Play = styled.section(
  ({ theme: { breakpoint } }) => css`
    margin: 0 auto;
    margin-top: 215px;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 0 58px;

    @media ${breakpoint.max.S} {
      padding: 0 15px;
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

export const ColumnsContainer = styled.div(
  ({ theme: { breakpoint, colors } }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 103px;

    @media ${breakpoint.max.S} {
      flex-direction: column;
      padding: 0 20px;
    }
  `
);

export const PlayColumnCard = styled(_PlayColumnCard)(() => css``);

export const ImageContainer = styled.div(
  () => css`
    margin: 0 auto;
    margin-top: 170px;
    padding: 0 50px;
  `
);

export const Image = styled(_Image)(() => css``);
