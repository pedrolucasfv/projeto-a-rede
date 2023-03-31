import styled, { css } from "styled-components";
import media from "styled-media-query";

type InvertProps = {
  invert: boolean;
};

export const Wrapper = styled.section`
  ${({ theme}) => css`
    padding: 5rem 3rem;
    background-color: ${theme.colors.black};
    border: 0.7rem solid ${theme.colors.secondary};
    border-radius: 1rem;
    width: 60rem;
    height: 40rem;
    margin: 2rem auto;
    display: flex;
  `}
`;

export const Content = styled.div<InvertProps>`
  ${({ invert }) => css`
    display: flex;
    padding-bottom: 10rem;
    ${media.lessThan("medium")`
    width: 40rem;
    `}
    ${invert &&
    css`
      flex-direction: row-reverse;
    `}
    div:nth-child(1) {
      margin-right: 8rem;
    }
  `}
`;
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 60rem;
    ${media.lessThan("medium")`
    align-items: center;
   `}
    flex-direction: column;
    padding-right: ${theme.spacings.large};
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
    color: ${theme.colors.secondary};
  `}
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: 3.5rem;
    color: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall} 0;
    ${media.lessThan("medium")`
    font-size: 4rem;
    text-align: center;
    `}
  `}
`;
export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.darkGray};
    ${media.lessThan("medium")`
    text-align: center;
    `}
  `}
`;




export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    height: 25rem;
    width: 100%;
    ${media.lessThan("medium")`
     height: 30rem;
    `}
    ${media.greaterThan("huge")`
    width: 40rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.secondary};
    border-radius: 1rem;
  `}
`;

