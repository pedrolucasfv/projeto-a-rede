import styled from "styled-components";
import media from "styled-media-query";
import { BorderContent } from "../Divider/styles";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  color: white;
  background: linear-gradient(
    80deg,
    rgba(255, 179, 0, 1) 0%,
    rgba(248, 204, 43, 1) 31%,
    rgba(224, 184, 90, 1) 50%,
    rgba(248, 204, 43, 1) 71%,
    rgba(255, 179, 0, 1) 100%
  );
  height: 100vh;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContent = styled.div`
  display: flex;
  ${BorderContent} {
    height: 80rem;
  }
`;
export const Text = styled.h4`
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  width: 45rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 7rem;
  margin-top: -10rem;
`;
export const Subtitle = styled.h4`
  font-size: 1.9rem;
  letter-spacing: 0.1rem;
  margin-top: -1.5rem;
`;

export const Image = styled.div`
  ${media.lessThan("medium")`
    height: 35rem;
    `}
  height: 50rem;
  width: 50rem;
  background-image: url("/img/logo.png");
  background-position: center;
  background-size: cover;
  margin: 0 5rem;
`;
