import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 5rem 5rem;
    background: ${theme.colors.black};
    border: 0.7rem solid ${theme.colors.quaternary};
    border-radius: 1rem;
    width: 85%;
    margin: 7rem auto;
    ${media.lessThan("medium")`
    width: 100%;
    padding: 1rem 5rem;
    `}

    display: flex;
    flex-direction: column;
    div:nth-child(even) {
     flex-direction: row-reverse
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 10rem;
`;
export const Info = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-size: 3.2rem;
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.white};
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
    border: solid 0.5rem ${theme.colors.quaternary};
    border-radius: 1rem;
  `}
`;
