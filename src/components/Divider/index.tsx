import * as S from "./styles";

export type DividerProps = {
  title: string[];
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

const Divider = ({ title, color }: DividerProps) => {

  return (
    <S.Wrapper>
      <S.BorderMenu color={color} />
      <S.BorderContent color={color}>
        <S.Content twoWords={title.length >= 2}>
          {title.map((item, index) => (
            <S.Title
              color={color}
              key={index}
            >
              <span>{item}</span>
              <span>{item}</span>
            </S.Title>
          ))}
        </S.Content>
      </S.BorderContent>
    </S.Wrapper>
  );
};
export default Divider;
