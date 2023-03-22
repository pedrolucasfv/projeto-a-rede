import * as S from "./styles";

export type DividerProps = {
  title: string;
  color: "primary" | "secondary" | "tertiary" | "quaternary"
};

const Divider = ({ title, color }: DividerProps) => (
  <S.Wrapper color={color}>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Divider;
