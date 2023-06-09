import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 2rem;
    background-color: ${theme.colors.black};
    height: 10rem;
    position: fixed;
    width: 100%;
    z-index: 100;
    @media (min-width: 1500px) {
      padding-right: 13%;
      padding-left: 13%;
    }
  `}
`;

export const Logo = styled.div`
  margin-top: 0.6rem;
  height: 8rem;
  width: 8rem;
  background-image: url("/img/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MenuNav = styled.div``;

type MenuLinkProps = {
  type?: "primary" | "secondary" | "tertiary" | "quaternary" | "all";
};

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, type }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
    margin: 0.3rem 2.8rem 0;
    padding: 3rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    text-align: center;
    transition: 0.5s letter-spacing, 0.5s font-size;
    &:hover {
      letter-spacing: 0.6rem;
      font-weight: 700;
      ${type == "primary" &&
      css`
        color: ${theme.colors.primary};
      `}
      ${type == "secondary" &&
      css`
        color: ${theme.colors.secondary};
      `}
      ${type == "tertiary" &&
      css`
        color: ${theme.colors.tertiary};
      `}
      ${type == "quaternary" &&
      css`
        color: ${theme.colors.quaternary};
      `}
      ${type == "all" &&
      css`
        font-size: 1.8rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          90deg,
          rgba(200, 50, 114, 1) 0%,
          rgba(6, 123, 177, 1) 36%,
          rgba(1, 169, 93, 1) 61%,
          rgba(255, 205, 42, 1) 100%
        );
      `}
    }
  `}
`;

export const MenuGroup = styled.div``;

type MenuToggleProps = {
  isOpenMenu: boolean;
};
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu, theme }) => css`
    background-color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 50;
    width: 42%;
    left: 0;
    top: 0;
    color: black;
    bottom: 0;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? "all" : "none"};
    > svg {
      color: ${theme.colors.white};
      margin: 1.5rem;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
    }
  `}
`;

export const Sombra = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 40;
`;

export const MenuNavMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  flex: 1;
  margin-top: 10rem;
`;

export const MenuLinkMobile = styled.a<MenuLinkProps & MenuToggleProps>`
  ${({ theme, type, isOpenMenu }) => css`
    margin: 0.3rem 2.8rem 0;
    padding: 3rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 1.6rem;
    transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
    transition: transform 0.3s ease-in-out;
    ${type == "primary" &&
    css`
      color: ${theme.colors.primary};
    `}
    ${type == "secondary" &&
    css`
      color: ${theme.colors.secondary};
    `}
      ${type == "tertiary" &&
    css`
      color: ${theme.colors.tertiary};
    `}
      ${type == "quaternary" &&
    css`
      color: ${theme.colors.quaternary};
    `}
  `}
`;
