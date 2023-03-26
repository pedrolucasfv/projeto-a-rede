import OficinaContent from "../../components/OficinaContent";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";
import Divider from "../../components/Divider";
import OficinaCard from "@/components/OficinaCard";

const Oficinas = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu />
      </S.Menu>
      <Divider title={["OFICINAS"]} color="secondary" />
      <OficinaContent
        name="Aulas de inglês"
        description="Essa é uma oficina para ensinar inglês crianças carentes de 6 a 10 anos de idaded. Essas aulas ajudam a capacitá-las e promover um futuro melhor a elas. O inglês é de suma importância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/aula-de-ingles-1.jpeg"
        time="segunda-feira: 19:00 até 20:00"
        age="De 06 a 10 anos"
        secondaryImages={[
          "/img/aula-de-ingles-2.jpeg",
          "/img/aula-de-ingles-3.jpeg",
          "/img/aula-de-ingles-4.jpeg",
          "/img/aula-de-ingles-5.jpeg",
        ]}
      />
      <OficinaContent
        name="Aulas de música"
        description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
        image="/img/aula-de-canto-1.jpeg"
        time="Terça-feira: 18:00 até 19:00"
        age="De 07 a 15 anos"
        invert
        secondaryImages={[
          "/img/aula-de-musica-1.jpeg",
          "/img/aula-de-musica-2.jpeg",
          "/img/aula-de-musica-3.jpeg",
          "/img/aula-de-musica-4.jpeg",
        ]}
      />
      <S.OficinaCardContent>
        <OficinaCard
          name="Aulas de Jiu-Jitsu"
          description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
          image="/img/aula-de-jiujitsu.jpeg"
        />
        <OficinaCard
          name="Aulas de Informática"
          description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
          image="/img/aula-de-informatica.jpeg"
        />
         <OficinaCard
          name="Roda de Leitura"
          description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
          image="/img/roda-de-leitura.jpeg"
        />
         <OficinaCard
          name="Reforço Escolar"
          description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
          image="/img/reforco-escolar.jpeg"
        />
      </S.OficinaCardContent>
      <Footer color="secondary" />
    </S.Wrapper>
  );
};

export default Oficinas;
