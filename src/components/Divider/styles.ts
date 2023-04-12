import styled, { css } from "styled-components";
import media from "styled-media-query";
import theme from "../../styles/theme";

type ColorProps = {
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Wrapper = styled.main`
  padding-bottom: 7rem;
`;

const colorModifiers = {
  primary: () => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: () => css`
    background-color: ${theme.colors.secondary};
  `,
  tertiary: () => css`
    background-color: ${theme.colors.tertiary};
  `,
  quaternary: () => css`
    background-color: ${theme.colors.quaternary};
  `,
};

export const BorderMenu = styled.div<ColorProps>`
  ${({ color }) => css`
    height: 10.5rem;
    z-index: 20;
    ${color && colorModifiers[color]()};
  `}
`;

type ContentProps = {
  twoWords: boolean;
};
export const Content = styled.div<ContentProps>`
  ${({ twoWords }) => css`
    position: absolute;
    z-index: 30;
    top: 0;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    background-color: ${theme.colors.black};
    animation: fallDown 2s forwards;
    @keyframes fallDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    div:nth-child(1) {
      margin-top: -5rem;
      ${twoWords &&
      css`
        margin-top: -10rem;
      `}
    }
    div:nth-child(2) {
      ${media.greaterThan("medium")`
    margin-top: 20rem;
    `}
    }
  `}
`;

export const BorderContent = styled.div<ColorProps>`
  ${({ color }) => css`
    margin-top: -0.5rem;
    position: relative;
    height: 30rem;
    ${media.lessThan("medium")`
    height: 20rem;
    `}
    -webkit-clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
    animation: fallDown 2s forwards;
    @keyframes fallDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    ${color && colorModifiers[color]()}
  `}
`;

const textModifiers = {
  primary: () => css`
    span:nth-child(2) {
      color: ${theme.colors.primary};
    }
  `,
  secondary: () => css`
    span:nth-child(2) {
      color: ${theme.colors.secondary};
    }
  `,
  tertiary: () => css`
    span:nth-child(2) {
      color: ${theme.colors.tertiary};
    }
  `,
  quaternary: () => css`
    span:nth-child(2) {
      color: ${theme.colors.quaternary};
    }
  `,
};

export const Title = styled.div<ColorProps>`
  ${({ color, theme}) => css`
    margin-top: 5rem;
    font-weight: 700;
    max-width: 100rem;
    text-transform: uppercase;
    font-size: 5rem;
    ${media.greaterThan("medium")`
    font-size: 12rem;
    margin-bottom: 5rem;
    `}
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
      color: ${theme.colors.white};
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
      animation: fallLiquids 1.2s ease-in-out forwards,
        liquidAnimation 2.5s ease-in-out infinite;
      animation-delay: 1s, 2.1s
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
    @keyframes liquidAnimation {
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
    ${color && textModifiers[color]()}
  `}
`;
