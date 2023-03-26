import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
`;

export const Button = styled.div`
  background: linear-gradient(
    80deg,
    rgba(255, 179, 0, 1) 0%,
    rgba(248, 204, 43, 1) 31%,
    rgba(224, 184, 90, 1) 50%,
    rgba(248, 204, 43, 1) 71%,
    rgba(255, 179, 0, 1) 100%
  );
  margin: 5rem 0;
  padding: 2.5rem 3.5rem;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: 1.5rem;
  color: white;
  letter-spacing: 0.2rem;
  transition: letter-spacing 0.5s;
  font-weight: 500;
  cursor: pointer;
  :hover {
    letter-spacing: 0.5rem;
    font-weight: 700;
  }
`;

export const VideoContent = styled.div`
  ${({ theme }) => css`
  border: 0.5rem solid ${theme.colors.primary};
  border-radius: 1rem;
  background-color: black;
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    `}
  video {
    margin-top: 0.5rem;
    border-radius: 1rem;
    
    width: 22.5rem;
    height: 40rem;
  }
  `}
`;
