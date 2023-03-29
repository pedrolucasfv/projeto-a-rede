import * as S from "./styles";
import { useState, useEffect } from "react";

export type DividerProps = {
  title: string[];
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

const Divider = ({ title, color }: DividerProps) => {
  const [fallLiquid, setFallLiquid] = useState(false);
  const [animateLiquid, setAnimateLiquid] = useState(false);

  useEffect(() => {
    async function animationLiquid() {
      setTimeout(() => setFallLiquid(true), 1000);
      setTimeout(() => setAnimateLiquid(true), 2100);
    }
    animationLiquid();
  }, []);
  return (
    <S.Wrapper>
      <S.BorderMenu color={color} />
      <S.BorderContent color={color}>
        <S.Content twoWords={title.length >= 2}>
          {title.map((item, index) => (
            <S.Title
              color={color}
              fallLiquid={fallLiquid}
              animateLiquid={animateLiquid}
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
