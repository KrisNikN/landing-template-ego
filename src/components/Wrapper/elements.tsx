import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  () => css`
    width: 100%;
    background-image: url("/imgs/landing-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    padding-top: 300px;
    overflow-x: hidden;
  `
);
