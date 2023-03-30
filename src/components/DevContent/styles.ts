import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  isOpen: boolean;
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isOpen }) => css`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;
    border: 0.5rem solid #e6bc53;
    ${media.greaterThan("medium")`
    width: 45rem;
    `}
    height: 35rem;
    transition: height 1s;
    overflow: hidden;
    ${isOpen &&
    css`
      height: 50rem;
    `}
  `}
`;
export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      to left top,
      #282828,
      #212121,
      #1a1a1a,
      #131313,
      #0a0a0a
    );
    grid-row: 1;
    grid-column: 1;
    border-right: solid #e6bc53 0.5rem;
  `}
`;
export const RightContent = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      to left top,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    grid-row: 1;
    grid-column: 2;
  `}
`;

export const MainContent = styled.div`
  grid-row: 1;
  grid-column: 1/3;
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: 15rem;

    margin-top: -10rem;
    height: 20rem;
    width: 20rem;

    position: absolute;
    border: solid 0.5rem #e6bc53;
    border-radius: 1rem;
  `}
`;

export const Content = styled.div`
  margin-top: 12rem;
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Bonus = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  *:nth-child(2) {
    font-size: 2rem;
    @media (max-width: 400px) {
    font-size: 1.6rem;
  }
  }
  *:nth-child(3) {
    margin-top: 2rem;
    @media (max-width: 400px) {
      margin-top: 1rem;
  }
  }
`;
export const Title = styled.h4`
  ${({ theme }) => css`
    letter-spacing: 0.3rem;
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
    color: #e6bc53;
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.darkGray};
    text-align: center;
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-top: 2rem;
    
    font-weight: ${theme.font.bold};
    padding: 2rem 3rem;
    border-radius: 1rem;
    color: ${theme.colors.white};
    background: #1616c8;
    border: solid 0.2rem #e6bc53;
    cursor: pointer;
    text-decoration: none;
    width: 25rem;
    :hover {
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.4);
    }
  `}
`;
