import * as S from "./styles";
import { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
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
      <S.BorderMenu />
      <S.LeftContent>
        <S.Text>
          Junte-se a nós para fazer a diferença na vida de quem mais precisa!
          Sua doação pode transformar o futuro de muitas pessoas e comunidades
          inteiras. Não perca a oportunidade de fazer o bem e ser parte dessa
          corrente do bem. Cada centavo conta e cada gesto de solidariedade faz
          a diferença. Vamos juntos mudar o mundo, uma doação de cada vez!
        </S.Text>
      </S.LeftContent>
      <S.RightContent>
        <S.BorderContent>
          <S.Content>
            <S.ImageWrapper>
              <Image
                src="/img/logo.png"
                alt="Logo da RF reboque"
                layout="fill"
                objectFit="cover"
              />
            </S.ImageWrapper>
            <S.TextContent>
              <S.Title fallLiquid={fallLiquid} animateLiquid={animateLiquid}>
                <span>A REDE</span>
                <span>A REDE</span>
              </S.Title>
              <S.Title fallLiquid={fallLiquid} animateLiquid={animateLiquid}>
                <span>SEMEANDO ESPERANÇA</span>
                <span>SEMEANDO ESPERANÇA</span>
              </S.Title>
            </S.TextContent>
          </S.Content>
        </S.BorderContent>
      </S.RightContent>
    </S.Wrapper>
  );
};
export default Banner;
