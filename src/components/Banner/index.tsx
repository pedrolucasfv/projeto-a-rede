import Divider from "../Divider";
import * as S from "./styles";

const Banner = () => (
  <S.Wrapper>
    <S.LeftContent>
      <S.Text>
        Junte-se a nós para fazer a diferença na vida de quem mais precisa! Sua
        doação pode transformar o futuro de muitas pessoas e comunidades
        inteiras. Não perca a oportunidade de fazer o bem e ser parte dessa
        corrente do bem. Cada centavo conta e cada gesto de solidariedade faz a
        diferença. Vamos juntos mudar o mundo, uma doação de cada vez!
      </S.Text>
    </S.LeftContent>
    <S.RightContent>
      <Divider title={["rede"]} color="primary" />
    </S.RightContent>
  </S.Wrapper>
);

export default Banner;
