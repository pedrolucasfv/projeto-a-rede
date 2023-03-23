import Divider from "../../components/Divider";
import Menu from "../../components/Menu";

import * as S from "./styles";

export type AcaoProps = {
  name: string;
};

export const Acao = ({ name }: AcaoProps) => {
  return (
    <S.Wrapper>
      <Menu />
      <Divider title={name} color="tertiary" />
    </S.Wrapper>
  );
};

export default Acao;
