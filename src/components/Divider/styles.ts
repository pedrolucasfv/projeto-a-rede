import theme from "../../styles/theme";
import styled, { css } from "styled-components";
import media from "styled-media-query";

type ColorProps = {
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const modifiers = {
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
  ${({ color, theme }) => css`
    margin-top: 15rem;
    font-weight: 700;
    max-width: 65rem;
    margin-bottom: 8rem;
    position: relative;
    span {
      position: absolute;
      color: #fff;
      font-size: 12rem;
      transform: translate(-50%, -50%);
    }
    span:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 0.1rem black;
    }
    span:nth-child(2) {
      color: rgb(128, 198, 255);
      -webkit-text-stroke: 1px #3bd9d9;
      animation: animation 3s ease-in-out infinite;
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
    ${color && modifiers[color]()}
  `}
`;
