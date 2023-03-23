import * as S from "./styles";

export type DividerProps = {
  title: string;
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

const Divider = ({ title, color }: DividerProps) => (
  <S.Wrapper>
    <S.Title color={color}>
      <span>{title}</span>
      <span>{title}</span>
    </S.Title>
  </S.Wrapper>
);

export default Divider;
