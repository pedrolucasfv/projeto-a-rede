import Image from "next/image";
import * as S from "./styles";

const SertaoInfo = () => (
  <S.Wrapper>
    <S.Content>
      <S.Info>
        <S.Text>
          A Expedição Sertão é um projeto que busca levar ajuda e conforto às
          comunidades mais afastadas e carentes do sertão nordestino. Com a
          utilização de uma Kombi adaptada, duas pessoas viajam pelo interior,
          distribuindo cestas básicas para famílias que muitas vezes passam por
          dificuldades financeiras e alimentares.
        </S.Text>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src="/img/expedicao-sertao-0.jpeg"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
    </S.Content>
    <S.Content>
      <S.Info>
        <S.Text>
          Além da distribuição de alimentos, a Expedição Sertão também distribuí
          bíblias e evangeliza, levando uma mensagem de fé e esperança para
          aqueles que muitas vezes se sentem esquecidos e abandonados pela
          sociedade.
        </S.Text>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src="/img/expedicao-sertao-1.jpeg"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
    </S.Content>
    <S.Content>
      <S.Info>
        <S.Text>
          O projeto é mantido por meio de doações de pessoas e instituições, bem
          como da renda gerada pelas vendas de produtos diversos, como canecas e
          camisas personalizadas, também são vendidos produtos religiosos por
          em uma espécie de stand utilizando a Kombi.
        </S.Text>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src="/img/expedicao-sertao-3.jpeg"
          alt="Logo da RF reboque"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
    </S.Content>
  </S.Wrapper>
);

export default SertaoInfo;
