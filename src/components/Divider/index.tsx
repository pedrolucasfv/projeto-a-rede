import * as S from "./styles";

export type DividerProps = {
  title: string;
};

const Divider = ({ title }: DividerProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Divider;
