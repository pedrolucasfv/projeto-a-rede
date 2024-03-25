import * as S from './styles';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
      <S.LeftContent>
        <S.Text>
          Projeto a rede está precisando da sua ajuda! Bom Jesus do Itabapoana e
          Bom jesus do Norte sofreram com enormes quantidades de chuva e muitas
          pessoas perderam tudo, há pessoas que estão precisando de água, comida
          e produtos básicos para sobrevivencia. <a href='/enchentes'>Clique aqui para mais informações</a>
        </S.Text>
      </S.LeftContent>
    </S.Wrapper>
  );
};
export default Banner;
