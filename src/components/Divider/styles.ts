import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ color, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    ${color == "primary" &&
    css`
      color: ${theme.colors.primary};
    `}
    ${color == "secondary" &&
    css`
      color: ${theme.colors.secondary};
    `}
      ${color == "tertiary" &&
    css`
      color: ${theme.colors.tertiary};
    `}
      ${color == "quaternary" &&
    css`
      color: ${theme.colors.quaternary};
    `}
  `}
`;

export const Title = styled.h2`
  max-width: 65rem;
  text-align: center;
  font-size: 12rem;
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 8rem;
  ${media.lessThan("medium")`
  margin-left: 5rem;
  font-size: 4rem;
  `}
`;
