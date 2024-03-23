import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  ${media.greaterThan("medium")`
  display: grid;
  grid-template-columns: 2fr 1.5fr;  
  `}
  padding-top: 10rem;
`;

export const LeftContent = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan("medium")`
    margin-top: 5rem;
    padding-right: 2rem;
    padding-left: 2rem;
  `}
`;

export const RightContent = styled.div`
  grid-column: 2;
`;

export const Text = styled.h4`
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  width: 60rem;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 25rem;
  height: 40rem;
  margin-top: -10rem;
  ${media.lessThan("medium")`
      width: 40rem;
      height: 70rem;
    `}
  @media (max-width: 400px) {
    width: 20rem;
    height: 20rem;
    margin-top: -5rem;
  }
  position: relative;
`;

export const TextContent = styled.div`
  div:nth-child(1) {
    margin-top: 1rem;
    font-size: 10rem;
    ${media.lessThan("medium")`
    font-size: 5rem;
    `}
  }

  div:nth-child(2) {
    font-size: 3rem;
    ${media.lessThan("medium")`
    margin-top: -3rem;
    font-size: 1.5rem;
    `}
  }
`;
export const BorderMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: 10.5rem;
    margin-top: -10rem;
    width: 100%;
    z-index: 20;
    background-color: ${theme.colors.primary};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 30;
    top: 0;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -webkit-clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    background-color: ${theme.colors.black};
    animation: fallDown 2s forwards;
    overflow: hidden;
    text-align: center;
    @keyframes fallDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  `}
`;

export const BorderContent = styled.div`
  ${({ theme }) => css`
    margin-top: -0.5rem;
    position: relative;
    height: 80vh;
    ${media.lessThan("medium")`
    height: 40vh;
    `}
    -webkit-clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    animation: fallDown 2s forwards;
    background: ${theme.colors.primary};
    z-index: 30;
    @keyframes fallDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0%);
      }
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

type TitleProps = {
  fallLiquid: boolean;
  animateLiquid: boolean;
};

export const Title = styled.div<TitleProps>`
  ${({ theme, animateLiquid, fallLiquid }) => css`
    margin-top: 5rem;
    font-weight: 700;
    max-width: 100rem;
    margin-bottom: 8rem;
    text-transform: uppercase;
    span {
      position: absolute;
      color: #fff;
      transform: translate(-50%, -50%);
    }
    span:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 0.1rem ${theme.colors.white};
    }
    span:nth-child(2) {
      color: ${theme.colors.primary};
      -webkit-text-stroke: 1px ${theme.colors.white};
      clip-path: polygon(
        0% 0%,
        16% 0%,
        34% 0%,
        51% 0%,
        67% 0%,
        84% 0%,
        100% 0%,
        100% 60%,
        0% 60%
      );
      ${fallLiquid &&
      css`
        animation: fallLiquids 1.2s ease-in-out forwards;
      `}
      ${animateLiquid &&
      css`
        animation: animation 2.5s ease-in-out infinite;
      `}
    }
    @keyframes fallLiquids {
      0% {
        clip-path: polygon(
          0% 0%,
          16% 0%,
          34% 0%,
          51% 0%,
          67% 0%,
          84% 0%,
          100% 0%,
          100% 60%,
          0% 60%
        );
      }
      100% {
        clip-path: polygon(
          0% 45%,
          15% 44%,
          32% 50%,
          54% 60%,
          70% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%
        );
      }
    }
    @keyframes animation {
      0%,
      100% {
        clip-path: polygon(
          0% 45%,
          15% 44%,
          32% 50%,
          54% 60%,
          70% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%
        );
      }
      50% {
        clip-path: polygon(
          0% 60%,
          16% 65%,
          34% 66%,
          51% 62%,
          67% 50%,
          84% 55%,
          100% 46%,
          100% 100%,
          0% 100%
        );
      }
    }
  `}
`;


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: white;
  border: 0.2rem solid black;
  background-color: gray;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
`;
