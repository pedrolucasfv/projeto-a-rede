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
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
        invert
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
        invert
      />
      <Footer />
    </S.Wrapper>
  );
};

export default Acoes;
