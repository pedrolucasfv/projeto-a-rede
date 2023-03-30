import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 30rem;
    width: 100%;
    ${media.greaterThan("medium")`
    display: flex;
    justify-content: center;
    `}
    .cacto3 {
      translate: 5rem -5rem;
    }
    .cacto5 {
      translate: 5rem 5rem;
    }
    .cacto6 {
      translate: 1rem -10rem;
      ${media.greaterThan("medium")`
      translate: 5rem -15rem;
      height: 20rem;
    `}
    }
  `}
`;

type CactoProps = {
  position: "front" | "back";
  animate: boolean;
};
export const ImageCacto = styled.div<CactoProps>`
  ${({ theme, position, animate }) => css`
    height: 20rem;
    width: 20rem;
    margin: 0 auto;
    position: absolute;
    opacity: 0;
    ${media.lessThan("medium")`
    height: 15rem;
    width: 15rem;
    `}
    //border: 1rem solid green;
    ${position == "back" &&
    css`
      height: 10rem;
    `}
    ${position == "front" &&
    css`
      z-index: 20;
      height: 20rem;
      ${media.lessThan("medium")`
      translate: 5rem 5rem;
    `}
    `}
    ${animate &&
    css`
      animation: cacto-animation 6s infinite linear;
      opacity: 1;
    `}
    ${media.lessThan("medium")`
    @keyframes cacto-animation {
      0% {
        transform: translateX(40rem);
      }
      100% {
        transform: translateX(-40em);
      }
      }
    `}
    ${media.greaterThan("medium")`
    @keyframes cacto-animation {
      0% {
        transform: translateX(72rem);
      }
      100% {
        transform: translateX(-72em);
      }
      }
    `}
    ${media.greaterThan("huge")`
    @keyframes cacto-animation {
      0% {
        transform: translateX(100rem);
      }
      100% {
        transform: translateX(-100em);
      }
      }
    `}
  `}
`;
export const ImageKombi = styled.div`
  ${({ theme }) => css`
    height: 20rem;
    width: 45rem;
    ${media.greaterThan("medium")`
      min-width: 40rem;
    `}
    ${media.lessThan("medium")`
    width: 30rem;
    `}
    ${media.greaterThan("huge")`
    width: 60rem;
    `}
    position: absolute;
    z-index: 10;
    animation: kombi-animation 1.5s infinite;
    @keyframes kombi-animation {
      0%,
      100% {
        transform: translateY(0rem);
      }
      50% {
        transform: translateY(0.7rem);
      }
    }
  `}
`;
