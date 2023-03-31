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
        description="Essa é uma oficina para ensinar aulas de música para as crianças de 07 a 15 anos. A música é importante na formação de uma criança para desenvolver sua criatividade e coordenação motora. Além disso, a música promove a cultura, ajuda a descobrir um pontecial talento e cria momentos de descontração e alegria."
        image="/img/aula-de-musica-1.jpeg"
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
          description="Essa é uma oficina para ensinar os alunos desenvolverem técnicas de defesa pessoal, exercícios de coordenação motora, disciplina e respeito. Além disso, a prática do Jiu Jitsu ajuda a desenvolver a confiança, autoestima e habilidades sociais das crianças, enquanto também as incentiva a adotar um estilo de vida mais ativo e saudável.  "
          image="/img/aula-de-jiujitsu.jpeg"
        />
        <OficinaCard
          name="Aulas de Informática"
          description="Nessa oficina, as crianças aprendem sobre o uso do computador, programas de software e a navegação na internet. O objetivo dessas oficinas é fornecer às crianças um entendimento básico e prático da tecnologia, bem como incentivá-las a serem mais familiarizadas com o mundo digital."
          image="/img/aula-de-informatica.jpeg"
        />
         <OficinaCard
          name="Roda de Leitura"
          description="Nessas oficinas, as crianças são convidadas a se sentarem em uma roda e a participarem de uma leitura coletiva de um livro escolhido. Durante a leitura, o professor pode fazer pausas para discutir os temas do livro, perguntar sobre os personagens e incentivar a reflexão sobre a história. O objetivo dessas oficinas é promover a leitura e o pensamento crítico das crianças, além de incentivá-las a expressar suas opiniões e ideias de forma criativa e colaborativa. "
          image="/img/roda-de-leitura.jpeg"
        />
         <OficinaCard
          name="Reforço Escolar"
          description="Nessa oficina, as crianças recebem aulas extras, com o objetivo de complementar o conteúdo apresentado nas aulas regulares, sanar dúvidas e reforçar o aprendizado. As aulas podem ser individuais ou em grupo, dependendo da demanda e da necessidade de cada criança. O objetivo dessas oficinas é ajudar as crianças a superar as dificuldades escolares, melhorar o desempenho acadêmico e aumentar a autoestima e a confiança na sua capacidade de aprendizado."
          image="/img/reforco-escolar.jpeg"
        />
      </S.OficinaCardContent>
      <Footer color="secondary" />
    </S.Wrapper>
  );
};

export default Oficinas;
