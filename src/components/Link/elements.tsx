import styled, { css } from "styled-components";
import { default as NextLink } from "next/link";

export const Link = styled.a<{ variant?: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css``
);
