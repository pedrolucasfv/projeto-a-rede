import Image from "next/image";
import * as S from "./styles";

const SertaoProduct = () => (
  <S.Wrapper>
    <S.Info>
      <S.Title>CANECA EXPEDIÇÃO SERTÃO</S.Title>
      <S.Text>
        Compre uma caneca e ajude na manutenção desse projeto, toda a renda
        adiquirida das vendas vai para a execução da expedição sertão
      </S.Text>
      <S.BuyContent>
        <S.Price>R$39,99</S.Price>
        <S.Button href="https://www.instagram.com/evodianaestrada/">FAÇA SEU PEDIDO</S.Button>
      </S.BuyContent>
    </S.Info>
    <S.ImageWrapper>
      <Image
        src="/img/caneca-expedicao-sertao.jpeg"
        alt="Logo da RF reboque"
        layout="fill"
        objectFit="contain"
      />
    </S.ImageWrapper>
    <S.VideoWrapper>
      <video
        id="video3"
        src="/video/caneca-expedicao-sertao.mp4"
        autoPlay
        muted
      />
    </S.VideoWrapper>
  </S.Wrapper>
);

export default SertaoProduct;
