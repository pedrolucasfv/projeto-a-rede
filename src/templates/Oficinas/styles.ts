import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  background: linear-gradient(
    to top left,
    #e3e3e3,
    #dedede,
    #e5e5e5,
    #ececec,
    #f5f5f5
  );
  div::-webkit-scrollbar {
    height: 1rem;
  }
  div::-webkit-scrollbar-track {
    ${({ theme }) => css`
    border-radius: 2rem;
    background: ${theme.colors.gray};
      box-shadow: inset 0.05rem 0 0 #838383;
    `}
  }
  div::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
     border-radius: 2rem;
      background: ${theme.colors.secondary};
      box-shadow: inset 0.15rem 0.1rem 0.1rem rgba(255, 255, 255, 0.5),
        inset -0.15rem -0.1rem 0.1rem rgba(0, 0, 0, 1);
    `}
  }
`;

export const Menu = styled.div``;

export const OficinaCardContent = styled.div`
  display: flex;
  margin: 7rem auto;
  overflow-x: scroll;
  width: 85%;
  section {
    margin-right: 7rem;
  }
`;
