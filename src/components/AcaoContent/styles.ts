import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  invert: boolean;
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, invert }) => css`
    display: flex;
    overflow: hidden;
    ${media.lessThan("medium")`
    width: 35rem;
    grid-template-columns: 1fr;
    `}
    ${invert &&
    css`
    flex-direction: row-reverse;
      
    `}
    margin: 0 10rem;
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


export const ImageBox = styled.div``;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    ${media.lessThan("medium")`
    height: 35rem;
    `}
    height: 60rem;
    width: 60rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
  `}
`;

type ButtonProps = {
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Button = styled.a<ButtonProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 0 auto;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    align-self: flex-start;
    ${color == "primary" &&
    css`
      background-color: ${theme.colors.primary};
    `}
    ${color == "secondary" &&
    css`
     background-color: ${theme.colors.secondary};
    `}
      ${color == "tertiary" &&
    css`
     background-color: ${theme.colors.tertiary};
    `}
      ${color == "quaternary" &&
    css`
     background-color: ${theme.colors.quaternary};
    `}
  `}
`
