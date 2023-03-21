import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 2rem;
    background-color: ${theme.colors.black};
    border-bottom: solid 0.5rem ${theme.colors.secondary};
    height: 10rem;
  `}
`

export const Logo = styled.div`
  margin-top: 0.6rem;
  height: 8rem;
  width: 8rem;
  background-image: url('/img/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
`

export const MenuNav = styled.div`
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
    margin: 0.3rem 2.8rem 0;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    text-align: center;
    transition: 0.5s letter-spacing;
    &:hover {
      color: ${theme.colors.primary};
    letter-spacing: 0.6rem;
    font-weight: 700;

    }
  `}
`




export const MenuGroup = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: white;
    display: flex;
    svg {
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.accent};
      }
    }
  `}
`

type MenuToggleProps = {
  isOpenMenu: boolean
}
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu }) => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 50;
    width: 42%;
    left: 0;
    top: 0;

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? 'all' : 'none'};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const Sombra = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 40;
`
type AccountProps = {
  isAccountOpen: boolean
}


