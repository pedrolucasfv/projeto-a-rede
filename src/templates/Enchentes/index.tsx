import OficinaContent from '../../components/OficinaContent';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import * as S from './styles';
import Divider from '../../components/Divider';
import OficinaCard from '@/components/OficinaCard';
import Enchente from '@/components/Enchente';
import EnchenteBanner from '@/components/EnchenteBanner';

const Oficinas = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu />
      </S.Menu>
      <Divider title={['ENCHENTES']} color="secondary" />
      <EnchenteBanner />
      <Enchente
        name="Apelo por Bom Jesus e região"
        description="Em apenas um dia, as chuvas transformaram vidas em Bom Jesus do Norte, deixando marcas profundas em nossa comunidade. As águas que subiram levaram consigo os pertences e a tranquilidade de muitos, deixando para trás a necessidade de compaixão e auxílio imediato."
        image={[
          '/video/video-enchente-1.mp4',
          '/video/video-enchente-2.mp4',
          '/video/video-enchente-3.mp4',
          '/video/video-enchente-4.mp4',
          '/video/video-enchente-5.mp4',
          '/video/video-enchente-6.mp4',
          '/video/video-enchente-7.mp4',
        ]}
        time="O projeto a rede sofreu muito com essa chuva perdendo as coisas"
        age="e até cestas básicas que seriam entregues durante a semana"
        secondaryImages={[
          '/img/enchente-image-1.jpg',
          '/img/enchente-image-2.jpg',
          '/img/enchente-image-3.jpg',
          '/img/enchente-image-4.jpg',
          '/img/enchente-image-5.jpg',
        ]}
      />
      <Enchente
        name="A maior enchente já vista na região"
        description="Muitos estão apontando como a maior enchente que Bom Jesus já viu, lugares onde a água das enchentes não chegavam, hoje estão alagadas, com casas inundadas e pessoas precisando serem socorridas pelo perigo da força das águas."
        image={[
          '/video/video-enchente-15.mp4',
          '/video/video-enchente-8.mp4',
          '/video/video-enchente-9.mp4',
          '/video/video-enchente-10.mp4',
          '/video/video-enchente-11.mp4',
          '/video/video-enchente-12.mp4',
          '/video/video-enchente-14.mp4',
        ]}
        time="Pessoas estão tendo que retirar telhado de casa para conseguirem sair."
        age=""
        secondaryImages={[
          '/img/enchente-image-5.jpg',
          '/img/enchente-image-6.jpg',
          '/img/enchente-image-7.jpg',
          '/img/enchente-image-8.jpg',
          '/img/enchente-image-9.jpg',
        ]}
      />
      <Enchente
        name="O recomeço..."
        description="Agora é o momento de reconstrução, o projeto a rede está mobilizando café da manhã, marmitas, doações de cestas básicas, água, roupas, produtos básicos de higiene e limpeza. Além de estarem ouvindo a população para instruir a sua comunidade."
        image={[
          '/video/video-enchente-16.mp4',
          '/video/video-enchente-18.mp4',
          '/video/video-enchente-17.mp4',
          '/video/video-enchente-16.mp4',
          '/video/video-enchente-17.mp4',
          '/video/video-enchente-18.mp4',
        ]}  
        time="Reflexão: Olhe para a sua casa e repare em todos os objetos que você tem nela, agora imagine perder tudo que você tem aí, é difícil imaginar, mas tem pessoas passando por isso. Porém mais do que recuperar objetos, é preciso reestabelecer o emocional dessas pessoas e mostrar que não estão sozinhas."
        age=""
        secondaryImages={[
          '/img/enchente-image-10.jpg',
          '/img/enchente-image-11.jpg',
          '/img/enchente-image-12.jpg',
          '/img/enchente-image-13.jpg',
        ]}
      />
      {/* <S.OficinaCardContent>
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
      </S.OficinaCardContent> */}
      <Footer color="secondary" />
    </S.Wrapper>
  );
};

export default Oficinas;
