import styled, { css } from "styled-components";
import media from "styled-media-query";

type InvertProps = {
  invert: boolean;
};

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    margin: 7rem auto;
    border-top: 0.7rem solid ${theme.colors.secondary};
    border-bottom: 0.7rem solid ${theme.colors.secondary};
    width: 100%;
    padding: 1rem 5rem;
    ${media.greaterThan("medium")`
    border: 0.7rem solid ${theme.colors.secondary};
    width: 85%;
    border-radius: 1rem;
    padding: 5rem 5rem;
    `}
  `}
`;

export const Content = styled.div<InvertProps>`
  ${({ invert }) => css`
  
    display: flex;
    padding-bottom: 10rem;
    ${invert &&
    css`
      flex-direction: row-reverse;
    `}
    ${media.lessThan("medium")`
    flex-direction: column;
    `}
    div:nth-child(1) {
      ${media.greaterThan("medium")`
      margin-right: 8rem;
    `}
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

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: 5.5rem;
    color: ${theme.colors.secondary};
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
    color: ${theme.colors.white};
    ${media.lessThan("medium")`
    text-align: center;
    `}
  `}
`;

type ImageProps = {
  src: string;
};

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    height: 50rem;
    width: 100%;
    ${media.greaterThan("medium")`
      min-width: 40rem;
    `}
    ${media.lessThan("medium")`
     height: 35rem;
    `}
    ${media.greaterThan("huge")`
    width: 70rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.white};
    border-radius: 1rem;
  `}
`;

export const SecondaryImageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    ${media.lessThan("medium")`
      flex-direction: column;
    `}
  `}
`;

export const SecondaryImage = styled.div`
  ${({ theme }) => css`
    height: 20rem;
    width: 20rem;
    margin: 1.5rem auto;
    ${media.greaterThan("medium")`
    margin-right: 3rem;
    height: 20rem;
    width: 30rem;
    `}
    ${media.greaterThan("huge")`
    width: 70rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.white};
    border-radius: 1rem;
  `}
`;
