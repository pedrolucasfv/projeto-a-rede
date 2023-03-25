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
        slug="/acao/ingles-para-criancas"
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
        slug="/"
        buttonColor="secondary"
        invert
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
        buttonColor="tertiary"
        slug="/"
      />
      <AcaoContent
        name="Inglês para crianças"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/logo.png"
        buttonColor="quaternary"
        slug="/"
        invert
      />
      <Footer />
    </S.Wrapper>
  );
};

export default Acoes;
