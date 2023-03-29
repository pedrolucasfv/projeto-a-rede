import Footer from "../../components/Footer";
import Divider from "../../components/Divider";
import Menu from "../../components/Menu";
import SertaoInfo from "../../components/SertaoInfo";
import SertaoAnimation from "../../components/SertaoAnimation";

import * as S from "./styles";

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
      <SertaoInfo />
      <Footer color="quaternary" />
    </S.Wrapper>
  );
};

export default Expedicao;
