import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";
import Divider from "../../components/Divider";
import AcaoContent from "../../components/AcaoContent";

const Acoes = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Divider title={["AÇÕES"]} color="tertiary" />
      <AcaoContent
        name="Aguarde para novas informações..."
        description="Vamos lhe apresentar algumas de nossas ações!"
        image="/img/logo.png"
      />
      <Footer color="tertiary" />
    </S.Wrapper>
  );
};

export default Acoes;
