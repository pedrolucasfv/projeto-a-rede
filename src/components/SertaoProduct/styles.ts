import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 5rem 5rem;
    border-radius: 1rem;
    width: 85%;
    margin: 7rem auto;
    ${media.lessThan("medium")`
    width: 100%;
    padding: 1rem 5rem;
    `}

    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 4rem;
    grid-template-rows: 1fr auto;
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    background-color: ${theme.colors.black};
    border: solid 0.5rem ${theme.colors.quaternary};
    border-radius: 1rem;

  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    letter-spacing: 0.2rem;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.quaternary};
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};
    color: ${theme.colors.white};
    ${media.lessThan("medium")`
    text-align: center;
    `}
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    height: 40rem;
    width: 40rem;
    position: relative;
    border: solid 0.5rem ${theme.colors.black};
    border-radius: 1rem;
    margin: auto;
  `}
`;

export const VideoWrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 2;
    grid-row: 1/3;

    position: relative;
    border-radius: 1rem;
    video {
      height: 75rem;
      border: solid 0.5rem ${theme.colors.quaternary};
    border-radius: 1rem;

    }
  `}
`;

export const BuyContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    padding: 2rem 4rem;
    border-radius: 1rem;
    color: ${theme.colors.white};
    background-color: #BC1821;
    border: solid 0.2rem ${theme.colors.white};
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    padding: 2rem 4rem;
    border-radius: 1rem;
    color: ${theme.colors.white};
    background: ${theme.colors.quaternary};
    border: solid 0.2rem ${theme.colors.white};
    cursor: pointer;
    text-decoration: none;
    :hover {
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.4);
    }
  `}
`;
