import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  invert: boolean;
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, invert }) => css`
    padding: 5rem 0;
    display: flex;
    ${media.lessThan("medium")`
    width: 40rem;
    grid-template-columns: 1fr;
    `}
    ${invert &&
    css`
      flex-direction: row-reverse;
    `}
    margin: 0 10rem;
    div:nth-child(1) {
      margin-right: 8rem;
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    ${media.lessThan("medium")`
    align-items: center;
   `}
    flex-direction: column;
    padding: ${theme.spacings.large};
    a {
      text-decoration: none;
    }
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    letter-spacing: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.large};
    text-transform: uppercase;
    color: ${theme.colors.tertiary};
  `}
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: 5.5rem;
    margin: ${theme.spacings.xsmall} 0;
    ${media.lessThan("medium")`
    font-size: 4rem;
    text-align: center;
    `}
  `}
`;
export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.darkGray};
    ${media.lessThan("medium")`
    text-align: center;
    `}
  `}
`;

export const TimeContent = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.dark};
    ${media.lessThan("medium")`
    text-align: center;
    `}
  `}
`;

export const ImageBox = styled.div``;

type ImageProps = {
  src: string;
};

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("medium")`
    height: 35rem;
    `}
    height: 50rem;
    width: 100%;
    ${media.greaterThan("huge")`
    width: 70rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.secondary};
    border-radius: 1rem;
  `}
`;
