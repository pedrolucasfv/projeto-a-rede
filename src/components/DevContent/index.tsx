import Image from "next/image";
import * as S from "./styles";
import { useState } from "react";

const DevContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.LeftContent />
      <S.RightContent />
      <S.MainContent>
        <S.ImageWrapper>
          <Image
            src="/img/dev.jpg"
            alt="Logo da RF reboque"
            layout="fill"
            objectFit="cover"
          />
        </S.ImageWrapper>
        <S.Content>
          <S.Title>PARABÉNS!!</S.Title>
          <S.Text>
            Você achou a logo do desenvolvedor do site, <a href="https://pedro-lucas-portfolio.vercel.app/">Pedro Lucas Ferreira
            Vieira</a>! Você ganhou uma recompensa
          </S.Text>
          {!isOpen && (
            <S.Button onClick={() => setIsOpen(true)}>
              RESGATAR RECOMPENSA
            </S.Button>
          )}
          {isOpen && (
            <S.Bonus>
              <S.Title onClick={() => setIsOpen(false)}>CHAVE PIX</S.Title>
              <S.Title onClick={() => setIsOpen(false)}>
                CNPJ: 12150564812
              </S.Title>
              <S.Text onClick={() => setIsOpen(false)}>
                Você ganhou uma chave Pix, faça um depósito de 5 reais para
                o Projeto A Rede poder ajudar mais crianças a construirem um futuro melhor!
              </S.Text>
            </S.Bonus>
          )}
        </S.Content>
      </S.MainContent>
      
    </S.Wrapper>
  );
};
export default DevContent;
