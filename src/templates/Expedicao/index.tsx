import Footer from "../../components/Footer";
import Divider from "../../components/Divider";
import Menu from "../../components/Menu";
import SertaoInfo from "../../components/SertaoInfo";
import SertaoAnimation from "../../components/SertaoAnimation";

import * as S from "./styles";
import SertaoProduct from "@/components/SertaoProduct";

export type ExpedicaoProps = {
  name: string;
};

export const Expedicao = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Divider title={["expedição", "sertão"]} color="quaternary" />
      <S.Animation>
        <SertaoAnimation />
      </S.Animation>
      <S.Container>
      <S.Text>
        Expedição Sertão é um projeto paralelo ao projeto a rede, as doações
        para expedição sertão são exclusivamente para essa ação e não se
        misturam com as doações para os custos do projeto a rede.
      </S.Text>
      <S.Info>
        <S.InfoContent>
          <S.Title>DOAÇÕES PIX </S.Title>
          <S.InfoText>EMAIL: expedicaosertao2023@gmail.com</S.InfoText>
        </S.InfoContent>
        <S.InfoContent>
          <S.Title>ACOMPANHE EM </S.Title>
          <S.InfoText>
            <a href="https://www.instagram.com/evodianaestrada/">@evadionaestrada</a>
          </S.InfoText>
        </S.InfoContent>
        <S.InfoContent>
          <S.Title>ESTADOS PERCORRIDOS</S.Title>
          <S.InfoText>ES - BA - PE - AL - RN - CE - MA - PI</S.InfoText>
        </S.InfoContent>
      </S.Info>
      <SertaoInfo />
      <S.ProductContent>
       <SertaoProduct />
      </S.ProductContent>
      </S.Container>
      <Footer color="quaternary" />
    </S.Wrapper>
  );
};

export default Expedicao;
