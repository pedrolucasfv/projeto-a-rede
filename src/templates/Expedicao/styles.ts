import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  background: linear-gradient(
    to top left,
    #e3e3e3,
    #dedede,
    #e5e5e5,
    #ececec,
    #f5f5f5
  );
`;

export const Animation = styled.div`
  margin-top: 15rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10rem;
  ${media.lessThan("medium")`
     flex-direction: column;
     text-align: center;
    `}
`;

export const InfoContent = styled.div`
  ${media.lessThan("medium")`
     flex-direction: column;
      margin-top: 2rem;
     
    `}
`;

export const Text = styled.h2`
  ${({ theme }) => css`
    margin: 6rem auto;
    letter-spacing: 0.2rem;
    width: 75%;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.large};

    color: ${theme.colors.darkGray};
    text-align: center;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    letter-spacing: 0.2rem;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.quaternary};
  `}
`;
export const InfoText = styled.h2`
  ${({ theme }) => css`
    letter-spacing: 0.2rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
  `}
`;

export const ProductContent = styled.div``;
